import {Card, CardBody} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import ContactusForm from "@/components/Contactus/ContactusForm";
import {FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import {IoMdMail} from "react-icons/io";

export default function Contactus() {
    return (
        <Card className={'w-full max-w-screen-lg col-span-12 p-0 md:p-5'}>
            <CardBody className={'flex flex-row justify-center items-center gap-5 p-5'}>
                <section className="flex flex-col justify-center items-center space-y-10">
                    <div className="flex flex-col items-center text-center space-y-1">
                        <FaMapMarkerAlt className={"text-3xl font-bold text-primary"}/>
                        <label className={"text-xl font-bold text-primary"}>
                            Direccion
                        </label>
                        <p className={'text-gray-500'}>
                            27 de frebrero esquina churchill
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center space-y-1">
                        <FaPhoneAlt className={"text-3xl font-bold text-primary"}/>
                        <label className={"text-xl font-bold text-primary"}>
                            Telefono
                        </label>
                        <a href={`tel:8098522693`}
                           className={'text-gray-500 cursor-pointer'}>+1 809-852-2693</a>
                    </div>
                    
                    <div className="flex flex-col items-center text-center space-y-1">
                        <IoMdMail className={"text-3xl font-bold text-primary"}/>
                        <label className={"text-xl font-bold text-primary"}>
                            Correo electrónico
                        </label>
                        <a href={`mailto:inmohelp@gmail.com`}
                           className={'text-gray-500 cursor-pointer'}>inmohelp@gmail.com</a>
                    </div>
                </section>
                
                <Divider
                    orientation={'vertical'}
                    className={'hidden lg:flex border-solid border-gray-200 border h-72 mx-4'}
                />
                
                <section className="flex flex-col ">
                    <div className={"max-w-[600px] space-y-2"}>
                        <header className={"flex justify-center items-center"}>
                            <div className="space-y-3 flex flex-col">
                                <h2 className="text-3xl text-primary font-bold uppercase">
                                    Envíanos un mensaje
                                </h2>
                                <label>
                                    Si tiene alguna duda, sugerencia o inconveniente por favor no tarde en contactarnos.
                                </label>
                            </div>
                        </header>
                        
                        <ContactusForm/>
                    </div>
                </section>
            </CardBody>
        </Card>
    )
}