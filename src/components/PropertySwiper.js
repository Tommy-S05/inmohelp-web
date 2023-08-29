'use client'
import {useSwiper, Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {Pagination, Navigation} from 'swiper/modules';

import data from '@/utils/property-data.json';
import {swiperSettings} from "@/utils/swiper-settings";

const PropertySwiper = () => {
    return (
        <section className={'mx-auto max-w-screen-2xl'}>
            <div className={'p-6 w-full relative space-y-8'}>
                <header className={'flex flex-col justify-center items-start z-0'}>
                    <span className={'text-orange-500 text-2xl font-semibold'}>
                        Best Choices
                    </span>
                    <span className={'text-[#1f3e72] font-bold text-[2rem]'}>
                        Popular Properties
                    </span>
                </header>
                <Swiper
                    {...swiperSettings}
                    centeredSlides={true}
                    // modules={[Pagination, Navigation]}
                    className={'!pb-10'}
                >
                    <SliderButtons/>
                    {
                        data.map((property, index) => (
                            <>
                                <SwiperSlide key={property.id}>
                                    {/*bg-white hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-[rgba(136,160,255,0.46)]*/}
                                    <article
                                        className={`
                                        flex flex-col justify-center items-start gap-3 p-4 rounded-xl max-w-max mx-auto 
                                        duration-300 ease-in cursor-pointer 
                                        property-slider hover:scale-105
                                    `}
                                    >
                                        <img
                                            src={property.image}
                                            alt={'Property'}
                                            className={'w-full max-w-[15rem] h-[11rem] rounded-xl'}
                                        />
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
                                <SwiperSlide key={property.id + 1}>
                                    {/*bg-white hover:bg-gradient-to-r hover:from-white hover:via-white hover:to-[rgba(136,160,255,0.46)]*/}
                                    <article
                                        className={`
                                        flex flex-col justify-center items-start gap-3 p-4 rounded-xl max-w-max mx-auto 
                                        duration-300 ease-in cursor-pointer 
                                        property-slider hover:scale-105
                                    `}
                                    >
                                        <img
                                            src={property.image}
                                            alt={'Property'}
                                            className={'w-full max-w-[15rem] h-[11rem] rounded-xl'}
                                        />
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
                            </>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default PropertySwiper;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className={'absolute right-0 -top-2 !z-50 flex justify-center items-center gap-4 '}>
            <button
                className={'text-xl text-[#4066ff] py-[0.2rem] px-[0.8rem] rounded-md bg-[#EEEEFF] cursor-pointer'}
                onClick={() => swiper.slidePrev()}
            >
                &lt;
            </button>
            <button
                className={'text-xl text-[#4066ff] py-[0.2rem] px-[0.8rem] rounded-md swiper-button cursor-pointer'}
                onClick={() => swiper.slideNext()}
            >
                &gt;
            </button>
        </div>
    )
}