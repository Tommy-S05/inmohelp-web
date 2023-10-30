import Image from "next/image";
import Search from "@/components/Search";
import {AiOutlineHome} from "react-icons/ai"
import {FaChevronRight} from "react-icons/fa"
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function HeroPages({title = '', breadcrumb = [], height = 500}) {
    return (
        <section className="relative flex justify-center items-center">
            <div
                className={"absolute flex-col flex justify-center items-start h-full w-full max-w-screen-2xl px-2 sm:px-5 md:px-10 space-y-6 z-10"}>
                {/*<div className={"w-full max-w-screen-2xl space-y-6"}>*/}
                <h2 className={"flex font-bold text-3xl md:text-4xl lg:text-5xl text-white"}>
                    {title}
                </h2>
                <article className={"flex flex-wrap sm:justify-center sm:items-center space-x-2"}>
                    <Link href={"/"}>
                        <AiOutlineHome className={"text-white w-5 h-5 md:w-7 md:h-7"}/>
                    </Link>
                    {
                        breadcrumb.map((item, index) => (
                            <div key={index} className={"flex flex-wrap justify-center items-center space-x-2"}>
                                <ChevronRightIcon className={"text-white w-5 h-5 md:w-7 md:h-7"}/>
                                <Link href={item.href}
                                      className={"text-white text-base md:text-lg lg:text-xl"}>{item.name}</Link>
                            </div>
                        ))
                    }
                </article>
                {/*</div>*/}
            </div>
            
            <div className={`w-full h-[${height}px]`}>
                <Image
                    className={"object-cover brightness-[.25]"}
                    fill={true}
                    src={"/assets/heros/hero-property.jpeg"}
                    alt={"Background"}
                    priority={true}
                />
            </div>
        </section>
    )
}