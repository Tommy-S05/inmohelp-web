'use client'
// import {Dropdown} from "flowbite-react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {useMemo, useState} from "react";

export default function Search() {
    const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));
    
    const selectedValue = useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
    
    // const [contractType, setContractType] = useState("Tipo de Contrato");
    // const [stateType, setStateType] = useState("Tipo de propiedad");
    // const [currency, setCurrency] = useState("Moneda");
    // const [rooms, setRooms] = useState("Habitaciones");
    
    const [value, setValue] = useState(400);
    
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    
    return (
        <form
            className=" bg-white md:w-9/12 lg:w-7/12 xl:w-[900px] hidden md:block p-5 rounded-2xl space-y-4 shadow-2xl z-10"
        >
            <div className={"flex space-x-4"}>
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                            className={"capitalize"}
                        >
                            {selectedValue}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Single selection example"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                    >
                        <DropdownItem key="compra">Compra</DropdownItem>
                        <DropdownItem key="alquiler">Alquiler</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <input
                    type={'search'}
                    className={"rounded-full p-2 flex-grow bg-neutral-50 text-gray-900 pl-3 border-gray-200"}
                    placeholder={"Naco, Paraiso, Piantini..."}
                />
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                            className="capitalize"
                        >
                            {selectedValue}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Single selection example"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                    >
                        <DropdownItem key="apartamento">Apartamento</DropdownItem>
                        <DropdownItem key="casa">Casa</DropdownItem>
                        <DropdownItem key="penthouse">Penthouse</DropdownItem>
                        <DropdownItem key="Solar">Solar</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            
            <div className="flex items-center space-x-4 w-full">
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                            className="capitalize"
                        >
                            {selectedValue}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Single selection example"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                    >
                        <DropdownItem key="usd">USD</DropdownItem>
                        <DropdownItem key="dom">DOM</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <div className="price-range p-4 flex-grow">
                    <span className="text-sm">$</span>
                    <span className="text-sm">{value}</span>
                    <input
                        className="w-full accent-primary"
                        type="range"
                        value={value}
                        min="0"
                        max="1000"
                        onChange={handleChange}
                    />
                    <div className="-mt-2 flex w-full justify-between">
                        <span className="text-sm text-gray-600">0</span>
                        <span className="text-sm text-gray-600">1000</span>
                    </div>
                </div>
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                            className="capitalize"
                        >
                            {selectedValue}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Single selection example"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                    >
                        <DropdownItem key="1">1</DropdownItem>
                        <DropdownItem key="2">2</DropdownItem>
                        <DropdownItem key="3">3</DropdownItem>
                        <DropdownItem key="4">4</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </form>
    );
}
