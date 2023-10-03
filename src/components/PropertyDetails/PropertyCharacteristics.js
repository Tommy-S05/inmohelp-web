import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import {BsHouseHeart} from 'react-icons/bs';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {LiaBedSolid, LiaBathSolid, LiaCarSolid, LiaVectorSquareSolid} from "react-icons/lia";

export default function PropertyCharacteristics({name, address, purpose, price, area, bedrooms, bathrooms, garages}) {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <Card>
            <CardBody className={'flex flex-row justify-between items-center p-10'}>
                <section className={'flex justify-center items-center h-full'}>
                    <div className={'flex flex-col justify-center items-center'}>
                        <BsHouseHeart className={'w-12 h-12 text-primary stroke-[0.5px]'}/>
                        <p className={'text-base'}>{purpose === 'venta' ? 'Venta' : 'Alquiler'}</p>
                    </div>
                    <Divider orientation={'vertical'} className={'text-secondary mx-5'}/>
                    <header className={'flex flex-col space-y-3'}>
                        <h1 className={'text-3xl font-bold'}>
                            {name}
                        </h1>
                        <div className={'flex items-center space-x-2'}>
                            <HiOutlineLocationMarker className={'w-6 h-6 text-secondary'}/>
                            <p className={'text-base text-gray-500'}>
                                {address}
                            </p>
                        </div>
                    </header>
                </section>
                <section className={'flex flex-col space-y-5 ml-5'}>
                    <p className={'text-2xl font-semibold text-secondary'}>
                        {USDollar.format(price)}/DOP
                    </p>
                </section>
            </CardBody>
            <Divider/>
            <CardFooter className={'py-5 px-10'}>
                <footer className={'w-full'}>
                    <ul className={'flex flex-wrap space-x-8 w-full justify-between items-center [&>li]:flex [&>li]:flex-col [&>li]:space-y-3 [&>li]:justify-center [&>li]:items-center [&>li>i]:text-primary'}>
                        <li>
                            <div className={'bg-primary/20 p-1 border-1 border-solid border-primary'}>
                                <LiaBedSolid className={"text-primary w-10 h-10"}/>
                            </div>
                            <p className={"text-sm text-black"}>
                                {bedrooms} Habitaciones
                            </p>
                        </li>
                        <li>
                            <div className={'bg-primary/20 p-1 border-1 border-solid border-primary'}>
                                <LiaBathSolid className={"text-primary w-10 h-10"}/>
                            </div>
                            <p className={"text-sm text-black"}>
                                {bathrooms} Baños
                            </p>
                        </li>
                        <li>
                            <div className={'bg-primary/20 p-1 border-1 border-solid border-primary'}>
                                <LiaCarSolid className={"text-primary w-10 h-10"}/>
                            </div>
                            <p className={"text-sm text-black"}>
                                {garages} Parqueos
                            </p>
                        </li>
                        <li>
                            <div className={'bg-primary/20 p-1 border-1 border-solid border-primary'}>
                                <LiaVectorSquareSolid className={"text-primary w-10 h-10"}/>
                            </div>
                            <p className={"text-sm text-black"}>
                                {area} m<sup>2</sup>
                            </p>
                        </li>
                    </ul>
                </footer>
            </CardFooter>
        </Card>
    )
}