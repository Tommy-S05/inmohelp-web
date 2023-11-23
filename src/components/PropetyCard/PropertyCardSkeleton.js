import formatPrice from "@/utils/formatPrice";
import {Card, CardHeader, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import {Image} from "@nextui-org/image";
import {Skeleton} from "@nextui-org/skeleton";
import {FaBath, FaBed, FaCar, FaVectorSquare} from "react-icons/fa";

export default function PropertyCardSkeleton() {
    const USDollar = formatPrice();
    
    return (
        <article
            className={`
                            col-span-12 sm:col-span-6 lg:col-span-6 2xl:col-span-4
                            flex flex-col justify-center items-start gap-3 rounded-xl max-w-max mx-auto
                            duration-200 ease-in cursor-pointer
                            property-slider hover:scale-105
                        `}
        >
            <Skeleton className={'w-[350px] h-[400px]'}>
            
            </Skeleton>
        </article>
    )
}