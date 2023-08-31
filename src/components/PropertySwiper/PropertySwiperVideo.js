'use client'
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {swiperSettings} from "@/utils/swiper-settings";
import SwiperButtons from "@/components/PropertySwiper/SwiperButtons";
import data from '@/utils/property-data.json';

export default function PropertySwiperVideo() {
    return (
        <section className={'mx-auto max-w-screen-2xl overflow-hidden'}>
            <div className={'p-6 w-full relative space-y-8'}>
                <header className={'flex flex-col justify-center sm:items-start items-center'}>
                    <span className={'text-orange-500 text-2xl font-semibold'}>
                        Best Choices
                    </span>
                    <span className={'text-[#1f3e72] text-center font-bold text-[2rem]'}>
                        Popular Properties
                    </span>
                </header>
                <Swiper
                    {...swiperSettings}
                    // centeredSlides={true}
                    // modules={[Pagination, Navigation]}
                    className={'sm:!pb-10 !overflow-visible'}
                >
                    <SwiperButtons/>
                    {
                        data.map((property, index) => (
                            <SwiperSlide key={property.id}>
                                {/*bg-white hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-[rgba(136,160,255,0.46)]*/}
                                <article
                                    className={`
                                        flex flex-col justify-center items-start gap-3 p-4 rounded-xl max-w-max mx-auto 
                                        duration-300 ease-in cursor-pointer 
                                        property-slider hover:scale-105
                                    `}
                                >
                                    <div className={'relative w-full max-w-[15rem] h-[11rem]'}>
                                        <Image
                                            src={property.image}
                                            alt={'Property'}
                                            fill={true}
                                            // className={'w-full max-w-[15rem] h-[11rem] rounded-xl'}
                                        />
                                    </div>
                                    
                                    <span className={'text-xs font-semibold'}>
                                        <span style={{color: "orange"}}>$</span>
                                        <span className={'text-base'} style={{color: "rgb(140 139 139)"}}>
                                            {property.price}
                                        </span>
                                    </span>
                                    
                                    <span
                                        className={'text-[#1f3e72] text-justify w-full max-w-[15rem] text-2xl font-bold'}>
                                        {property.id}- {property.name}
                                    </span>
                                    <span className={'text-xs text-justify w-full max-w-[15rem]'}
                                          style={{color: "rgb(140 139 139)"}}>
                                        {property.detail}
                                    </span>
                                </article>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}


