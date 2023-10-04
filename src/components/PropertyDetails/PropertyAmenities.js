import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";

export default function PropertyAmenities({amenities = ['piscina', 'gimnasio', 'sauna', 'jacuzzi', 'parqueadero']}) {
    return (
        <Card className={'p-3'}>
            <CardHeader>
                <h1 className={'text-2xl font-bold text-primary'}>
                    Amenidades
                </h1>
            </CardHeader>
            <Divider/>
            <CardBody className={'pl-10'}>
                <ul className={'md:columns-3 lg:columns-4 list-disc'}>
                    {
                        amenities.map((amenity, index) => (
                            <li key={index}>
                            <span className={'xl:text-base text-sm text-gray-500 capitalize'}>
                                {amenity}
                            </span>
                            </li>
                        ))
                    }
                </ul>
            </CardBody>
        </Card>
    )
}