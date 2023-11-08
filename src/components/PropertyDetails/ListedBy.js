import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import {Textarea} from "@nextui-org/input";
import Link from "next/link";
import Image from "next/image";
import {AtSymbolIcon, PhoneIcon, UserIcon, PaperAirplaneIcon} from "@heroicons/react/24/outline";
import {Button} from "@nextui-org/button";

export default function ListedBy({agent}) {
    return (
        <Card className={"max-w-[500px] w-[500px] lg:w-full p-3"}>
            <CardHeader>
                <header className={'flex flex-col space-y-5'}>
                    <h3 className="text-2xl font-semibold">Listed by</h3>
                    <article className={'flex space-x-2'}>
                        <Image
                            src={'/assets/avatars/avatar.jpeg'}
                            alt={'Avatar'}
                            width={80}
                            height={80}
                            className={'rounded-full'}
                        />
                        <div className={'flex flex-col justify-center items-start space-y-1'}>
                            <h4 className={'text-xl font-semibold'}>{agent.name}</h4>
                            <a href={`mailto:${agent.email}`}
                               className={'text-xs text-gray-500 cursor-pointer'}>{agent.email}</a>
                            <a href={`tel:${agent.phone_number}`}
                               className={'text-xs text-gray-500'}>{agent.phone_number}</a>
                        </div>
                    </article>
                </header>
            </CardHeader>
            <form>
                <CardBody className={'flex flex-col space-y-5'}>
                    <Input
                        autoComplete={'off'}
                        type={"text"}
                        label={"Nombre completo"}
                        labelPlacement={"outside"}
                        placeholder={"Nombre Completo"}
                        variant={'bordered'}
                        color={'secondary'}
                        startContent={
                            <UserIcon className={'w-4 h-4 text-secondary pointer-events-none flex-shrink-0'}/>
                        }
                    />
                    <Input
                        autoComplete={'off'}
                        type={'email'}
                        label={'Correo electrónico'}
                        labelPlacement={'outside'}
                        placeholder={'you@example.com'}
                        variant={'bordered'}
                        color={'secondary'}
                        startContent={
                            <AtSymbolIcon className={'w-4 h-4 text-secondary pointer-events-none flex-shrink-0'}/>
                        }
                    />
                    <Input
                        autoComplete={'off'}
                        type={"text"}
                        label={"Celular"}
                        labelPlacement={"outside"}
                        placeholder={"809-555-5555"}
                        variant={'bordered'}
                        color={'secondary'}
                        startContent={
                            <PhoneIcon className={'w-4 h-4 text-secondary pointer-events-none flex-shrink-0'}/>
                        }
                    />
                    
                    <Textarea
                        label={"Mensaje"}
                        labelPlacement={"outside"}
                        placeholder={"Escribe tu mensaje aquí"}
                        variant={'bordered'}
                        color={'secondary'}
                    />
                </CardBody>
                <CardFooter>
                    <Button
                        type={'button'}
                        color={"primary"}
                        variant={"ghost"}
                        radius={"full"}
                        className={'flex items-center justify-between text-base bg-primary/10'}
                        endContent={
                            <div className={'bg-primary rounded-full p-1'}>
                                <PaperAirplaneIcon
                                    className={'w-5 h-5 text-white pointer-events-none flex-shrink-0'}/>
                            </div>
                        }
                    >
                        Enviar mensaje
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}