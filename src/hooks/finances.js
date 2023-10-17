import UseAxios from "@/libs/axios";

export default function useFinances() {
    const {AxiosInstance} = UseAxios();
    const csrf = () => AxiosInstance.get('/sanctum/csrf-cookie');
    const getFinancesCategories = async () => {
        try {
            const response = await AxiosInstance.get('/api/categories');
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }

    const getAccountTransactions = async ({user}) => {
        try {
            const response = await AxiosInstance.get('/api/account', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }

    const submitAccountTransactions = async ({...props}) => {
        try {
            await csrf();
            const response = await AxiosInstance.put('/api/account', {...props});
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }

    return {getFinancesCategories, getAccountTransactions, submitAccountTransactions};
}