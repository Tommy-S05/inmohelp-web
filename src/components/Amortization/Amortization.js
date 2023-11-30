'use client'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {CircularProgress} from "@nextui-org/progress";
import useAmortization from "@/hooks/amortization";
import {useEffect, useState} from "react";
import AmortizationForm from "@/components/Amortization/AmortizationForm";
import AmortizationSummary from "@/components/Amortization/AmortizationSummary";
import AmortizationTable from "@/components/Amortization/AmortizationTable";
import useFinances from "@/hooks/finances";
import {useSession} from "next-auth/react";
import {FormProvider, useForm} from "react-hook-form";
import FinancesAccordion from "@/components/FinancesAccordion";
import {Button} from "@nextui-org/button";

export default function Amortization({propertyPrice = 0}) {
    const {getAmortization} = useAmortization();
    const [loading, setLoading] = useState(false);
    const [loan, setLoan] = useState(0);
    const [periods, setPeriods] = useState(0);
    const [interest, setInterest] = useState(0);
    const [monthlyPayments, setMonthlyPayments] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalCostLoan, setTotalCostLoan] = useState(0);
    const [amortization, setAmortization] = useState([]);
    const [task, setTask] = useState(null);
    const [loanSetting, setLoanSetting] = useState({
        "interest_rate": "12",
        "down_payment_available": "300000",
        "loan_term": 20
    });
    const [loadingSetting, setLoadingSetting] = useState(true);
    const {getLoanSetting} = useFinances();
    const {data: session, status} = useSession();
    const methods = useForm();
    
    const onSubmit = async(data) => {
        setTask('Calculando...');
        setLoading(true)
        const result = await getAmortization(data).finally(() => setLoading(false));
        setLoan(result.summary.loan);
        setPeriods(result.summary.periods);
        setInterest(result.summary.interest);
        setMonthlyPayments(result.summary.monthly_payment);
        setTotalInterest(result.summary.total_cost_interest);
        setTotalCostLoan(result.summary.total_cost_loan);
        setAmortization(result.amortization_details);
    }
    
    const cleanAmortization = () => {
        setTask('Limpiando...');
        setLoading(true);
        setLoan(0);
        setPeriods(0);
        setInterest(0);
        setMonthlyPayments(0);
        setTotalInterest(0);
        setTotalCostLoan(0);
        setAmortization([]);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }
    
    const getLoanSettingDataAsync = async() => {
        setLoadingSetting(true)
        try {
            if(status === 'authenticated') {
                const data = await getLoanSetting({user: session?.user})
                await setLoanSetting(data)
                methods.reset({
                    loan: propertyPrice <= 0
                        ? 300000
                        : (data?.down_payment_available ?? 0) > 0
                            ? Math.max(propertyPrice - data?.down_payment_available, 0)
                            : 0,
                    interest: data?.interest_rate,
                    periods: data?.loan_term
                })
            } else {
                methods.reset({
                    loan: propertyPrice > 0 ? propertyPrice : 300000,
                    interest: 12,
                    periods: 20
                })
            }
            setLoadingSetting(false)
        } catch (e) {
            console.log(e)
            setLoadingSetting(false)
        }
    }
    
    useEffect(() => {
        getLoanSettingDataAsync();
    }, [status]);
    
    return (
        <Card className={'w-full max-w-screen-2xl col-span-12 p-0 md:p-5'}>
            <CardHeader>
                <h1
                    className={'text-2xl font-bold text-primary'}
                >
                    Calculadora de amortización
                </h1>
            </CardHeader>
            <CardBody className={'grid grid-cols-12 gap-5 max-w-screen-2xl mx-auto'}>
                <div className={'col-span-12 lg:col-span-4'}>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <AmortizationForm
                                cleanAmortization={cleanAmortization}
                                loanSetting={loanSetting}
                                propertyPrice={propertyPrice}
                                loading={loadingSetting}
                            />
                        </form>
                    </FormProvider>
                </div>
                <div className={'flex flex-col space-y-5 col-span-12 lg:col-span-8'}>
                    {
                        loading ? (
                            <div className={'w-full h-full flex justify-center items-center'}>
                                <CircularProgress
                                    label={task}
                                    color={'primary'}
                                    size={'lg'}
                                />
                            </div>
                        ) : (
                            <>
                                <AmortizationSummary
                                    loan={loan}
                                    periods={periods}
                                    interest={interest}
                                    monthlyPayments={monthlyPayments}
                                    totalInterest={totalInterest}
                                    totalCostLoan={totalCostLoan}
                                />
                                <AmortizationTable amortization={amortization}/>
                            </>
                        )
                    }
                </div>
            </CardBody>
        </Card>
    );
}