'use client'
import {Select, SelectItem} from "@nextui-org/select";
import {HomeIcon, MagnifyingGlassIcon, CurrencyDollarIcon} from "@heroicons/react/24/outline";
import {Input} from "@nextui-org/input";
import {Divider} from "@nextui-org/react";
import {useRouter} from 'next/navigation'
import {useForm} from "react-hook-form"
import {Button} from "@nextui-org/button";

export default function HeroSearch() {
    const router = useRouter()
    // const [contractType, setContractType] = useState("Tipo de Contrato");
    // const [stateType, setStateType] = useState("Tipo de propiedad");
    // const [currency, setCurrency] = useState("Moneda");
    // const [rooms, setRooms] = useState("Habitaciones");
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm()
    
    const search = (data) => {
        const {code, property_type, min_price, max_price} = data
        // console.log(`/properties?code=${code}&property_type=${property_type}&min_price=${min_price}&max_price=${max_price}`)
        router.push(`/properties?code=${code}&property_type=${property_type}&min_price=${min_price}&max_price=${max_price}`)
    }
    
    return (
        <form
            onSubmit={handleSubmit(search)}
            className={"bg-white w-9/12 max-w-[900px] hidden sm:block p-5 rounded-2xl space-y-4 shadow-2xl z-10"}
        >
            <div
                className={"sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5"}
            >
                <Input
                    {...register("code")}
                    variant={"underlined"}
                    type={"search"}
                    label={"Código de propiedad"}
                    placeholder={"Escribe el código"}
                    radius={"none"}
                    startContent={<MagnifyingGlassIcon className={"w-5 h-5 text-secondary"}/>}
                    className={"border-none"}
                />
                <Divider orientation={"vertical"}
                         className={"hidden border-solid border-gray-200 border h-[57px]"}/>
                <Select
                    {...register("property_type")}
                    variant={"underlined"}
                    radius={"none"}
                    // labelPlacement={"outside"}
                    label={"Categoría:"}
                    placeholder={"Select..."}
                    startContent={<HomeIcon className={"w-5 h-5 text-secondary"}/>}
                    className={"border-none"}
                >
                    {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                            {category.label}
                        </SelectItem>
                    ))}
                </Select>
                <Divider orientation={"vertical"}
                         className={"hidden border-solid border-gray-200 border-1 h-[57px]"}/>
                <Select
                    {...register("min_price")}
                    variant={"underlined"}
                    radius={"none"}
                    // labelPlacement={"outside"}
                    label={"Precio desde:"}
                    placeholder={"Select..."}
                    startContent={<CurrencyDollarIcon className={"w-5 h-5 text-secondary"}/>}
                    className={"border-none"}
                >
                    {prices.map((price) => (
                        <SelectItem key={price.value} value={price.value}>
                            {USDollar.format(price.label)}
                        </SelectItem>
                    ))}
                </Select>
                <Divider orientation={"vertical"}
                         className={"hidden  border-solid border-gray-200 border-1 h-[57px]"}/>
                <Select
                    {...register("max_price")}
                    variant={"underlined"}
                    radius={"none"}
                    // labelPlacement={"outside"}
                    label={"Precio hasta:"}
                    placeholder={"Select..."}
                    startContent={<CurrencyDollarIcon className={"w-5 h-5 text-secondary"}/>}
                    className={"border-none"}
                >
                    {prices.map((price) => (
                        <SelectItem key={price.value} value={price.value}>
                            {USDollar.format(price.label)}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            {/*<button*/}
            {/*    className="bg-primary w-full max-w-[220px] text-center py-3 text-white rounded-tl-xl rounded-br-xl hover:bg-primary/80"*/}
            {/*>*/}
            {/*    Buscar*/}
            {/*</button>*/}
            <Button
                className={'text-white text-base w-full max-w-[220px] py-6 rounded-tl-xl rounded-br-xl hover:bg-primary/80'}
                radius={'none'}
                type={"submit"}
                variant={"solid"}
                color={"primary"}
            >
                Buscar
            </Button>
        </form>
    );
}

const categories = [
    {label: "Apartamento", value: "1"},
    {label: "Casa", value: "2"},
    {label: "Penthouse", value: "3"},
    {label: "Solar", value: "4"},
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