import UseAxios from "@/libs/axios";

export default function usePriceIndex() {
    const {AxiosInstance} = UseAxios();
    
    const getPriceIndex = async({user, params}) => {
        const response = await AxiosInstance.get(`/api/price-index${params}`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        
        return response.data
    }
    //
    // return {priceIndex, getPriceIndex, loading};
    return {getPriceIndex};
}