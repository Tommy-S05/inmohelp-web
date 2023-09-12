import UseAxios from "@/libs/axios";

export default function useProperties() {
    const {AxiosInstance} = UseAxios();
    const propertiesOutstanding = async () => {
        try {
            const response = await AxiosInstance.get('/api/properties/outstanding');
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }

    return {propertiesOutstanding}
}