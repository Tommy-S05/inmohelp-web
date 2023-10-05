'use client'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Select, SelectItem} from "@nextui-org/select";
import {Input} from "@nextui-org/input";
import {useEffect, useState} from "react";

export default function FilterProperties({session}) {
    useEffect(() => {
        const inputNumber = document.querySelectorAll("input[type='number']");

        if (inputNumber) {
            let isScrolling = false;

            inputNumber.forEach((input) => {
                input.addEventListener("wheel", (e) => {
                    e.preventDefault();

                    if (!isScrolling) {
                        isScrolling = true;

                        // Obtiene el scroll actual de la página
                        const scrollY = window.scrollY || window.pageYOffset;

                        // Calcula la cantidad de desplazamiento necesario para mantener la posición actual del mouse
                        const deltaY = e.deltaY;

                        // Realiza un desplazamiento gradual
                        const start = Date.now();
                        const duration = 100; // Ajusta la duración según tus preferencias

                        function step() {
                            const currentTime = Date.now();
                            const elapsed = currentTime - start;
                            const progress = Math.min(elapsed / duration, 1);
                            window.scrollTo(0, scrollY + deltaY * progress);

                            if (progress < 1) {
                                requestAnimationFrame(step);
                            } else {
                                isScrolling = false;
                            }
                        }

                        requestAnimationFrame(step);
                    }
                });
            });
        }
    }, []);

    const [purpose, setPurpose] = useState('venta')
    const [affordable, setAffordable] = useState(false)
    const [type, setType] = useState([]);

    const handleAffordable = () => {
        setAffordable(!affordable)
    }
    const handlePurpose = (purpose) => {
        setPurpose(purpose)
    }

    return (
        <aside className={'hidden lg:block'}>
            <Card className="max-w-[400px] min-w-[280px] xl:min-w-[320px]">
                <CardBody
                    className={'flex flex-col justify-center items-center space-y-5'}
                >
                    {
                        session?.user && (
                            <Button
                                color={"primary"}
                                variant={affordable ? "solid" : "ghost"}
                                onClick={() => handleAffordable()}
                                className={'max-w-xs w-full text-xl font-bold py-7'}
                            >
                                Solo para tí
                            </Button>
                        )
                    }
                    <ButtonGroup>
                        <Button
                            color={purpose === "venta" ? "primary" : "default"}
                            variant={purpose === "venta" ? "solid" : "ghost"}
                            onClick={() => handlePurpose("venta")}
                        >
                            Venta
                        </Button>
                        <Button
                            color={purpose === "alquiler" ? "primary" : "default"}
                            variant={purpose === "alquiler" ? "solid" : "ghost"}
                            onClick={() => handlePurpose("alquiler")}
                        >
                            Alquiler
                        </Button>
                    </ButtonGroup>

                    <Select
                        label={"Tipo de propiedad"}
                        placeholder={"Selecciona"}
                        labelPlacement={"outside"}
                        classNames={{
                            label: 'text-[#414342] font-bold text-lg',
                        }}
                    >
                        <SelectItem key={1} value={1}>
                            Apartamento
                        </SelectItem>
                        <SelectItem key={2} value={2}>
                            Casa
                        </SelectItem>
                        {/*{animals.map((animal) => (*/}
                        {/*    <SelectItem key={animal.value} value={animal.value}>*/}
                        {/*        {animal.label}*/}
                        {/*    </SelectItem>*/}
                        {/*))}*/}
                    </Select>

                    <Select
                        label={"Provincia"}
                        placeholder="Selecciona"
                        labelPlacement="outside"
                        classNames={{
                            label: 'text-[#414342] font-bold text-lg',
                        }}
                    >
                        <SelectItem value={1}>
                            Distrito Nacional
                        </SelectItem>
                        <SelectItem value={2}>
                            Azua
                        </SelectItem>
                        <SelectItem value={25}>
                            Santiago
                        </SelectItem>
                    </Select>

                    <Select
                        label={"Sector"}
                        placeholder="Selecciona"
                        labelPlacement="outside"
                        classNames={{
                            label: 'text-[#414342] font-bold text-lg',
                        }}
                    >
                        <SelectItem value={33}>
                            Ensanche Naco
                        </SelectItem>
                        <SelectItem value={34}>
                            Piantini
                        </SelectItem>
                        <SelectItem value={49}>
                            Bella Vista
                        </SelectItem>
                    </Select>
                    <div
                        className={'w-full flex flex-col space-y-5 xl:space-y-0 xl:flex-row xl:justify-between xl:gap-x-5'}>
                        <Select
                            label={"Habitaciones"}
                            placeholder="Selecciona"
                            labelPlacement="outside"
                            classNames={{
                                label: 'text-[#414342] font-bold text-lg',
                            }}
                        >
                            <SelectItem value={1}>
                                1
                            </SelectItem>
                            <SelectItem value={2}>
                                2
                            </SelectItem>
                            <SelectItem value={3}>
                                3
                            </SelectItem>
                            <SelectItem value={4}>
                                4
                            </SelectItem>
                        </Select>

                        <Select
                            label={"Baños"}
                            placeholder="Selecciona"
                            labelPlacement="outside"
                            classNames={{
                                label: 'text-[#414342] font-bold text-lg',
                            }}
                        >
                            <SelectItem value={1}>
                                1
                            </SelectItem>
                            <SelectItem value={2}>
                                2
                            </SelectItem>
                            <SelectItem value={3}>
                                3
                            </SelectItem>
                            <SelectItem value={4}>
                                4
                            </SelectItem>
                        </Select>
                    </div>

                    <div
                        className={'w-full flex flex-col space-y-5 xl:space-y-0 xl:flex-row xl:justify-between xl:gap-x-5'}>
                        <Select
                            label={"Parqueos"}
                            placeholder="Selecciona"
                            labelPlacement="outside"
                            classNames={{
                                label: 'text-[#414342] font-bold text-lg',
                            }}
                        >
                            <SelectItem value={1}>
                                1
                            </SelectItem>
                            <SelectItem value={2}>
                                2
                            </SelectItem>
                            <SelectItem value={3}>
                                3
                            </SelectItem>
                            <SelectItem value={4}>
                                4
                            </SelectItem>
                        </Select>

                        <Input
                            type={"number"}
                            label={"Área"}
                            labelPlacement={"outside"}
                            placeholder={`Área (m${'\u00B2'})`}
                            classNames={{
                                label: 'text-[#414342] font-bold text-lg',
                            }}
                            endContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">m{'\u00B2'}</span>
                                </div>
                            }
                        />
                    </div>

                    <div
                        className={'w-full flex flex-col space-y-5 xl:space-y-0 xl:flex-row xl:justify-between xl:gap-x-5'}>
                        <Input
                            type={"number"}
                            label={"Precio desde"}
                            labelPlacement={"outside"}
                            placeholder={'Sin mínimo'}
                            classNames={{
                                label: 'text-[#414342] font-bold text-lg',
                            }}
                            endContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">$</span>
                                </div>
                            }
                        />

                        <Input
                            type={"number"}
                            label={"Precio hasta"}
                            labelPlacement={"outside"}
                            placeholder={'Sin máximo'}
                            classNames={{
                                label: 'text-[#414342] font-bold text-lg',
                            }}
                            endContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">$</span>
                                </div>
                            }
                        />
                    </div>
                </CardBody>
                <CardFooter className={'flex justify-between'}>
                    <Button
                        size={'md'}
                        color={"primary"}
                        variant={"ghost"}
                        className={'text-xs'}
                    >
                        Aplicar filtros
                    </Button>
                    <Button
                        size={'md'}
                        color={"secondary"}
                        variant={"ghost"}
                        onClick={() => {
                            setType([]);
                            setAffordable(false);
                            setPurpose('venta')
                        }}
                        className={'text-xs'}
                    >
                        Limpiar filtros
                    </Button>
                </CardFooter>
            </Card>
        </aside>
    )
}