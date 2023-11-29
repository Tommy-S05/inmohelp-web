'use client'
import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import {Input, Button} from "@nextui-org/react";
import HeroPages from "@/components/Heros/HeroPages";

export default function ContactusPage() {
    const breadcrumb = [
        {
            name: 'Contáctanos',
            href: '/contactus'
        },
    ];
    
    return (
        <main className={'space-y-5 pb-5'}>
            <HeroPages
                title={'Contáctanos'}
                breadcrumb={breadcrumb}
                height={400}
            />
            <section className={'w-2/3 flex flex-col justify-center mx-72 '}>
                <section className={"flex justify-center items-center gap-5 space-x-44 p-5 rounded-lg shadow-lg"}>
                    <div className="flex flex-col justify-center items-center space-y-10">
                        
                        <div className=" flex flex-col items-center">
                            <label className="py-1">Direccion</label>
                            <label> 27 de frebrero esquina churchill</label>
                        </div>
                        
                        <div className=" flex flex-col items-center">
                            <label className="py-1">telefono</label>
                            <label> 809-666-5845</label>
                        </div>
                        
                        <div className=" flex flex-col items-center">
                            <label className="py-1">email</label>
                            <label> elberga12@hotmail.com</label>
                        </div>
                    
                    
                    </div>
                    
                    <div className="flex flex-col ">
                        <div className={"max-w-[600px] space-y-2"}>
                            <div className={"flex justify-center items-center"}>
                                <div className="space-y-3 flex flex-col">
                                    <h2 className="text-3xl text-primary font-bold uppercase">
                                        send us a message
                                    </h2>
                                    <label>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de
                                        texto.</label>
                                </div>
                            </div>
                            
                            <div>
                                <div className="space-y-2 ">
                                    <Input
                                        placeholder="Enter your name"
                                        variant="bordered"
                                    />
                                    <Input
                                        placeholder="Enter your mail"
                                        variant="bordered"
                                    />
                                    <Input
                                        placeholder="Enter your message"
                                        variant="bordered"
                                    />
                                    <Button color="primary">
                                        Send now
                                    </Button>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </section>
            
            
            </section>
        </main>
    );
}
