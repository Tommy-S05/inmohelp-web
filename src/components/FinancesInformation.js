import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import formatPrice from "@/utils/formatPrice";

export default function FinancesInformation({account}) {
    const USDollar = formatPrice();
    return (
        <section className={'flex justify-center items-center'}>
            <div className={'grid grid-cols-4 gap-5'}>
                <Card
                    className={"max-w-[400px] min-w-[270px] xs:min-w-[350px] 2xl:min-w-[300px] col-span-4 md:col-span-2 2xl:col-span-1"}>
                    <CardHeader className={"text-lg xs:text-xl justify-center items-center font-bold"}>
                        <h1 className={'text-primary'}>
                            Ingresos
                        </h1>
                    </CardHeader>
                    <Divider/>
                    <CardBody className={"text-lg xs:text-xl justify-center items-center font-bold"}>
                        <p className={'text-secondary'}>
                            {USDollar.format(account?.total_incomes)}/DOP
                        </p>
                    </CardBody>
                </Card>
                <Card
                    className={"max-w-[400px] min-w-[250px] md:min-w-[350px] 2xl:min-w-[300px] col-span-4 md:col-span-2 2xl:col-span-1"}>
                    <CardHeader className={"text-lg xs:text-xl justify-center items-center font-bold"}>
                        <h1 className={'text-primary'}>
                            Gastos
                        </h1>
                    </CardHeader>
                    <Divider/>
                    <CardBody className={"text-lg xs:text-xl justify-center items-center font-bold"}>
                        <p className={'text-secondary'}>
                            {USDollar.format(account?.total_expenses)}/DOP
                        </p>
                    </CardBody>
                </Card>
                <Card
                    className={"max-w-[400px] min-w-[250px] md:min-w-[350px] 2xl:min-w-[300px] col-span-4 md:col-span-2 2xl:col-span-1"}>
                    <CardHeader className={"text-lg xs:text-xl justify-center items-center font-bold"}>
                        <h1 className={'text-primary'}>
                            Disponible mensual
                        </h1>
                    </CardHeader>
                    <Divider/>
                    <CardBody className={"text-lg xs:text-xl justify-center items-center font-bold"}>
                        <p className={'text-secondary'}>
                            {USDollar.format(account?.budget)}/DOP
                        </p>
                    </CardBody>
                </Card>
            </div>
        </section>
    );
}