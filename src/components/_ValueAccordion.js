'use client'
import {Accordion, AccordionItem} from "@nextui-org/react";
import {HiShieldCheck} from "react-icons/hi";
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import {MdCancel, MdAnalytics} from "react-icons/md";

export default function _ValueAccordion() {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    
    const itemClasses = {
        title: "text-secondary text-center font-bold text-sm xs:text-[1.1rem]",
    };
    return (
        <Accordion
            variant="splitted"
            defaultExpandedKeys={['1']}
            className={'mt-8 border-none max-w-screen-sm'}
            itemClasses={itemClasses}
        >
            <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title="Accordion 1"
                className={'text-[#8C8B8B] text-sm'}
                // className={({isOpen}) => (isOpen ? 'bg-red-600' : '')}
                startContent={
                    <div
                        className={'flex justify-center items-center p-2.5 bg-[#eeeeff] rounded-md text-ternary'}
                    >
                        <HiShieldCheck/>
                    </div>
                }
                indicator={
                    <div
                        className={'flex justify-center items-center p-2.5 bg-[#eeeeff] rounded-md text-ternary'}
                    >
                        <ChevronDownIcon className={'w-5 h-5'}/>
                    </div>
                }
            >
                {defaultContent}
            </AccordionItem>
            <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title="Accordion 2"
                className={'text-[#8C8B8B] text-sm'}
                startContent={
                    <div
                        className={'flex justify-center items-center p-2.5 bg-[#eeeeff] rounded-md text-ternary'}
                    >
                        <HiShieldCheck/>
                    </div>
                }
                indicator={
                    <div
                        className={'flex justify-center items-center p-2.5 bg-[#eeeeff] rounded-md text-ternary'}
                    >
                        <ChevronDownIcon className={'w-5 h-5'}/>
                    </div>
                }
            >
                {defaultContent}
            </AccordionItem>
            <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title="Accordion 3"
                className={'text-[#8C8B8B] text-sm'}
                startContent={
                    <div
                        className={'flex justify-center items-center p-2.5 bg-[#eeeeff] rounded-md text-ternary'}
                    >
                        <HiShieldCheck/>
                    </div>
                }
                indicator={
                    <div
                        className={'flex justify-center items-center p-2.5 bg-[#eeeeff] rounded-md text-ternary'}
                    >
                        <ChevronDownIcon className={'w-5 h-5'}/>
                    </div>
                }
            >
                {defaultContent}
            </AccordionItem>
        </Accordion>
    );
}