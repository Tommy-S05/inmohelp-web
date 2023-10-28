'use client'

import FilterProperties from "@/components/FilterProperties";
import ListProperties from "@/components/ListProperties";
import {useForm, FormProvider} from "react-hook-form"
import useProperties from "@/hooks/properties";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";

export default function PropertiesComponent({data}) {
    const {data: session, status} = useSession();
    const [loading, setLoading] = useState(true)
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
    
    useEffect(() => {
        if(status === 'authenticated' || status === 'unauthenticated') {
            methods.handleSubmit(onSubmitFilters)()
        }
    }, [status]);
    
    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmitFilters)}>
                    <FilterProperties
                        loading={loading}
                        status={status}
                    />
                </form>
            </FormProvider>
            <ListProperties properties={properties} loading={loading}/>
        </>
    )
}