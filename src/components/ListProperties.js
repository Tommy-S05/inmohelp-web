'use client'
import PropertyCard from "@/components/PropetyCard/PropertyCard";
import Link from "next/link";

export default function ListProperties({properties}) {
    return (
        <section className={'grid grid-cols-12 gap-10 max-w-screen-2xl mx-auto px-10'}>
            {
                properties?.map((property, index) => (
                        <Link
                            href={`/properties/${property.id}`}
                            key={index}
                            className={'col-span-12 sm:col-span-6 lg:col-span-6 2xl:col-span-4'}
                        >
                            <PropertyCard
                                image={"/assets/real-estate/r1.jpeg"}
                                name={property.name}
                                purpose={property.purpose}
                                price={property.price}
                                garages={property.garages}
                                area={property.area}
                                bathrooms={property.bathrooms}
                                bedrooms={property.bedrooms}
                            />
                        </Link>
                    )
                )
            }
        </section>
    )
}