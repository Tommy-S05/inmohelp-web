import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import formatPrice from "@/utils/formatPrice";

export default function AmortizationSummary({loan, periods, interest, monthlyPayments, totalInterest, totalCostLoan}) {
    const USDollar = formatPrice();
    return (
        <Card className={'col-p-12 pt-5 px-3'}>
            <CardHeader className={'flex justify-between items-center'}>
                <h2
                    className={'text-lg font-semibold text-gray-800 uppercase'}
                >
                    Resumen
                </h2>
                <p className={'xl:text-sm text-xs'}>
                    Cantidad de cuotas: {periods}
                </p>
            </CardHeader>
            <Divider/>
            <CardBody className={'flex flex-row space-x-8 justify-between items-center'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <h3 className={'xl:text-base text-sm text-gray-500'}>
                        Cuota mensual
                    </h3>
                    <p className={'xl:text-xl text-lg font-bold text-secondary'}>
                        {USDollar.format(monthlyPayments)}
                    </p>
                </div>
                <div className={'flex flex-col justify-center items-center'}>
                    <h3 className={'xl:text-base text-sm text-gray-500'}>
                        Total de intereses
                    </h3>
                    <p className={'xl:text-xl text-lg font-bold text-secondary'}>
                        {USDollar.format(totalInterest)}
                    </p>
                </div>
                <div className={'flex flex-col justify-center items-center'}>
                    <h3 className={'xl:text-base text-sm text-gray-500'}>
                        Total a pagar
                    </h3>
                    <p className={'xl:text-xl text-lg font-bold text-secondary'}>
                        {USDollar.format(totalCostLoan)}
                    </p>
                </div>
            </CardBody>
            <Divider/>
            <CardFooter className={'flex flex-row justify-between items-center'}>
                <p className={'xl:text-sm text-xs text-gray-500'}>
                    Monto del préstamo: {USDollar.format(loan)}
                </p>
                <p className={'xl:text-sm text-xs text-gray-500'}>
                    Plazo del préstamo: {periods / 12} años
                </p>
                <p className={'xl:text-sm text-xs text-gray-500'}>
                    Tasa de interés: {interest}%
                </p>
            </CardFooter>
        </Card>
    )
}