'use client'

import FilterProperties from "@/components/FilterProperties";
import ListProperties from "@/components/ListProperties";
import {useForm, FormProvider} from "react-hook-form"
import useProperties from "@/hooks/properties";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import useFilters from "@/hooks/filters";

export default function PropertiesComponent() {
    const {data: session, status} = useSession();
    const {getPropertiesFilters} = useFilters()
    const [loading, setLoading] = useState(true)
    const [filtersOptions, setFiltersOptions] = useState({})
    const methods = useForm({
        defaultValues: {
            affordable: true,
            purpose: '',
        }
    });
    const {propertiesFilter, propertiesFilterAffordable} = useProperties();
    const [properties, setProperties] = useState([])
    
    const onSubmitFilters = async(data) => {
        setLoading(true)
        if(session) {
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
                const response = await propertiesFilter({filter: data})
                setProperties(response)
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }
    }
    
    const getFiltersOptions = async() => {
        try {
            const data = await getPropertiesFilters();
            await setFiltersOptions(data)
        } catch (e) {
        
        }
    }
    
    useEffect(() => {
        if(status === 'authenticated' || status === 'unauthenticated') {
            methods.handleSubmit(onSubmitFilters)()
        }
    }, [status]);
    
    useEffect(() => {
        getFiltersOptions()
    }, []);
    
    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmitFilters)}>
                    <FilterProperties
                        loading={loading}
                        status={status}
                        property_types={filtersOptions?.propertyTypes}
                        provinces={filtersOptions?.provinces}
                        neighborhoods={filtersOptions?.neighborhoods}
                    />
                </form>
            </FormProvider>
            <ListProperties properties={properties} loading={loading}/>
        </>
    )
}