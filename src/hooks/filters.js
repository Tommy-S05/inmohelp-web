import UseAxios from "@/libs/axios";

export default function useFilters() {
    const {AxiosInstance} = UseAxios();
    const getNeighborhoods = async() => {
        try {
            const response = await AxiosInstance.get('/api/neighborhoods');
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
    
    const getPropertiesFilters = async() => {
        try {
            const response = await AxiosInstance.get('/api/properties-filters');
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
    
    return {getNeighborhoods, getPropertiesFilters}
}