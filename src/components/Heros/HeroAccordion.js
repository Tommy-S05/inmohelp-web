'use client'
import {Accordion, AccordionItem} from "@nextui-org/react";
import {HiShieldCheck} from "react-icons/hi";
import {ChevronDownIcon} from "@heroicons/react/24/solid";

export default function HeroAccordion() {
    const itemClasses = {
        // base: "py-0 w-full",
        title: "text-secondary font-bold text-sm xs:text-[1.1rem]",
        trigger: "px-0 md:px-2 py-0 data-[hover=true]:bg-[#eeeeff] rounded-lg h-14 flex items-center duration-300 ease-in-out hover:scale-y-105 hover:-translate-y-1",
        content: "text-center text-gray-400 text-sm text-justify px-2",
    };
    
    return (
        <Accordion
            variant={'bordered'}
            defaultExpandedKeys={['1']}
            className={'mt-8 border-none w-full'}
            itemClasses={itemClasses}
        >
            <AccordionItem
                key={"1"}
                aria-label={"Resultados ajustados económicamente"}
                title={"Resultados ajustados económicamente"}
                indicator={
                    <div
                        className={'flex justify-center items-center p-2.5 rounded-md text-primary'}
                    >
                        <ChevronDownIcon className={'w-7 h-7'}/>
                    </div>
                }
            >
                <p>
                    InmoHelp no es solo otra plataforma de bienes raíces. Utilizamos una herramienta para ofrecerte
                    resultados personalizados ajustado a tu bolsillo de acuerdo a los datos que proporciones.
                </p>
            </AccordionItem>
            <AccordionItem
                key={"2"}
                aria-label={"Ahorro de tiempo"}
                title={"Ahorro de tiempo"}
                indicator={
                    <div
                        className={'flex justify-center items-center p-2.5 rounded-md text-primary'}
                    >
                        <ChevronDownIcon className={'w-7 h-7'}/>
                    </div>
                }
            >
                <p>
                    Olvidate de revisar innumerables propiedades que no puedes adquirir. Simplificamos la búsqueda de
                    propiedades para que encuentres tu lugar ideal en tiempo récord, ahorrándote tiempo valioso. Deja
                    atrás las búsquedas interminables y concéntrate en lo que realmente importa.
                </p>
            </AccordionItem>
            <AccordionItem
                key={"3"}
                aria-label={"Búsqueda sin estrés"}
                title={"Búsqueda sin estrés"}
                indicator={
                    <div
                        className={'flex justify-center items-center p-2.5 rounded-md text-primary'}
                    >
                        <ChevronDownIcon className={'w-7 h-7'}/>
                    </div>
                }
            >
                <p>
                    Con InmoHelp, encontrar tu hogar soñado es un proceso sin estrés. Deja que nuestras herramientas
                    hagan el trabajo pesado mientras tú te concentras en tomar decisiones informadas.
                </p>
            </AccordionItem>
        </Accordion>
    )
}