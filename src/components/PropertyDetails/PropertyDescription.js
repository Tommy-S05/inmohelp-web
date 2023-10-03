import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";

export default function PropertyDescription({description}) {
    return (
        <Card className={'p-3'}>
            <CardHeader>
                <h1 className={'text-2xl font-bold text-secondary'}>
                    Descripción
                </h1>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className={'text-base text-gray-500'}>
                    {description}
                </p>
            </CardBody>
        </Card>
    )
}