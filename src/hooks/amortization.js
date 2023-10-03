import UseAxios from "@/libs/axios";

export default function useAmortization() {
    const getAmortization = async ({loan, periods, interest}) => {
        const {AxiosInstance} = UseAxios();
        try {
            const response = await AxiosInstance.get(`/api/amortization?loan=${loan}&periods=${periods}&interest=${interest}`);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }

    return {getAmortization}
}