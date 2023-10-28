import UseAxios from "@/libs/axios";

export default function useProperties() {
    const {AxiosInstance} = UseAxios();
    
    const properties = async() => {
        try {
            const response = await AxiosInstance.get('/api/properties?purpose=Venta');
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
    
    const propertiesAffordable = async({user}) => {
        const queryFilters = '?affordable=true&purpose=Venta'
        try {
            const response = await AxiosInstance.get(`/api/properties/affordable${queryFilters}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
    
    const propertyById = async(id) => {
        try {
            const response = await AxiosInstance.get(`/api/properties/${id}`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
    const propertiesOutstanding = async() => {
        try {
            const response = await AxiosInstance.get('/api/properties/outstanding');
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
    
    const propertiesFilter = async({filter}) => {
        const queryFilters = `?purpose=${filter.purpose}&property_type=${filter.property_type}&area=${filter.area}&province=${filter.province}&neighborhood=${filter.neighborhood}&bedrooms=${filter.bedrooms}&garages=${filter.garages}&bathrooms=${filter.bathrooms}&min_price=${filter.min_price}&max_price=${filter.max_price}`;
        try {
            const response = await AxiosInstance.get(`/api/properties${queryFilters}`)
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }
    
    const propertiesFilterAffordable = async({user, filter}) => {
        const queryFilters = `?affordable=${filter.affordable}&purpose=${filter.purpose}&property_type=${filter.property_type}&area=${filter.area}&province=${filter.province}&neighborhood=${filter.neighborhood}&bedrooms=${filter.bedrooms}&garages=${filter.garages}&bathrooms=${filter.bathrooms}&min_price=${filter.min_price}&max_price=${filter.max_price}`;
        try {
            const response = await AxiosInstance.get(`/api/properties/affordable${queryFilters}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }
    
    return {
        properties,
        propertiesAffordable,
        propertyById,
        propertiesOutstanding,
        propertiesFilter,
        propertiesFilterAffordable
    }
}