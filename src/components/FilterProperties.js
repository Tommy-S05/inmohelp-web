'use client'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Select, SelectItem} from "@nextui-org/select";
import {Input} from "@nextui-org/input";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {useFormContext, Controller} from "react-hook-form";

export default function FilterProperties({session, loading}) {
    const {status} = useSession();
    const {
        register,
        setValue,
        getValues,
        watch,
        reset,
        control
    } = useFormContext();
    
    const handleAffordable = () => {
        const affordable = getValues('affordable')
        setValue('affordable', !affordable)
    }
    const handlePurpose = (purpose) => {
        setValue('purpose', purpose)
    }
    
    return (
        <aside className={'hidden lg:block'}>
            <Card className="max-w-[320px] min-w-[280px] xl:min-w-[320px]">
                <CardBody>
                    <fieldset
                        className={'flex flex-col justify-center items-center space-y-5'}
                    >
                        {
                            (session?.user || status === 'authenticated') && (
                                <Button
                                    type={'button'}
                                    color={"primary"}
                                    variant={watch('affordable') ? "solid" : "ghost"}
                                    onClick={() => handleAffordable()}
                                    className={'max-w-xs w-full text-xl font-bold py-7'}
                                >
                                    Solo para tí
                                </Button>
                            )
                        }
                        <ButtonGroup>
                            <Button
                                type={'button'}
                                color={watch('purpose') === "Venta" ? "primary" : "default"}
                                variant={watch('purpose') === "Venta" ? "solid" : "ghost"}
                                onClick={() => handlePurpose("Venta")}
                            >
                                Venta
                            </Button>
                            <Button
                                type={'button'}
                                color={watch('purpose') === "Alquiler" ? "primary" : "default"}
                                variant={watch('purpose') === "Alquiler" ? "solid" : "ghost"}
                                onClick={() => handlePurpose("Alquiler")}
                            >
                                Alquiler
                            </Button>
                        </ButtonGroup>
                        
                        <Select
                            {...register("province")}
                            label={"Tipo de propiedad"}
                            placeholder={"Selecciona"}
                            labelPlacement={"outside"}
                            classNames={{
                                label: 'text-[#414342] font-bold text-lg',
                            }}
                        >
                            <SelectItem key={1} value={1}>
                                Apartamento
                            </SelectItem>
                            <SelectItem key={2} value={2}>
                                Casa
                            </SelectItem>
                        </Select>
                        
                        {/*<Controller*/}
                        {/*    control={control}*/}
                        {/*    name="property_type"*/}
                        {/*    render={({field}) => (*/}
                        {/*        <Select*/}
                        {/*            {...field}*/}
                        {/*            label={"Tipo de propiedad"}*/}
                        {/*            placeholder={"Selecciona"}*/}
                        {/*            labelPlacement={"outside"}*/}
                        {/*            classNames={{*/}
                        {/*                label: 'text-[#414342] font-bold text-lg',*/}
                        {/*            }}*/}
                        {/*        >*/}
                        {/*            <SelectItem key={1} value={1}>*/}
                        {/*                Apartamento*/}
                        {/*            </SelectItem>*/}
                        {/*            <SelectItem key={2} value={2}>*/}
                        {/*                Casa*/}
                        {/*            </SelectItem>*/}
                        {/*        </Select>*/}
                        {/*    )}*/}
                        {/*/>*/}
                        
                        <Select
                            {...register("province")}
                            label={"Provincia"}
                            placeholder="Selecciona"
                            labelPlacement="outside"
                            classNames={{
                                label: 'text-[#414342] font-bold text-lg',
                            }}
                        >
                            <SelectItem value={1} key={1}>
                                Distrito Nacional
                            </SelectItem>
                            <SelectItem value={2} key={2}>
                                Azua
                            </SelectItem>
                            <SelectItem value={25} key={25}>
                                Santiago
                            </SelectItem>
                        </Select>
                        
                        <Select
                            {...register("neighborhood")}
                            label={"Sector"}
                            placeholder="Selecciona"
                            labelPlacement="outside"
                            classNames={{
                                label: 'text-[#414342] font-bold text-lg',
                            }}
                        >
                            <SelectItem value={33} key={33}>
                                Ensanche Naco
                            </SelectItem>
                            <SelectItem value={34} key={34}>
                                Piantini
                            </SelectItem>
                            <SelectItem value={49} key={49}>
                                Bella Vista
                            </SelectItem>
                        </Select>
                        <div
                            className={'w-full flex flex-col space-y-5 xl:space-y-0 xl:flex-row xl:justify-between xl:gap-x-5'}>
                            <Select
                                {...register("bedrooms")}
                                label={"Habitaciones"}
                                placeholder="Selecciona"
                                labelPlacement="outside"
                                classNames={{
                                    label: 'text-[#414342] font-bold text-lg',
                                }}
                            >
                                <SelectItem value={1} key={1}>
                                    1
                                </SelectItem>
                                <SelectItem value={2} key={2}>
                                    2
                                </SelectItem>
                                <SelectItem value={3} key={3}>
                                    3
                                </SelectItem>
                                <SelectItem value={4} key={4}>
                                    4
                                </SelectItem>
                            </Select>
                            
                            <Select
                                {...register("bathrooms")}
                                label={"Baños"}
                                placeholder="Selecciona"
                                labelPlacement="outside"
                                classNames={{
                                    label: 'text-[#414342] font-bold text-lg',
                                }}
                            >
                                <SelectItem value={1} key={1}>
                                    1
                                </SelectItem>
                                <SelectItem value={2} key={2}>
                                    2
                                </SelectItem>
                                <SelectItem value={3} key={3}>
                                    3
                                </SelectItem>
                                <SelectItem value={4} key={4}>
                                    4
                                </SelectItem>
                            </Select>
                        </div>
                        
                        <div
                            className={'w-full flex flex-col space-y-5 xl:space-y-0 xl:flex-row xl:justify-between xl:gap-x-5'}>
                            <Select
                                {...register("garages")}
                                label={"Parqueos"}
                                placeholder="Selecciona"
                                labelPlacement="outside"
                                classNames={{
                                    label: 'text-[#414342] font-bold text-lg',
                                }}
                            >
                                <SelectItem value={1} key={1}>
                                    1
                                </SelectItem>
                                <SelectItem value={2} key={2}>
                                    2
                                </SelectItem>
                                <SelectItem value={3} key={3}>
                                    3
                                </SelectItem>
                                <SelectItem value={4} key={4}>
                                    4
                                </SelectItem>
                            </Select>
                            
                            <Input
                                {...register("area")}
                                type={"number"}
                                label={"Área"}
                                labelPlacement={"outside"}
                                placeholder={`Área (m${'\u00B2'})`}
                                classNames={{
                                    label: 'text-[#414342] font-bold text-lg',
                                }}
                                endContent={
                                    <div className="pointer-events-none flex items-center">
                                        <span className="text-default-400 text-small">m{'\u00B2'}</span>
                                    </div>
                                }
                                onWheel={(event) => event.target.blur()}
                            />
                        </div>
                        
                        <div
                            className={'w-full flex flex-col space-y-5 xl:space-y-0 xl:flex-row xl:justify-between xl:gap-x-5'}>
                            <Input
                                {...register("min_price")}
                                type={"number"}
                                label={"Precio desde"}
                                labelPlacement={"outside"}
                                placeholder={'Sin mínimo'}
                                classNames={{
                                    label: 'text-[#414342] font-bold text-lg',
                                }}
                                endContent={
                                    <div className="pointer-events-none flex items-center">
                                        <span className="text-default-400 text-small">$</span>
                                    </div>
                                }
                                onWheel={(event) => event.target.blur()}
                            />
                            
                            <Input
                                {...register("max_price")}
                                type={"number"}
                                label={"Precio hasta"}
                                labelPlacement={"outside"}
                                placeholder={'Sin máximo'}
                                classNames={{
                                    label: 'text-[#414342] font-bold text-lg',
                                }}
                                endContent={
                                    <div className="pointer-events-none flex items-center">
                                        <span className="text-default-400 text-small">$</span>
                                    </div>
                                }
                                onWheel={(event) => event.target.blur()}
                            />
                        </div>
                    </fieldset>
                </CardBody>
                <CardFooter className={'flex justify-between'}>
                    <Button
                        type={'submit'}
                        size={'md'}
                        color={"primary"}
                        variant={"ghost"}
                        className={'text-xs'}
                        isLoading={loading}
                    >
                        Aplicar filtros
                    </Button>
                    <Button
                        type={'button'}
                        size={'md'}
                        color={"secondary"}
                        variant={"ghost"}
                        onClick={() => {
                            // reset(defaultValues)
                            console.log(watch('property_type'))
                        }}
                        className={'text-xs'}
                    >
                        Limpiar filtros
                    </Button>
                </CardFooter>
            </Card>
        </aside>
    )
}