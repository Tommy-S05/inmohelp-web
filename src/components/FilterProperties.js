'use client'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Select, SelectItem} from "@nextui-org/select";
import {Tooltip} from "@nextui-org/tooltip";
import {Input} from "@nextui-org/input";
import {useFormContext, Controller} from "react-hook-form";
import {useSearchParams} from 'next/navigation'

export default function FilterProperties({status, loading, property_types, provinces, neighborhoods}) {
    const {
        register,
        setValue,
        getValues,
        watch,
        reset,
        control
    } = useFormContext();
    const searchParams = useSearchParams()
    const code = searchParams.get('code')
    const property_type_param = searchParams.get('property_type')
    const min_price = searchParams.get('min_price')
    const max_price = searchParams.get('max_price')
    const numbersOptions = [1, 2, 3, 4, 5, 6]
    
    const handleAffordable = () => {
        const affordable = getValues('affordable')
        setValue('affordable', !affordable)
    }
    const handlePurpose = (purpose) => {
        const actualPurpose = getValues('purpose')
        setValue('purpose', actualPurpose === purpose ? '' : purpose)
    }
    
    return (
        <aside className={'hidden lg:block'}>
            <Card className="max-w-[320px] min-w-[280px] xl:min-w-[320px]">
                <CardBody>
                    <fieldset
                        className={'flex flex-col justify-center items-center space-y-12'}
                    >
                        <div className={'w-full flex flex-col justify-center items-center space-y-5'}>
                            {
                                status === 'authenticated' && (
                                    <Tooltip
                                        placement={'top'}
                                        color={'default'}
                                        content={
                                            watch('affordable') ? (
                                                <div className={'text-danger py-2'}>
                                                    <p>
                                                        Si desactivas esta opción los resultados de las propiedades
                                                    </p>
                                                    <p>
                                                        no estarán ajustadas a su situación económica.
                                                    </p>
                                                </div>
                                            ) : (
                                                <div className={'text-danger py-2'}>
                                                    <p>
                                                        Si activas esta opción los resultados de las propiedades
                                                    </p>
                                                    <p>
                                                        estarán ajustadas a su situación económica.
                                                    </p>
                                                </div>
                                            )
                                        }
                                    >
                                        <Button
                                            type={'submit'}
                                            color={"primary"}
                                            variant={watch('affordable') ? "solid" : "ghost"}
                                            onClick={() => handleAffordable()}
                                            className={'max-w-xs w-full text-xl font-bold py-7'}
                                        >
                                            Solo para tí
                                        </Button>
                                    </Tooltip>
                                )
                            }
                            <ButtonGroup>
                                <Button
                                    type={'submit'}
                                    color={watch('purpose') === "Venta" ? "primary" : "default"}
                                    variant={watch('purpose') === "Venta" ? "solid" : "ghost"}
                                    onClick={() => handlePurpose("Venta")}
                                >
                                    Venta
                                </Button>
                                <Button
                                    type={'submit'}
                                    color={watch('purpose') === "Alquiler" ? "primary" : "default"}
                                    variant={watch('purpose') === "Alquiler" ? "solid" : "ghost"}
                                    onClick={() => handlePurpose("Alquiler")}
                                >
                                    Alquiler
                                </Button>
                            </ButtonGroup>
                        </div>
                        <Select
                            {...register("property_type")}
                            label={"Tipo de propiedad"}
                            placeholder={"Selecciona"}
                            labelPlacement={"outside"}
                            classNames={{
                                label: 'text-[#414342] font-bold text-lg',
                            }}
                            defaultSelectedKeys={property_type_param ? [property_type_param] : []}
                        >
                            {
                                property_types?.map((property_type) => (
                                    <SelectItem key={property_type.id} value={property_type.id}>
                                        {property_type.name}
                                    </SelectItem>
                                ))
                            }
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
                            {
                                provinces?.map((province) => (
                                    <SelectItem key={province.id} value={province.id}>
                                        {province.name}
                                    </SelectItem>
                                ))
                            }
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
                            {
                                neighborhoods?.map((neighborhood) => (
                                    <SelectItem key={neighborhood.id} value={neighborhood.id}>
                                        {neighborhood.name}
                                    </SelectItem>
                                ))
                            }
                        </Select>
                        <Select
                            {...register("bedrooms")}
                            label={"Habitaciones"}
                            placeholder="Selecciona"
                            labelPlacement="outside"
                            classNames={{
                                label: 'text-[#414342] font-bold text-lg',
                            }}
                        >
                            {
                                numbersOptions.map((option) => (
                                    <SelectItem value={option} key={option} textValue={option}>
                                        {option}
                                    </SelectItem>
                                ))
                            }
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
                            {
                                numbersOptions.map((option) => (
                                    <SelectItem value={option} key={option} textValue={option}>
                                        {option}
                                    </SelectItem>
                                ))
                            }
                        </Select>
                        
                        <Select
                            {...register("garages")}
                            label={"Parqueos"}
                            placeholder="Selecciona"
                            labelPlacement="outside"
                            classNames={{
                                label: 'text-[#414342] font-bold text-lg',
                            }}
                        >
                            {
                                numbersOptions.map((option) => (
                                    <SelectItem value={option} key={option} textValue={option}>
                                        {option}
                                    </SelectItem>
                                ))
                            }
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
                        
                        <Input
                            {...register("min_price")}
                            type={"number"}
                            label={"Precio desde"}
                            labelPlacement={"outside"}
                            placeholder={'Sin mínimo'}
                            classNames={{
                                label: 'text-[#414342] font-bold text-lg',
                            }}
                            defaultValue={min_price}
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
                            defaultValue={max_price}
                            endContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">$</span>
                                </div>
                            }
                            onWheel={(event) => event.target.blur()}
                        />
                    </fieldset>
                </CardBody>
                <CardFooter className={'flex justify-end items-center'}>
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
                </CardFooter>
            </Card>
        </aside>
    )
}