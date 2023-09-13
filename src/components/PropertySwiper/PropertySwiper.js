"use client";
// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { swiperSettings } from "@/utils/swiper-settings";
import SwiperButtons from "@/components/PropertySwiper/SwiperButtons";
import PropertySlide from "@/components/PropetySlide/PropertySlide";

export default function PropertySwiper({ properties }) {
  return (
    <section className={"mx-auto max-w-screen-2xl overflow-hidden"}>
      <div className={"p-6 w-full relative space-y-8"}>
        <header
          className={"flex flex-col justify-center sm:items-start items-center"}
        >
          <span className={"text-primary text-2xl font-semibold"}>
            Best Choices
          </span>
          {/*<span className={'text-[#1f3e72] text-center font-bold text-[2rem]'}>*/}
          <span className={"text-secondary text-center font-bold text-[2rem]"}>
            Popular Properties
          </span>
        </header>
        <Swiper {...swiperSettings} className={"sm:!pb-10 !overflow-visible"}>
          <SwiperButtons />
          {
            properties?.map((property, index) => (
              <SwiperSlide key={property.id}>
                <PropertySlide
                  image={"/assets/real-estate/r1.png"}
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
            // data.map((property, index) => (
            //     <SwiperSlide key={property.id}>
            //         <PropertySlide
            //             image={property.image}
            //             name={property.name}
            //             purpose={property.purpose}
            //             price={property.price}
            //             garages={property.garages}
            //             area={property.area}
            //             bathrooms={property.bathrooms}
            //             bedrooms={property.bedrooms}
            //         />
            //     </SwiperSlide>
            // ))
          }
        </Swiper>
      </div>
    </section>
  );
}
