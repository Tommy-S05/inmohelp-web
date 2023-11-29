import UseAxios from "@/libs/axios";

export default function useFilters() {
    const getNeighborhoods = async() => {
        const {AxiosInstance} = UseAxios();
        try {
            const response = await AxiosInstance.get('/api/neighborhoods');
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
    
    return {getNeighborhoods}
}