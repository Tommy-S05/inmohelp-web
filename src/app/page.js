import PropertySwiper from "@/components/PropertySwiper/PropertySwiper";
import Hero from "@/components/Heros/Hero";
import Contactus from "@/components/Contactus/Contactus";
import AboutUs from "@/components/AboutUs/AboutUs";

export default function HomePage() {
    return (
        <main className={"space-y-5 md:space-y-8 pb-5"}>
            {/*<div className={'md:space-y-5'}>*/}
            {/*<HeroHome/>*/}
            <Hero/>
            
            <PropertySwiper/>
            
            <AboutUs/>
            
            <section
                className={'w-full max-w-screen-2xl mx-auto flex justify-center px-2 sm:px-5 md:px-10'}>
                <Contactus/>
            </section>
        </main>
    );
}