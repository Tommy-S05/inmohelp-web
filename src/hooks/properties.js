import UseAxios from "@/libs/axios";

export default function useProperties() {
    const {AxiosInstance} = UseAxios();

    const properties = async () => {
        try {
            const response = await AxiosInstance.get('/api/properties');
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }

    const propertyById = async (id) => {
        try {
            const response = await AxiosInstance.get(`/api/properties/${id}`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
    const propertiesOutstanding = async () => {
        try {
            const response = await AxiosInstance.get('/api/properties/outstanding');
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }

    return {properties, propertyById, propertiesOutstanding}
}