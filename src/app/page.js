import Image from 'next/image'
import Search from "@/components/Search";
import Link from "next/link";
import PropertySlide from "@/components/PropertySlide";
import PropertySwiper from "@/components/PropertySwiper";

export default function Home() {
    return (
        <main>
            <div className={'md:space-y-5'}>
                <section className="relative">
                    <div className={"absolute flex-col flex justify-center items-center h-full w-full space-y-5 "}>
                        <h2 className={"font-bold text-3xl md:text-5xl lg:text-7xl text-white p-5 m-5 px-10 backdrop-blur-sm z-10"}>
                            Encuentra tu lugar ideal
                        </h2>
                        
                        <button className=" bg-primary rounded-full p-4 uppercase text-white  block md:hidden z-10">
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


                <PropertySwiper/>

                {/*<section className={'mx-auto max-w-screen-2xl'}>*/}
                    {/*<PropertySwiper/>*/}

                    {/*<PropertySlide*/}
                    {/*    image={'/assets/destacados/image1.png'}*/}
                    {/*    name={'Casa, Barrio Alberdi'}*/}
                    {/*    purpose={'Venta'}*/}
                    {/*    price={100000}*/}
                    {/*    garages={3}*/}
                    {/*    area={60}*/}
                    {/*    bathrooms={3}*/}
                    {/*    bedrooms={3}*/}
                    {/*/>*/}

                    {/*<div className="bg-primary w-72 p-5 rounded-br-3xl ">*/}
                    {/*    <h2 className="text-5xl text-white pl-5">Destacados</h2>*/}
                    {/*</div>*/}
                    {/*<div className=" max-w-screen-lg mx-auto p-5 cursor-pointer">*/}
                    {/*    <Slider {...settings}>*/}
                    {/*        <AptSlider name={'Casa, Barrio Alberdi'} image={image1}/>*/}
                    {/*        <AptSlider name={'Casa doble, Barrio Alberdi'} image={image2}/>*/}
                    {/*        <AptSlider name={'Casa trio, Barrio Alberdi'} image={image3}/>*/}
                    {/*        <AptSlider name={'Casa cuadruple, Barrio Alberdi'} image={image4}/>*/}
                    {/*        <AptSlider name={'Casa quintuple, Barrio Alberdi'} image={image1}/>*/}
                    {/*    </Slider>*/}
                    {/*</div>*/}
                {/*</section>*/}
                
                <section id={'categories'} className={'bg-[#EEEEEE] md:py-10 w-full'}>
                    <div className={'space-y-10 lg:px-36 md:px-10 px-0 mx-auto max-w-screen-2xl'}>
                        <header className={'flex justify-between items-center lg:px-0 md:px-0 px-3'}>
                            <h1 className={'text-primary md:text-5xl md:pl-6 lg:pl-0 text-2xl'}>
                                Categorias
                            </h1>
                            <div className={'flex items-center lg:gap-16 md:space-x-10 space-x-2'}>
                                <Link href={'/categories'}>Ver Todas</Link>
                                <img className={'lg:w-36 md:w-24 w-12'} src="/assets/arrow-right.png"
                                     alt="arrow-right"/>
                            </div>
                        </header>
                        <div className={'grid md:grid-cols-2 lg:gap-5 md:gap-3 grid-cols-1'}>
                            <div className={'flex flex-col lg:space-y-1 md:space-y-0'}>
                                <img src="/assets/categories/category-departamento.png" alt="departamento"/>
                                <label className={'hidden md:flex md:flex-col'}>Departamentos</label>
                            </div>
                            <div className={'grid md:grid-rows-2 lg:gap-2 md:gap-1 grid-cols-1'}>
                                <div className={'grid grid-cols-1'}>
                                    <div className={'flex flex-col lg:space-y-1 md:space-y-0'}>
                                        <img src="/assets/categories/category-casa.png" alt="casas"/>
                                        <label className={'hidden md:flex md:flex-col'}>Casas</label>
                                    </div>
                                </div>
                                <div className={'grid md:grid-cols-2 md:gap-3 grid-cols-1'}>
                                    <div className={'flex flex-col lg:space-y-1 md:space-y-0'}>
                                        <img src="/assets/categories/category-comercios.png" alt="comercios"/>
                                        <label className={'hidden md:flex md:flex-col'}>Comercios</label>
                                    </div>
                                    <div className={'flex flex-col lg:space-y-1 md:space-y-0'}>
                                        <img src="/assets/categories/category-countries.png" alt="countries"/>
                                        <label className={'hidden md:flex md:flex-col'}>Countries</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        // <main className="flex flex-col items-center justify-between p-24"></main>
    )
}
