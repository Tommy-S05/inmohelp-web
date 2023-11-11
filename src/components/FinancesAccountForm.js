'use client'
import FinancesAccordion from "@/components/FinancesAccordion";
import {FormProvider, useForm} from "react-hook-form";
import {useSession} from "next-auth/react";
import useFinances from "@/hooks/finances";
import {useEffect, useState} from "react";
import {CircularProgress} from "@nextui-org/progress";
import {Button} from "@nextui-org/button";
import {Tabs, Tab} from "@nextui-org/tabs";
import LoanSetting from "@/components/LoanSetting";

export default function FinancesAccountForm({user}) {
    // const {data: session, status} = useSession();
    const [loading, setLoading] = useState(true);
    const [loadingSubmitTransaction, setLoadingSubmitTransaction] = useState(false);
    const [loadingSubmitSetting, setLoadingSubmitSetting] = useState(false);
    const [loanSetting, setLoanSetting] = useState(null);
    const methods = useForm();
    const methods2 = useForm();
    const {getAccountTransactions, getLoanSetting, submitAccountTransactions, submitLoanSettings} = useFinances();
    const onSubmitAccount = async(data) => {
        setLoadingSubmitTransaction(true)
        try {
            await submitAccountTransactions({user: user, data})
        } catch (e) {
            console.log(e)
        } finally {
            setLoadingSubmitTransaction(false)
        }
    }
    
    const onSubmitLoanSetting = async(data) => {
        setLoadingSubmitSetting(true)
        const {down_payment_available, interest_rate, loan_term} = data;
        try {
            await submitLoanSettings({user: user, down_payment_available, interest_rate, loan_term})
        } catch (e) {
            console.log(e)
        } finally {
            setLoadingSubmitSetting(false)
        }
    }
    const getFinancesAccount = async() => {
        setLoading(true)
        try {
            const accountTransactions = await getAccountTransactions({user: user})
            methods.reset(accountTransactions)
            const loanSettings = await getLoanSetting({user: user})
            setLoanSetting(loanSettings);
            methods2.reset(loanSettings)
        } catch (e) {
        
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        getFinancesAccount();
    }, []);
    return (
        loading ? (
            <div className={'w-full h-full flex justify-center items-center'}>
                <CircularProgress
                    label={'Cargando...'}
                    color={'primary'}
                    size={'lg'}
                />
            </div>
        ) : (
            <section className={'flex flex-col w-full'}>
                <Tabs aria-label={'Finances'} className={'flex justify-center items-center'}
                      classNames={{tab: 'text-[10px] xs:text-sm md:text-base'}}>
                    <Tab
                        key={'Ingresos/Gastos'}
                        title={'Ingresos/Gastos'}
                    >
                        <div className={'pt-3 space-y-5'}>
                            <div className={'flex justify-center'}>
                                <p className={'w-3/4 text-ternary text-justify'}>
                                    Lleve un registro de sus ingresos y gastos para una mejor gestión
                                    financiera. A continuación, puede ingresar los detalles de sus
                                    transacciones financieras, indicando en cada uno de los apartados de
                                    cuanto es su ingreso o gasto. Estos datos serán utilizados para
                                    presentarte opciones de propiedades adaptadas a ti.
                                </p>
                            </div>
                            <FormProvider {...methods}>
                                <form onSubmit={methods.handleSubmit(onSubmitAccount)} className={'space-y-5'}>
                                    <FinancesAccordion/>
                                    <Button
                                        className={'text-white rounded-tl-xl rounded-br-xl hover:bg-primary/80'}
                                        radius={'none'}
                                        type={"submit"}
                                        variant={"solid"}
                                        color={"primary"}
                                        isLoading={loadingSubmitTransaction}
                                    >
                                        Guardar
                                    </Button>
                                </form>
                            </FormProvider>
                        </div>
                    </Tab>
                    <Tab
                        key={'Configuración de préstamo'}
                        title={'Configuración de préstamo'}
                    >
                        <div className={'pt-3 space-y-5'}>
                            <div className={'flex justify-center'}>
                                <p className={'w-3/4 text-ternary text-justify'}>
                                    La configuración de préstamo es esencial para la búsqueda de propiedades
                                    adaptadas a ti. Los valores que ingreses en este apartado se utilizan
                                    para determinar las cuotas mensuales del préstamo de una propiedad y
                                    ayudan a determinar las propiedades ajustadas a tu situación económica.
                                </p>
                            </div>
                            <FormProvider {...methods2}>
                                <form onSubmit={methods2.handleSubmit(onSubmitLoanSetting)}>
                                    <div className={'w-full flex justify-center items-center'}>
                                        <LoanSetting
                                            showSave={true}
                                            loading={loadingSubmitSetting}
                                            loanSetting={loanSetting}
                                        />
                                    </div>
                                </form>
                            </FormProvider>
                        </div>
                    </Tab>
                </Tabs>
            </section>
        )
    )
}