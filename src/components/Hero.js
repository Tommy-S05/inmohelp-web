import Search from "@/components/Search";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative">
            <div className={"absolute flex-col flex justify-center items-center h-full w-full space-y-5 "}>
                <h2 className={"font-bold text-3xl md:text-5xl lg:text-7xl text-white p-5 m-5 px-10 backdrop-blur-sm z-10"}>
                    Encuentra tu lugar ideal
                </h2>
                
                <button className=" bg-primary rounded-full p-4 uppercase text-white  block sm:hidden z-10">
                    Inicia tu busqueda
                </button>
                
                <Search/>
            </div>
            {/*<img*/}
            {/*    className="w-full h-[600px] object-cover"*/}
            {/*    src="/assets/background.png"*/}
            {/*    alt="Background"*/}
            {/*/>*/}
            <div className={'w-full h-[600px]'}>
                <Image
                    className={"object-cover"}
                    fill={true}
                    src={"/assets/background.png"}
                    alt={"Background"}
                    priority={true}
                />
            </div>
        </section>
    )
}