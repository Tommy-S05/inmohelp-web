'use client'
import {Card, CardFooter, CardHeader, Divider, Image} from "@nextui-org/react";
import {FaBath, FaBed, FaCar, FaVectorSquare} from "react-icons/fa";
import PropertyCard from "@/components/PropetyCard/PropertyCard";
import Link from "next/link";

export default function ListProperties({properties}) {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return (
        <section className={'grid grid-cols-12 gap-10 max-w-screen-2xl mx-auto px-10'}>
            {
                properties?.map((property, index) => (
                        <Link
                            // href={`/properties/${property.id}`}
                            href={'#'}
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

                        //         <article
                        //         key={index}
                        //     className={`
                        //                     col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3
                        //                     flex flex-col justify-center items-start gap-3 rounded-xl max-w-max mx-auto
                        //                     duration-200 ease-in cursor-pointer
                        //                     property-slider hover:scale-105
                        //                 `}
                        // >
                        //     <Card isFooterBlurred className={"w-full h-[400px] col-span-12 sm:col-span-5"}>
                        //         <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        //             <p className="text-tiny text-orange-400 uppercase font-bold">{property.purpose}</p>
                        //             <h4 className="text-white font-medium text-2xl">{property.name}</h4>
                        //         </CardHeader>
                        //         <Image
                        //             removeWrapper
                        //             alt={"Property Image"}
                        //             className={"z-0 w-full h-full scale-125 -translate-y-6 object-cover"}
                        //             src={"/assets/real-estate/r1.jpeg"}
                        //         />
                        //         <CardFooter
                        //             className={"absolute flex-col items-start bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between"}
                        //         >
                        //             <header
                        //                 className={'text-xl font-semibold pt-1 pb-2'}
                        //             >
                        //                 <div>
                        //                     <span className={'text-white'}>
                        //                         {USDollar.format(property.price)}
                        //                     </span>
                        //                     <span className={'text-orange-400'}>/DOP</span>
                        //                 </div>
                        //             </header>
                        //             <Divider/>
                        //             <footer>
                        //                 <ul className={"text-xs grid grid-cols-2 mt-2 gap-1 [&>li]:flex [&>li]:items-center [&>li]:space-x-1.5 [&>li>i]:text-secondary"}>
                        //                     <li>
                        //                         <FaCar className={"text-secondary w-[15px] h-[15px]"}/>
                        //                         <p className={"text-white"}>{property.garages} Parqueos</p>
                        //                     </li>
                        //                     <li>
                        //                         <FaVectorSquare className={"text-secondary w-[15px] h-[15px]"}/>
                        //                         <p className={"text-white"}>{property.area} m<sup>2</sup></p>
                        //                     </li>
                        //                     <li>
                        //                         <FaBath className={"text-secondary w-[15px] h-[15px]"}/>
                        //                         <p className={"text-white"}>{property.bathrooms} Baños</p>
                        //                     </li>
                        //                     <li>
                        //                         <FaBed className={"text-secondary w-[15px] h-[15px]"}/>
                        //                         <p className={"text-white"}>{property.bedrooms} Habitaciones</p>
                        //                     </li>
                        //                 </ul>
                        //             </footer>
                        //         </CardFooter>
                        //     </Card>
                        // </article>
                    )
                )
            }
        </section>
    )
}