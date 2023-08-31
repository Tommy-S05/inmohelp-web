'use client'
import {Select, SelectSection, SelectItem} from "@nextui-org/select";
import {HomeIcon, MagnifyingGlassIcon, CurrencyDollarIcon} from "@heroicons/react/24/outline";
import {Input} from "@nextui-org/input";
import {Divider} from "@nextui-org/react";

export default function Search() {
    // const [contractType, setContractType] = useState("Tipo de Contrato");
    // const [stateType, setStateType] = useState("Tipo de propiedad");
    // const [currency, setCurrency] = useState("Moneda");
    // const [rooms, setRooms] = useState("Habitaciones");
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <form
            className={"bg-white w-9/12 max-w-[900px] hidden sm:block p-5 rounded-2xl space-y-4 shadow-2xl z-10"}
        >
            <div
                className={"sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5 lg:flex lg:gap-x-0 lg:gap-y-0 lg:bg-gray-100"}
            >
                <Input
                    variant={"underlined"}
                    type={"search"}
                    label={"Código de propiedad"}
                    placeholder={"Escribe el código"}
                    radius={"none"}
                    isRequired={true}
                    startContent={<MagnifyingGlassIcon className={"w-5 h-5 text-secondary"}/>}
                    className={"lg:max-w-xs border-none"}
                />
                <Divider orientation={"vertical"}
                         className={"hidden lg:flex border-solid border-gray-200 border h-[57px]"}/>
                <Select
                    variant={"underlined"}
                    radius={"none"}
                    // labelPlacement={"outside"}
                    label={"Categoría:"}
                    placeholder={"Select..."}
                    startContent={<HomeIcon className={"w-5 h-5 text-secondary"}/>}
                    className={"lg:max-w-xs border-none"}
                >
                    {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                            {category.label}
                        </SelectItem>
                    ))}
                </Select>
                <Divider orientation={"vertical"}
                         className={"hidden lg:flex border-solid border-gray-200 border-1 h-[57px]"}/>
                <Select
                    variant={"underlined"}
                    radius={"none"}
                    // labelPlacement={"outside"}
                    label={"Min price:"}
                    placeholder={"Select..."}
                    startContent={<CurrencyDollarIcon className={"w-5 h-5 text-secondary"}/>}
                    className={"lg:max-w-xs border-none"}
                >
                    {prices.map((price) => (
                        <SelectItem key={price.value} value={price.value}>
                            {USDollar.format(price.label)}
                        </SelectItem>
                    ))}
                </Select>
                <Divider orientation={"vertical"}
                         className={"hidden lg:flex border-solid border-gray-200 border-1 h-[57px]"}/>
                <Select
                    variant={"underlined"}
                    radius={"none"}
                    // labelPlacement={"outside"}
                    label={"Max price:"}
                    placeholder={"Select..."}
                    startContent={<CurrencyDollarIcon className={"w-5 h-5 text-secondary"}/>}
                    className={"lg:max-w-xs border-none"}
                >
                    {prices.map((price) => (
                        <SelectItem key={price.value} value={price.value}>
                            {USDollar.format(price.label)}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            <button
                className="bg-primary w-full max-w-[220px] text-center py-3 text-white rounded-tl-xl rounded-br-xl hover:bg-primary/80"
            >
                Buscar
            </button>
        </form>
    );
}

const animals = [
    {label: "Cat", value: "cat", description: "The second most popular pet in the world"},
    {label: "Dog", value: "dog", description: "The most popular pet in the world"},
    {label: "Elephant", value: "elephant", description: "The largest land animal"},
    {label: "Lion", value: "lion", description: "The king of the jungle"},
    {label: "Tiger", value: "tiger", description: "The largest cat species"},
    {label: "Giraffe", value: "giraffe", description: "The tallest land animal"},
    {
        label: "Dolphin",
        value: "dolphin",
        description: "A widely distributed and diverse group of aquatic mammals",
    },
    {label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds"},
    {label: "Zebra", value: "zebra", description: "A several species of African equids"},
    {
        label: "Shark",
        value: "shark",
        description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
    },
    {
        label: "Whale",
        value: "whale",
        description: "Diverse group of fully aquatic placental marine mammals",
    },
    {label: "Otter", value: "otter", description: "A carnivorous mammal in the subfamily Lutrinae"},
    {label: "Crocodile", value: "crocodile", description: "A large semiaquatic reptile"},
];
const categories = [
    {label: "Apartamento", value: "apartamento"},
    {label: "Casa", value: "casa"},
    {label: "Penthouse", value: "penthouse"},
    {label: "Solar", value: "solar"},
];

const prices = [
    {label: "500", value: 500},
    {label: "1000", value: 1000},
    {label: "10000", value: 10000},
    {label: "20000", value: 20000},
    {label: "50000", value: 50000},
    {label: "100000", value: 100000},
    {label: "200000", value: 200000},
    {label: "500000", value: 500000},
    {label: "1000000", value: 1000000},
    {label: "2000000", value: 2000000},
    {label: "5000000", value: 5000000},
    {label: "10000000", value: 10000000},
    {label: "20000000", value: 20000000},
    {label: "50000000", value: 50000000},
    {label: "100000000", value: 100000000},
];