'use client';
// import Image from "next/image";
import {Card, CardHeader, CardBody, CardFooter, Divider, Image, Button} from "@nextui-org/react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {swiperSettings} from "@/utils/swiper-settings";
import SwiperButtons from "@/components/SwiperButtons";
import data from '@/utils/property-data.json';
import {FaBath, FaBed, FaCar, FaVectorSquare} from "react-icons/fa";

export default function PropertySwiper2() {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <section className={'mx-auto max-w-screen-2xl overflow-hidden'}>
            <div className={'p-6 w-full relative space-y-8'}>
                <header className={'flex flex-col justify-center sm:items-start items-center'}>
                    <span className={'text-primary text-2xl font-semibold'}>
                        Best Choices
                    </span>
                    {/*<span className={'text-[#1f3e72] text-center font-bold text-[2rem]'}>*/}
                    <span className={'text-secondary text-center font-bold text-[2rem]'}>
                        Popular Properties
                    </span>
                </header>
                <Swiper
                    {...swiperSettings}
                    className={'sm:!pb-10 !overflow-visible'}
                >
                    <SwiperButtons/>
                    {
                        data.map((property, index) => (
                            <SwiperSlide key={property.id}>
                                <article
                                    className={`
                                        flex flex-col justify-center items-start gap-3 rounded-xl max-w-max mx-auto
                                        duration-200 ease-in cursor-pointer
                                        property-slider hover:scale-105
                                    `}
                                >
                                    <Card isFooterBlurred className={"w-full h-[400px] col-span-12 sm:col-span-5"}>
                                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                            <p className="text-tiny text-orange-400 uppercase font-bold">{property.purpose}</p>
                                            <h4 className="text-white font-medium text-2xl">{property.name}</h4>
                                        </CardHeader>
                                        <Image
                                            removeWrapper
                                            alt={"Property Image"}
                                            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                                            // src="/assets/real-estate/r1.png"
                                            src={property.image}
                                        />
                                        <CardFooter
                                            className={"absolute flex-col items-start bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between"}
                                        >
                                            <header
                                                className={'text-xl font-semibold pt-1 pb-2'}
                                            >
                                                <div>
                                                    <span
                                                        className={'text-white'}>{USDollar.format(property.price)}</span>
                                                    <span className={'text-orange-400'}>/RD</span>
                                                </div>
                                            </header>
                                            <Divider/>
                                            <footer>
                                                <ul className={"text-xs grid grid-cols-2 mt-2 gap-1 [&>li]:flex [&>li]:items-center [&>li]:space-x-1.5 [&>li>i]:text-secondary"}>
                                                    <li>
                                                        <FaCar className={"text-secondary w-[15px] h-[15px]"}/>
                                                        <p className={"text-white"}>{property.garages} Parqueos</p>
                                                    </li>
                                                    <li>
                                                        <FaVectorSquare className={"text-secondary w-[15px] h-[15px]"}/>
                                                        <p className={"text-white"}>{property.area} m<sup>2</sup></p>
                                                    </li>
                                                    <li>
                                                        <FaBath className={"text-secondary w-[15px] h-[15px]"}/>
                                                        <p className={"text-white"}>{property.bathrooms} Baños</p>
                                                    </li>
                                                    <li>
                                                        <FaBed className={"text-secondary w-[15px] h-[15px]"}/>
                                                        <p className={"text-white"}>{property.bedrooms} Habitaciones</p>
                                                    </li>
                                                </ul>
                                            </footer>
                                        </CardFooter>
                                    </Card>
                                </article>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}


