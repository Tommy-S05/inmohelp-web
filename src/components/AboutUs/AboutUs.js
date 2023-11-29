import {FaChevronDown} from "react-icons/fa";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";

export default function AboutUs() {
    return (
        <section className={'space-y-8'}>
            <section className={"text-center w-full flex flex-col items-center justify-center space-y-5"}>
                <h1 className={"text-4xl font-bold text-primary"}>
                    Sobre Nosotros
                </h1>
                <FaChevronDown className={'w-6 h-6'}/>
                <div className={'space-y-3 flex flex-col justify-center items-center'}>
                    <h2 className={'text-2xl text-secondary font-semibold'}>
                        ¿Qué es InmoHelp?
                    </h2>
                    
                    <p className={"text-justify px-5 md:px-0 md:w-1/2"}>
                        InmoHelp es la respuesta a tus necesidades en el mercado inmobiliario. Nuestra plataforma
                        está diseñada para simplificar y agilizar la búsqueda de propiedades, brindándote opciones
                        que se ajusten a tu capacidad económica. Nos comprometemos a ahorrarte tiempo y esfuerzo al
                        ofrecerte una herramienta para evaluar la viabilidad financiera de tus compras
                        inmobiliarias.
                    </p>
                </div>
            </section>
            
            <section className={"flex justify-center space-x-5"}>
                <Card className={"max-w-[400px]"}>
                    <div className={"bg-secondary h-4 w-full"}/>
                    <CardHeader className={"flex justify-center items-center"}>
                        <h2 className="text-3xl text-primary font-bold uppercase">
                            Misión
                        </h2>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p className={'text-center'}>
                            Nuestra misión es empoderar a las personas en sus decisiones de bienes raíces. Queremos
                            proporcionar acceso a información confiable y herramientas que permitan a nuestros
                            usuarios tomar decisiones financieras informadas. Estamos dedicados a hacer que el
                            proceso de búsqueda de propiedades sea más eficiente.
                        </p>
                    </CardBody>
                </Card>
                
                <Card className={"max-w-[400px]"}>
                    <div className={"bg-secondary h-4 w-full"}/>
                    <CardHeader className={"flex justify-center items-center"}>
                        <h2 className="text-3xl text-primary font-bold uppercase">
                            Visión
                        </h2>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p className={'text-center'}>
                            Nuestra visión es transformar la forma en que las personas encuentran y compran
                            propiedades. Imaginamos un futuro en el que InmoHelp sea el referente en el mercado de
                            bienes raíces, brindando soluciones tecnológicas innovadoras que simplifican la vida de
                            los compradores. Queremos ser líderes en la mejora de la accesibilidad y la
                            transparencia en el mercado inmobiliario.
                        </p>
                    </CardBody>
                </Card>
                
                <Card className={"max-w-[400px]"}>
                    <div className={"bg-secondary h-4 w-full"}/>
                    <CardHeader className={"flex justify-center items-center"}>
                        <h2 className="text-3xl text-primary font-bold uppercase">
                            Valores
                        </h2>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <p className={'text-center'}>
                            En InmoHelp, nuestros valores fundamentales son la integridad, la innovación, la empatía
                            y la excelencia. Creemos en la honestidad y la transparencia en cada interacción con
                            nuestros usuarios. Buscamos constantemente nuevas formas de mejorar y simplificar el
                            proceso de búsqueda de propiedades. Nos preocupamos profundamente por las necesidades de
                            nuestros usuarios y nos esforzamos por superar sus expectativas en cada paso del camino.
                        </p>
                    </CardBody>
                </Card>
            </section>
        </section>
    )
}