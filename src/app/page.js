import Image from "next/image";
import Link from "next/link";
import PropertySwiperVideo from "@/components/PropertySwiper/PropertySwiperVideo";
import PropertySwiper from "@/components/PropertySwiper/PropertySwiper";
import HeroHome from "@/components/Heros/HeroHome";
import Value from "@/components/Value/Value";
import useProperties from "@/hooks/properties";
// import data from "@/utils/property-data.json";

export default async function Home() {
    const {propertiesOutstanding} = useProperties();
    const properties = await propertiesOutstanding();

    return (
        <main className={"md:space-y-5"}>
            {/*<div className={'md:space-y-5'}>*/}
            <HeroHome/>

            <PropertySwiper properties={properties}/>

            <Value/>
            {/*<section className={'mx-auto max-w-screen-2xl'}>*/}
            {/*<PropertySwiper/>*/}

            {/*<section id={'categories'} className={'bg-[#EEEEEE] md:py-10 w-full'}>*/}
            {/*    <div className={'space-y-10 lg:px-36 md:px-10 px-0 mx-auto max-w-screen-2xl'}>*/}
            {/*        <header className={'flex justify-between items-center lg:px-0 md:px-0 px-3'}>*/}
            {/*            <h1 className={'text-primary md:text-5xl md:pl-6 lg:pl-0 text-2xl'}>*/}
            {/*                Categorias*/}
            {/*            </h1>*/}
            {/*            <div className={'flex items-center lg:gap-16 md:space-x-10 space-x-2'}>*/}
            {/*                <Link href={'/categories'}>Ver Todas</Link>*/}
            {/*                <img className={'lg:w-36 md:w-24 w-12'} src="/assets/arrow-right.png"*/}
            {/*                     alt="arrow-right"/>*/}
            {/*            </div>*/}
            {/*        </header>*/}
            {/*        <div className={'grid md:grid-cols-2 lg:gap-5 md:gap-3 grid-cols-1'}>*/}
            {/*            <div className={'flex flex-col lg:space-y-1 md:space-y-0'}>*/}
            {/*                <img src="/assets/categories/category-departamento.png" alt="departamento"/>*/}
            {/*                <label className={'hidden md:flex md:flex-col'}>Departamentos</label>*/}
            {/*            </div>*/}
            {/*            <div className={'grid md:grid-rows-2 lg:gap-2 md:gap-1 grid-cols-1'}>*/}
            {/*                <div className={'grid grid-cols-1'}>*/}
            {/*                    <div className={'flex flex-col lg:space-y-1 md:space-y-0'}>*/}
            {/*                        <img src="/assets/categories/category-casa.png" alt="casas"/>*/}
            {/*                        <label className={'hidden md:flex md:flex-col'}>Casas</label>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className={'grid md:grid-cols-2 md:gap-3 grid-cols-1'}>*/}
            {/*                    <div className={'flex flex-col lg:space-y-1 md:space-y-0'}>*/}
            {/*                        <img src="/assets/categories/category-comercios.png" alt="comercios"/>*/}
            {/*                        <label className={'hidden md:flex md:flex-col'}>Comercios</label>*/}
            {/*                    </div>*/}
            {/*                    <div className={'flex flex-col lg:space-y-1 md:space-y-0'}>*/}
            {/*                        <img src="/assets/categories/category-countries.png" alt="countries"/>*/}
            {/*                        <label className={'hidden md:flex md:flex-col'}>Countries</label>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*</div>*/}
        </main>
        // <main className="flex flex-col items-center justify-between p-24"></main>
    );
}
