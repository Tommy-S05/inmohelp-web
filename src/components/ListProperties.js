'use client'
import PropertyCard from "@/components/PropetyCard/PropertyCard";
import Link from "next/link";

export default function ListProperties({properties}) {
    return (
        <section className={'grid content-start grid-cols-12 gap-5 xl:gap-10 max-w-screen-2xl mx-auto'}>
            {
                properties?.map((property) => (
                        <PropertyCard
                            key={property.id}
                            id={property.id}
                            image={"/assets/real-estate/r1.jpeg"}
                            name={property.name}
                            purpose={property.purpose}
                            price={property.price}
                            garages={property.garages}
                            area={property.area}
                            bathrooms={property.bathrooms}
                            bedrooms={property.bedrooms}
                        />
                    )
                )
            }
        </section>
    )
}