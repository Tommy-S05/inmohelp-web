import Image from "next/image";
import {Button, ButtonGroup} from "@nextui-org/button";
import HeroAccordion from "@/components/Heros/HeroAccordion";
import HeroGetStarted from "@/components/Heros/HeroGetStarted";
import _ValueAccordion from "@/components/Value/_ValueAccordion";

export default function Hero() {
    return (
        <div className={'bg-[#131110]'}>
            <section className={'mx-auto max-w-screen-2xl'}>
                <div
                    className={'py-6 px-2 md:p-6 w-full flex flex-col lg:flex-row justify-center items-center lg:items-end gap-8'}>
                    <article className={'flex flex-1 flex-col items-start space-y-5'}>
                        <header>
                            <h1 className={'text-white text-3xl lg:text-5xl font-bold'}>
                                Encuentra tu lugar ideal con InmoHelp
                            </h1>
                        </header>
                        <div>
                            <p className={'text-gray-400 text-medium md:text-lg font-semibold px-2'}>
                                ¿Buscas la manera más eficiente de encontrar tu próximo hogar?
                                <br/>InmoHelp es la respuesta que necesitas. Descubre por qué elegirnos:
                            </p>
                        </div>
                        
                        <div className={'w-full'}>
                            <HeroAccordion/>
                        </div>
                        
                        <div className={'pl-8 pt-5'}>
                            <HeroGetStarted/>
                        </div>
                    </article>
                    <article className={'flex justify-center flex-1'}>
                        <div
                            className={'relative max-w-[30rem] max-h-[35rem] w-[95%] h-[95%] overflow-hidden rounded-t-[15rem] border-solid border-8 border-[#E8E8E8FF]'}
                        >
                            <Image
                                priority={true}
                                src={"/assets/value.png"}
                                alt={"Value image"}
                                width={480}
                                height={560}
                            />
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )
}