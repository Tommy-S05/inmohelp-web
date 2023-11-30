import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import {useFormContext, Controller} from "react-hook-form";
import {TfiMoney} from "react-icons/tfi";
import {Select, SelectItem} from "@nextui-org/select";
import {FiPercent} from "react-icons/fi";
import {Button} from "@nextui-org/button";
import {AiOutlineCalculator, AiOutlineClear} from "react-icons/ai";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import useFinances from "@/hooks/finances";
import {CircularProgress} from "@nextui-org/progress";


export default function AmortizationForm({cleanAmortization, loading, loanSetting, propertyPrice = 0}) {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: {errors}
    } = useFormContext();
    
    // useEffect(() => {
    //     reset({
    //         loan: propertyPrice <= 0
    //             ? 300000
    //             : (loanSetting?.down_payment_available ?? 0) > 0
    //                 ? Math.max(propertyPrice - loanSetting?.down_payment_available, 0)
    //                 : 0,
    //         interest: loanSetting?.interest_rate,
    //         periods: loanSetting?.loan_term
    //     })
    // }, [loanSetting]);
    
    return (
        <Card className={'py-5'}>
            <CardHeader>
                <h2
                    className={'text-lg font-bold text-gray-800 uppercase'}
                >
                    Calculadora
                </h2>
            </CardHeader>
            {
                loading ? (
                    <div className={'w-full flex justify-center items-center'}>
                        <CircularProgress
                            label={'Cargando...'}
                            color={'primary'}
                            size={'lg'}
                        />
                    </div>
                ) : (
                    <>
                        <CardBody className={'flex flex-col space-y-12'}>
                            <Controller
                                name={'loan'}
                                control={control}
                                rules={{required: true, min: 0}}
                                render={({field}) => (
                                    <Input
                                        {...field}
                                        autoComplete={'off'}
                                        type={"number"}
                                        label={"Préstamo"}
                                        labelPlacement={"outside"}
                                        placeholder={"Préstamo"}
                                        variant={'bordered'}
                                        color={'secondary'}
                                        startContent={
                                            <TfiMoney
                                                className={'w-4 h-4 text-secondary pointer-events-none flex-shrink-0'}/>
                                        }
                                        classNames={{
                                            label: 'text-[#414342] font-semibold text-base xl:text-lg',
                                        }}
                                    />
                                )}
                            />
                            
                            <Controller
                                name={'interest'}
                                control={control}
                                rules={{required: true, min: 0}}
                                render={({field}) => (
                                    <Input
                                        {...field}
                                        autoComplete={'off'}
                                        type={'number'}
                                        label={'Tasa de interés (anual)'}
                                        labelPlacement={'outside'}
                                        placeholder={'Tasa de interés'}
                                        variant={'bordered'}
                                        color={'secondary'}
                                        endContent={
                                            <FiPercent
                                                className={'w-4 h-4 text-secondary pointer-events-none flex-shrink-0'}/>
                                        }
                                        classNames={{
                                            label: 'text-[#414342] font-semibold text-base xl:text-lg',
                                        }}
                                    />
                                )}
                            />
                            
                            <Select
                                label={"Plazo del préstamo"}
                                placeholder={"Selecciona"}
                                labelPlacement={"outside"}
                                {...register('periods', {required: true})}
                                defaultSelectedKeys={loanSetting?.loan_term ? [`${loanSetting?.loan_term}`] : ['20']}
                                variant={'bordered'}
                                color={'secondary'}
                                classNames={{
                                    label: 'text-[#414342] font-semibold text-base xl:text-lg',
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
                        </CardBody>
                        <CardFooter
                            className={'flex flex-col justify-center items-center space-y-4 xxs:space-y-0 xxs:flex-row xxs:space-x-8'}>
                            <Button
                                type={'button'}
                                color={"secondary"}
                                variant={"ghost"}
                                radius={"md"}
                                className={'flex items-center justify-between text-sm py-5 bg-primary/10'}
                                endContent={
                                    <AiOutlineClear
                                        className={'w-4 h-4 pointer-events-none flex-shrink-0'}/>
                                }
                                onClick={() => cleanAmortization()}
                            >
                                Limpiar tabla
                            </Button>
                            <Button
                                type={'submit'}
                                color={"primary"}
                                variant={"ghost"}
                                radius={"md"}
                                className={'flex items-center justify-between text-sm py-5 bg-primary/10'}
                                startContent={
                                    <AiOutlineCalculator
                                        className={'w-4 h-4 pointer-events-none flex-shrink-0'}/>
                                }
                            >
                                Calcular
                            </Button>
                        </CardFooter>
                    </>
                )
            }
        </Card>
    )
}
