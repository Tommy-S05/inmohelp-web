"use client";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {swiperSettings} from "@/utils/swiper-settings";
import SwiperButtons from "@/components/PropertySwiper/SwiperButtons";
import {Skeleton} from "@nextui-org/skeleton";
import PropertyCard from "@/components/PropetyCard/PropertyCard";
import useProperties from "@/hooks/properties";
import {useEffect, useState} from "react";

export default function PropertySwiper() {
    const [properties, setProperties] = useState(null)
    const {propertiesOutstanding} = useProperties();
    
    const getPropertiesOutstanding = async() => {
        const response = await propertiesOutstanding();
        setProperties(response)
    }
    useEffect(() => {
        getPropertiesOutstanding()
    }, []);
    
    return (
        <section className={"mx-auto max-w-screen-2xl overflow-hidden"}>
            <div className={"px-6 w-full space-y-8"}>
                <header
                    className={"flex flex-col justify-center sm:items-start items-center"}
                >
                    <span className={"text-primary text-2xl font-semibold"}>
                        Mejores Opciones
                    </span>
                    <span className={"text-secondary text-center font-bold text-[2rem]"}>
                        Propiedades populares
                    </span>
                </header>
                <Swiper {...swiperSettings} className={"!overflow-visible"}>
                    <SwiperButtons/>
                    {
                        properties ? (
                            properties?.map((property) => (
                                <SwiperSlide key={property.id}>
                                    <PropertyCard
                                        id={property.id}
                                        image={property.thumbnail ? property.thumbnail : "/assets/real-estate/r1.jpeg"}
                                        name={property.name}
                                        purpose={property.purpose}
                                        price={property.price}
                                        garages={property.garages}
                                        area={property.area}
                                        bathrooms={property.bathrooms}
                                        bedrooms={property.bedrooms}
                                    />
                                </SwiperSlide>
                            ))
                        ) : (
                            <SwiperSlide>
                                <article
                                    className={`
                                    col-span-12 sm:col-span-6 lg:col-span-6 2xl:col-span-4
                                    flex flex-col justify-center items-start gap-3 rounded-xl max-w-max mx-auto
                                `}
                                >
                                    <Skeleton className={'w-[272px] xxs:w-[325px] xs:w-[350px] h-[400px] rounded-lg'}/>
                                </article>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    );
}