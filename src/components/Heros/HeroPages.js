import Image from "next/image";
import Search from "@/components/Search";
import {AiOutlineHome} from "react-icons/ai"
import {FaChevronRight} from "react-icons/fa"
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function HeroPages() {
    return (
        <section className="relative">
            <div className={"absolute flex-col flex justify-center items-start h-full w-full mx-20 space-y-6 "}>
                <h2 className={"font-bold text-3xl md:text-5xl lg:text-5xl text-white z-10"}>
                    Propiedades
                </h2>
                <article className={"flex justify-center items-center space-x-2 z-10"}>
                    <Link href={"/"}>
                        <AiOutlineHome className={"text-white w-7 h-7"}/>
                    </Link>
                    <ChevronRightIcon className={"text-white w-7 h-7"}/>
                    <p className={"text-white text-xl"}>Propiedades</p>
                </article>
            </div>
            <div className={'w-full h-[500px]'}>
                <Image
                    className={"object-cover brightness-50"}
                    fill={true}
                    src={"/assets/heros/hero-property.jpeg"}
                    alt={"Background"}
                    priority={true}
                />
            </div>
        </section>
    )
}