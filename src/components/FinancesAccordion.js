'use client'
import {Accordion, AccordionItem, Button} from "@nextui-org/react";
import {useState} from "react";
import {useFormContext, useFieldArray, Controller} from "react-hook-form"
import {Input} from "@nextui-org/input";
import {CurrencyDollarIcon} from "@heroicons/react/24/outline";

export default function FinancesAccordion() {
    const {register, control} = useFormContext();
    
    const {fields: categories} = useFieldArray({
        name: "categories",
    });
    
    const itemClasses = {
        title: "text-secondary font-bold text-sm xs:text-[1.1rem] pl-2",
        content: "pl-5"
    };
    
    const FieldsSubcategoris = ({index}) => {
        const {fields: subcategories} = useFieldArray({
            name: `categories.${index}.subcategories`,
        });
        
        return subcategories.map((subcategory, i) => {
                return (
                    <div key={subcategory.id} className={'flex space-y-2'}>
                        <Controller
                            name={`categories.${index}.subcategories.${i}.account_transactions.${0}.amount`}
                            control={control}
                            render={({field}) => (
                                <Input
                                    {...field}
                                    classNames={{
                                        label: 'text-default-600 text-sm xxs:text-base',
                                    }}
                                    label={subcategory.name}
                                    labelPlacement={'outside-left'}
                                    placeholder={' '}
                                    startContent={<CurrencyDollarIcon className={"w-10 h-10 text-primary"}/>}
                                    endContent={<span className={'text-primary'}>/DOP</span>}
                                    variant={"bordered"}
                                    type={"number"}
                                    onWheel={(event) => event.target.blur()}
                                />
                            )}
                        />
                    </div>
                )
            }
        )
    }
    return (
        <fieldset>
            <Accordion variant={'shadow'} itemClasses={itemClasses}>
                {
                    categories?.map((category, index) => {
                        return (
                            <AccordionItem
                                key={category.id}
                                aria-label={category.name}
                                title={`${category.name}${category.type === 'income' ? '' : ' - Gastos'}`}
                            >
                                <div className={'space-y-5'}>
                                    {
                                        <FieldsSubcategoris index={index}/>
                                    }
                                </div>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </fieldset>
    )
}