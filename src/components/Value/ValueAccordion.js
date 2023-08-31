'use client'
// import {Accordion, AccordionItem} from "@nextui-org/react";
// import {
//     DevicePhoneMobileIcon,
//     ShieldExclamationIcon,
//     InformationCircleIcon,
//     ComputerDesktopIcon
// } from "@heroicons/react/24/outline";

import data from '@/utils/accordion-data'
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import {useState} from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function ValueAccordion() {
    // const itemClasses = {
    //     base: "py-0 w-full",
    //     title: "font-normal text-medium",
    //     trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    //     indicator: "text-medium",
    //     content: "text-small px-2",
    // };
    //
    // const defaultContent =
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


    return (
        <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className={'mt-8 border-none max-w-screen-sm'}
        >
            {
                data.map((item, index) => {
                    const [className, setClassName] = useState('accordion-collapse')
                    return (
                        <AccordionItem
                            key={index}
                            uuid={index}
                            className={`${className} bg-white border-solid border-[0.8px] border-[#80808024] rounded-lg overflow-hidden mb-5`}
                        >
                            <AccordionItemHeading>
                                <AccordionItemButton
                                    className={'flex justify-between items-center bg-white p-4 w-full gap-x-2'}
                                >
                                    <AccordionItemState>
                                        {
                                            ({expanded}) => (
                                                expanded
                                                    ? setClassName('accordion-expanded')
                                                    : setClassName('accordion-collapse')
                                            )
                                        }
                                    </AccordionItemState>
                                    <div
                                        className={'flex justify-center items-center p-2.5 bg-[#eeeeff] rounded-md text-ternary'}
                                    >
                                        {item.icon}
                                    </div>
                                    <span className={'text-secondary font-bold text-sm xs:text-[1.1rem]'}>
                                                {item.heading}
                                            </span>
                                    <div
                                        className={'flex justify-center items-center p-2.5 bg-[#eeeeff] rounded-md text-ternary'}
                                    >
                                        <ChevronDownIcon className={'w-5 h-5'}/>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className={'text-sm text-[#8C8B8B]'}>
                                    {item.detail}
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })
            }
        </Accordion>

        // <Accordion
        //     showDivider={false}
        //     className="p-2 flex flex-col gap-1 w-full max-w-[300px]"
        //     variant="shadow"
        //     itemClasses={itemClasses}
        // >
        //     <AccordionItem
        //         key="1"
        //         aria-label="Connected devices"
        //         startContent={<DevicePhoneMobileIcon className={"text-primary w-[25px] h-[25px]"}/>}
        //         subtitle={
        //             <p className="flex">
        //                 2 issues to <span className="text-primary ml-1">fix now</span>
        //             </p>
        //         }
        //         title={<p className={'text-center'}>Connected devices</p>}
        //     >
        //         {defaultContent}
        //     </AccordionItem>
        //     <AccordionItem
        //         key="2"
        //         aria-label="Apps Permissions"
        //         startContent={<ShieldExclamationIcon className={'w-[25px] h-[25px]'}/>}
        //         subtitle="3 apps have read permissions"
        //         title="Apps Permissions"
        //     >
        //         {defaultContent}
        //     </AccordionItem>
        //     <AccordionItem
        //         key="3"
        //         aria-label="Pending tasks"
        //         classNames={{subtitle: "text-warning"}}
        //         startContent={<InformationCircleIcon className={"text-warning w-[25px] h-[25px]"}/>}
        //         subtitle="Complete your profile"
        //         title="Pending tasks"
        //     >
        //         {defaultContent}
        //     </AccordionItem>
        //     <AccordionItem
        //         key="4"
        //         aria-label="Card expired"
        //         classNames={{subtitle: "text-danger"}}
        //         startContent={<ComputerDesktopIcon className={"text-danger w-[25px] h-[25px]"}/>}
        //         subtitle="Please, update now"
        //         title={
        //             <p className="flex gap-1 items-center">
        //                 Card expired
        //                 <span className="text-default-400 text-small">*4812</span>
        //             </p>
        //         }
        //     >
        //         {defaultContent}
        //     </AccordionItem>
        // </Accordion>
    )
}