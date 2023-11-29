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
import formatPrice from "@/utils/formatPrice";
import FinancesInformation from "@/components/FinancesInformation";
import Swal from 'sweetalert2'

export default function FinancesAccountForm() {
    const {data: session, status} = useSession();
    const USDollar = formatPrice();
    const [loading, setLoading] = useState(true);
    const [loadingSubmitTransaction, setLoadingSubmitTransaction] = useState(false);
    const [loadingSubmitSetting, setLoadingSubmitSetting] = useState(false);
    const [loanSetting, setLoanSetting] = useState(null);
    const [account, setAccount] = useState(null)
    const methods = useForm();
    const methods2 = useForm();
    const {getAccountTransactions, getLoanSetting, submitAccountTransactions, submitLoanSettings} = useFinances();
    const onSubmitAccount = async(data) => {
        setLoadingSubmitTransaction(true)
        try {
            await submitAccountTransactions({user: session?.user, data})
                .then(() => {
                    Swal.fire({
                        title: "Guardado",
                        color: "#000000",
                        text: "Sus datos han sido actualizados correctamente",
                        icon: "success",
                        iconColor: "rgba(0, 189, 126, 1)",
                        timer: 5000,
                        confirmButtonText: "Continuar",
                        confirmButtonColor: "rgb(251, 146, 60)",
                        backdrop: true,
                        background: "#ffffff"
                    }).then((result) => {
                        if(result.isConfirmed) {
                            getFinancesAccount()
                        } else {
                            setTimeout(function() {
                                getFinancesAccount()
                            }, 200);
                        }
                    });
                })
            
            
        } catch (e) {
            await Swal.fire({
                title: "Error",
                color: "#000000",
                text: "Ha ocurrido un error al guardar sus datos, intentalo nuevamente",
                icon: "error",
                timer: 5000,
                confirmButtonText: "Cerrar",
                confirmButtonColor: "rgb(251, 146, 60)",
                backdrop: true,
                background: "#ffffff"
            });
        } finally {
            setLoadingSubmitTransaction(false)
        }
    }
    
    const onSubmitLoanSetting = async(data) => {
        setLoadingSubmitSetting(true)
        const {down_payment_available, interest_rate, loan_term} = data;
        try {
            await submitLoanSettings({user: session?.user, down_payment_available, interest_rate, loan_term})
                .then(() => {
                    Swal.fire({
                        title: "Guardado",
                        color: "#000000",
                        text: "Sus datos han sido actualizados correctamente",
                        icon: "success",
                        iconColor: "rgba(0, 189, 126, 1)",
                        timer: 5000,
                        confirmButtonText: "Continuar",
                        confirmButtonColor: "rgb(251, 146, 60)",
                        backdrop: true,
                        background: "#ffffff"
                    }).then((result) => {
                        if(result.isConfirmed) {
                            getFinancesAccount()
                        } else {
                            setTimeout(function() {
                                getFinancesAccount()
                            }, 200);
                        }
                    });
                })
        } catch (e) {
            await Swal.fire({
                title: "Error",
                color: "#000000",
                text: "Ha ocurrido un error al guardar sus datos, intentalo nuevamente",
                icon: "error",
                timer: 5000,
                confirmButtonText: "Cerrar",
                confirmButtonColor: "rgb(251, 146, 60)",
                backdrop: true,
                background: "#ffffff"
            });
        } finally {
            setLoadingSubmitSetting(false)
        }
    }
    const getFinancesAccount = async() => {
        setLoading(true)
        try {
            const accountTransactions = await getAccountTransactions({user: session?.user})
            setAccount(accountTransactions?.account)
            methods.reset(accountTransactions)
            const loanSettings = await getLoanSetting({user: session?.user})
            setLoanSetting(loanSettings);
            methods2.reset(loanSettings)
        } catch (e) {
        
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        if(status === 'authenticated') {
            getFinancesAccount();
        }
    }, [status]);
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
            <>
                <FinancesInformation account={account}/>
                
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
            </>
        )
    )
}