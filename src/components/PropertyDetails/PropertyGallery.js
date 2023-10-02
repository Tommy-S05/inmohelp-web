'use client'
import Image from "next/image";
import {useState} from "react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/react";
import {Swiper, SwiperSlide} from 'swiper/react';

import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function PropertyGallery({images = []}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <Card>
            <CardBody>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#FB923C',
                        '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    // thumbs={{swiper: thumbsSwiper}}
                    thumbs={{
                        swiper:
                            thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={'h-96 w-full rounded-lg'}
                    // className={"mySwiper2"}
                >
                    {
                        images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex h-full w-full items-center justify-center'>
                                    <Image
                                        src={image}
                                        alt={'Gallery image'}
                                        className={'block h-full w-full object-cover'}
                                    />
                                </div>
                                {/*<Image*/}
                                {/*    src={image}*/}
                                {/*    alt={'Gallery image'}*/}
                                {/*/>*/}
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
                    className={'thumbs mt-3 h-32 w-full rounded-lg'}
                    // className={"mySwiper"}
                >
                    {
                        images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <button className='flex h-full w-full items-center justify-center'>
                                    <Image
                                        src={image}
                                        alt={'Gallery image'}
                                        className={'block h-full w-full object-cover'}
                                    />
                                </button>
                                {/*<Image*/}
                                {/*    src={image}*/}
                                {/*    alt={'Gallery image'}*/}
                                {/*/>*/}
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </CardBody>
        </Card>
    )
}