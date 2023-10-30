import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import formatPrice from "@/utils/formatPrice";

export default function PriceIndexCard({title, content}) {
    const USDollar = formatPrice();
    return (
        <Card className={"max-w-[350px] z-0"}>
            <CardHeader className={"text-2xl justify-center items-center font-bold"}>
                <span className={'text-secondary'}>
                    {title}
                </span>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className={"text-sm text-gray-600"}>
                    {content}
                </p>
            </CardBody>
        </Card>
    );
}