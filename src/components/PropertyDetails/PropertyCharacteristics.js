import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import {BsHouseHeart} from 'react-icons/bs';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {LiaBedSolid, LiaBathSolid, LiaCarSolid, LiaVectorSquareSolid} from "react-icons/lia";
import formatPrice from "@/utils/formatPrice";

export default function PropertyCharacteristics({name, address, purpose, price, area, bedrooms, bathrooms, garages}) {
    const USDollar = formatPrice();

    return (
        <Card>
            <CardBody
                className={'flex flex-col space-y-4 justify-center items-start md:flex-row md:space-y-0 md:justify-between md:items-center xl:p-10'}>
                <section className={'flex flex-col md:flex-row justify-center items-start md:items-center h-full'}>
                    <div className={'flex space-x-3 md:space-x-0 md:flex-col justify-center items-center'}>
                        <BsHouseHeart className={'xl:w-12 xl:h-12 w-8 h-8 text-primary stroke-[0.5px]'}/>
                        <p className={'xl:text-base text-sm'}>{purpose === 'venta' ? 'Venta' : 'Alquiler'}</p>
                    </div>
                    <Divider orientation={'vertical'} className={'hidden md:block text-secondary mx-5'}/>
                    <Divider orientation={'horizontal'} className={'md:hidden text-secondary my-5'}/>
                    <header className={'flex flex-col space-y-3'}>
                        <h1 className={'xl:text-3xl text-2xl font-bold'}>
                            {name}
                        </h1>
                        <div className={'flex items-center space-x-2'}>
                            <HiOutlineLocationMarker className={'w-6 h-6 text-secondary'}/>
                            <p className={'xl:text-base text-sm text-gray-500'}>
                                {address}
                            </p>
                        </div>
                    </header>
                </section>
                <section className={'flex flex-col space-y-5 ml-5'}>
                    <p className={'xl:text-2xl text-lg font-semibold text-secondary'}>
                        {USDollar.format(price)}/DOP
                    </p>
                </section>
            </CardBody>
            <Divider/>
            <CardFooter className={'xl:px-10 py-5 px-5'}>
                <footer className={'w-full'}>
                    <ul className={'flex flex-wrap space-x-8 w-full justify-between items-center [&>li]:flex [&>li]:flex-col [&>li]:space-y-3 [&>li]:justify-center [&>li]:items-center [&>li>i]:text-primary'}>
                        <li>
                            <div className={'bg-primary/20 p-1 border-1 border-solid border-primary'}>
                                <LiaBedSolid className={"xl:w-10 xl:h-10 w-6 h-6 text-primary "}/>
                            </div>
                            <p className={"xl:text-sm text-xs text-black"}>
                                {bedrooms} Habitaciones
                            </p>
                        </li>
                        <li>
                            <div className={'bg-primary/20 p-1 border-1 border-solid border-primary'}>
                                <LiaBathSolid className={"xl:w-10 xl:h-10 w-6 h-6 text-primary "}/>
                            </div>
                            <p className={"xl:text-sm text-xs text-black"}>
                                {bathrooms} Baños
                            </p>
                        </li>
                        <li>
                            <div className={'bg-primary/20 p-1 border-1 border-solid border-primary'}>
                                <LiaCarSolid className={"xl:w-10 xl:h-10 w-6 h-6 text-primary "}/>
                            </div>
                            <p className={"xl:text-sm text-xs text-black"}>
                                {garages} Parqueos
                            </p>
                        </li>
                        <li>
                            <div className={'bg-primary/20 p-1 border-1 border-solid border-primary'}>
                                <LiaVectorSquareSolid className={"xl:w-10 xl:h-10 w-6 h-6 text-primary "}/>
                            </div>
                            <p className={"xl:text-sm text-xs text-black"}>
                                {area} m<sup>2</sup>
                            </p>
                        </li>
                    </ul>
                </footer>
            </CardFooter>
        </Card>
    )
}