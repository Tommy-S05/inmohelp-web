'use client'
import {Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue} from "@nextui-org/table";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {CircularProgress} from "@nextui-org/progress";
import useAmortization from "@/hooks/amortization";
import {useState} from "react";
import AmortizationForm from "@/components/Amortization/AmortizationForm";
import AmortizationSummary from "@/components/Amortization/AmortizationSummary";
import AmortizationTable from "@/components/Amortization/AmortizationTable";

const rows = [
    {
        key: "1",
        name: "Tony Reichert",
        role: "CEO",
        status: "Active",
    },
    {
        key: "2",
        name: "Zoey Lang",
        role: "Technical Lead",
        status: "Paused",
    },
    {
        key: "3",
        name: "Jane Fisher",
        role: "Senior Developer",
        status: "Active",
    },
    {
        key: "4",
        name: "William Howard",
        role: "Community Manager",
        status: "Vacation",
    },
];

const columns = [
    {
        key: "name",
        label: "NAME",
    },
    {
        key: "role",
        label: "ROLE",
    },
    {
        key: "status",
        label: "STATUS",
    },
];

export default function Amortization() {
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

    const onSubmit = async (data) => {
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
                    <AmortizationForm onSubmit={onSubmit} cleanAmortization={cleanAmortization}/>
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