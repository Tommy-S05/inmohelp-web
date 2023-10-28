'use client'

import FilterProperties from "@/components/FilterProperties";
import ListProperties from "@/components/ListProperties";
import {useForm, FormProvider} from "react-hook-form"
import useProperties from "@/hooks/properties";
import {useState} from "react";

export default function PropertiesComponent({data, session}) {
    const [loading, setLoading] = useState(false)
    const methods = useForm({
        defaultValues: {
            affordable: true,
            purpose: 'Venta',
            property_type: 2
        }
    });
    const {propertiesFilter, propertiesFilterAffordable} = useProperties();
    const [properties, setProperties] = useState(data)
    
    const onSubmitFilters = async(data) => {
        setLoading(true)
        if(session) {
            // console.dir(data)
            try {
                const response = await propertiesFilterAffordable({user: session?.user, filter: data})
                setProperties(response)
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        } else {
            try {
                const response = await propertiesFilter({data})
                setProperties(response)
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }
    }
    
    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmitFilters)}>
                    <FilterProperties session={session} loading={loading}/>
                </form>
            </FormProvider>
            <ListProperties data={properties} loading={loading}/>
        </>
    )
}