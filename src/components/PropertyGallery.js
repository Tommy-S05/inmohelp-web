'use client'
import Image from "next/image";
import {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {Divider} from "@nextui-org/react";

export default function PropertyGallery({images = []}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#FB923C',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                // thumbs={{
                //     swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                // }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={"mySwiper2"}
            >
                {
                    images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={image}
                                alt={'Gallery image'}
                                width={1000}
                                height={400}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Divider className={'my-4'}/>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={"mySwiper"}
            >
                {
                    images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={image}
                                alt={'Gallery image'}
                                width={1000}
                                height={400}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}