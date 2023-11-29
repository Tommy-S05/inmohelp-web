import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import {Input} from "@nextui-org/input";
import {useFormContext, Controller} from "react-hook-form";
import {Button} from "@nextui-org/button";
import {Select, SelectItem} from "@nextui-org/select";
import {FiPercent} from "react-icons/fi";

export default function LoanSetting({showSave = false, loading, loanSetting}) {
    const {register, control, formState: {errors}} = useFormContext();
    return (
        <Card className={"max-w-[400px] min-w-[320px] md:min-w-[400px] justify-center items-center mt-5"}>
            <CardHeader className="flex gap-3">
                <h1>
                    Preferencias
                </h1>
            </CardHeader>
            <Divider/>
            <CardBody>
                <fieldset className={'space-y-10'}>
                    <Controller
                        name={'down_payment_available'}
                        control={control}
                        rules={{required: true, min: 0}}
                        render={({field}) => (
                            <Input
                                {...field}
                                type={'number'}
                                label={"Inicial para comprar"}
                                labelPlacement={'outside'}
                                placeholder={' '}
                                isDisabled={loading}
                                isClearable={true}
                                classNames={{
                                    label: 'text-default-600 text-sm xxs:text-base',
                                }}
                                variant={"bordered"}
                                isInvalid={!!errors?.down_payment_available}
                                color={errors?.down_payment_available ? "danger" : "default"}
                                errorMessage={
                                    errors?.down_payment_available?.type === 'required' ? 'El inicial para comprar es requerida' :
                                        errors?.down_payment_available?.type === 'min' ? 'El inicial para comprar minimo es 0' : null
                                }
                                onWheel={(event) => event.target.blur()}
                            />
                        )}
                    />
                    
                    <Controller
                        name={'interest_rate'}
                        control={control}
                        rules={{required: true, min: 0, max: 35}}
                        render={({field}) => (
                            <Input
                                {...field}
                                type={"number"}
                                label={"Tasa de interés (anual)"}
                                labelPlacement={'outside'}
                                placeholder={'Tasa de interés'}
                                isDisabled={loading}
                                classNames={{
                                    label: 'text-default-600 text-sm xxs:text-base',
                                }}
                                endContent={
                                    <FiPercent
                                        className={'w-4 h-4 text-secondary pointer-events-none flex-shrink-0'}/>
                                }
                                variant={"bordered"}
                                isInvalid={!!errors?.interest_rate}
                                color={errors?.interest_rate ? "danger" : "default"}
                                errorMessage={
                                    errors?.interest_rate?.type === 'required' ? 'La tasa de interés es requerida' :
                                        errors?.interest_rate?.type === 'min' ? 'La tasa de interés minima es 0' :
                                            errors?.interest_rate?.type === 'max' ? 'La tasa de interés máxima es 35' : null
                                }
                                onWheel={(event) => event.target.blur()}
                            />
                        )}
                    />
                    
                    <Select
                        label={"Plazo del préstamo"}
                        placeholder={"Selecciona"}
                        labelPlacement={"outside"}
                        {...register('loan_term', {required: true})}
                        defaultSelectedKeys={[`${loanSetting.loan_term}`]}
                        variant={'bordered'}
                        color={'default'}
                        classNames={{
                            label: 'text-default-600 text-sm xxs:text-base',
                        }}
                    >
                        <SelectItem key={30} value={30}>
                            30 años
                        </SelectItem>
                        <SelectItem key={25} value={25}>
                            25 años
                        </SelectItem>
                        <SelectItem key={20} value={20}>
                            20 años
                        </SelectItem>
                        <SelectItem key={15} value={15}>
                            15 años
                        </SelectItem>
                        <SelectItem key={10} value={10}>
                            10 años
                        </SelectItem>
                        <SelectItem key={5} value={5}>
                            5 años
                        </SelectItem>
                    </Select>
                    {/*<Input*/}
                    {/*    {...register("loan_term")}*/}
                    {/*    classNames={{*/}
                    {/*        label: 'text-default-600 text-sm xxs:text-base',*/}
                    {/*    }}*/}
                    {/*    label={"Plazo de préstamo (años)"}*/}
                    {/*    labelPlacement={'outside'}*/}
                    {/*    placeholder={' '}*/}
                    {/*    variant={"bordered"}*/}
                    {/*    type={"number"}*/}
                    {/*    onWheel={(event) => event.target.blur()}*/}
                    {/*/>*/}
                </fieldset>
            </CardBody>
            {
                showSave && (
                    <CardFooter>
                        <Button
                            className={'text-white rounded-tl-xl rounded-br-xl hover:bg-primary/80'}
                            radius={'none'}
                            type={"submit"}
                            variant={"solid"}
                            color={"primary"}
                            isLoading={loading}
                        >
                            Guardar
                        </Button>
                    </CardFooter>
                )
            }
        </Card>
    )
}