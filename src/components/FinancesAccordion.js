'use client'
import {useForm} from "react-hook-form";
import useFinances from "@/hooks/finances";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {useEffect} from "react";

export default function FinancesAccordion({financesCategories, accountTransactions}) {
    console.log(accountTransactions)
    const {submitAccountTransactions} = useFinances()
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: {errors}
    } = useForm();
    
    useEffect(() => {
        accountTransactions?.map((account) => {
            account.account_transactions?.map((transaction) => {
                // Establecer el valor del campo con el nombre "amount-{id}" con el valor de la transacción
                // let amount = parseFloat(transaction.amount).toFixed(2);
                let amount = transaction.amount.toFixed(2);
                setValue(`amount-${transaction.sub_category_id}`, amount);
            });
        });
    }, [accountTransactions]);
    const onSubmit = async data => {
        
        let total_incomes = 0;
        let total_expenses = 0;
        const subCategories = [];
        
        // Recorrer los valores del formulario
        for(const [key, value] of Object.entries(data)) {
            
            // Verificar si el nombre del campo comienza con "amount-"
            if(key.startsWith("amount-")) {
                // Obtener el ID de la subcategoría del nombre del campo
                const subCategory_id = Number(key.split("-")[1]);
                const amount = Number(value);
                if(isNaN(amount) || value.trim() === "") {
                    const newAmount = 0.00;
                    subCategories.push({subCategory_id, newAmount});
                } else if(!isNaN(amount) && value.trim() !== "") {
                    subCategories.push({subCategory_id, amount});
                    if(subCategory_id >= 1 && subCategory_id <= 6) {
                        total_incomes += amount;
                    } else {
                        total_expenses += amount;
                    }
                }
            }
        }
        await submitAccountTransactions({total_incomes, total_expenses, subCategories});
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <Accordion>
                    {
                        financesCategories?.map((category) => {
                            return (
                                <AccordionItem key={category.id} aria-label={category.name} title={category.name}>
                                    {
                                        category.subcategories.map((subcategory) => {
                                                return (
                                                    <div key={subcategory.id} className={'flex space-x-8'}>
                                                        <h2>{subcategory.name}</h2>
                                                        <input type={"number"}
                                                               defaultValue={0.00}
                                                               {...register(`amount-${subcategory.id}`)}
                                                               onWheel={(event) => event.target.blur()}
                                                        />
                                                    </div>
                                                )
                                            }
                                        )
                                    }
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
                <button type={"submit"}
                        className={"bg-primary p-3 text-white rounded-tl-xl rounded-br-xl hover:bg-primary/80"}>
                    Guardar
                </button>
            </fieldset>
        </form>
    )
}