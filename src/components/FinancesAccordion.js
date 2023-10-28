'use client'
import {Accordion, AccordionItem, Button} from "@nextui-org/react";
import {useState} from "react";
import {useFormContext, useFieldArray} from "react-hook-form"
import {Input} from "@nextui-org/input";

export default function FinancesAccordion() {
    const {register} = useFormContext();
    
    const {fields: categories} = useFieldArray({
        name: "categories",
    });
    
    const FieldsSubcategoris = ({index}) => {
        const {fields: subcategories} = useFieldArray({
            name: `categories.${index}.subcategories`,
        });
        
        return subcategories.map((subcategory, i) => {
                return (
                    <Input
                        key={subcategory.id}
                        {...register(`categories.${index}.subcategories.${i}.account_transactions.${0}.amount`)}
                        classNames={{
                            label: 'text-default-600 text-sm xxs:text-base',
                        }}
                        label={subcategory.name}
                        labelPlacement={'outside-left'}
                        placeholder={' '}
                        variant={"bordered"}
                        type={"number"}
                        onWheel={(event) => event.target.blur()}
                    />
                )
            }
        )
    }
    return (
        <fieldset>
            <Accordion>
                {
                    categories?.map((category, index) => {
                        return (
                            <AccordionItem
                                key={category.id}
                                aria-label={category.name}
                                title={category.name}
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