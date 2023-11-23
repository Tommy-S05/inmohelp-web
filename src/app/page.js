import PropertySwiper from "@/components/PropertySwiper/PropertySwiper";
import useProperties from "@/hooks/properties";
import Hero from "@/components/Heros/Hero";

export default function HomePage() {
    return (
        <main className={"md:space-y-5"}>
            {/*<div className={'md:space-y-5'}>*/}
            {/*<HeroHome/>*/}
            <Hero/>
            
            <PropertySwiper/>
        </main>
    );
}