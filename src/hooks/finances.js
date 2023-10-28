import UseAxios from "@/libs/axios";

export default function useFinances() {
    const {AxiosInstance} = UseAxios();
    const csrf = () => AxiosInstance.get('/sanctum/csrf-cookie');
    const getFinancesCategories = async() => {
        try {
            const response = await AxiosInstance.get('/api/categories');
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
    
    const getAccountTransactions = async({user}) => {
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
    
    // const submitAccountTransactions = async ({...props}) => {
    const submitAccountTransactions = async({user, data}) => {
        try {
            await csrf();
            // const response = await AxiosInstance.put('/api/account', {...props});
            const response = await AxiosInstance.put('/api/account', {
                data
            }, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
    
    const getLoanSetting = async({user}) => {
        try {
            const response = await AxiosInstance.get('/api/settings', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            return response.data
        } catch (e) {
            console.log(e);
        }
    }
    
    const submitLoanSettings = async({user, down_payment_available, interest_rate, loan_term}) => {
        try {
            await csrf();
            await AxiosInstance.put('/api/settings', {
                down_payment_available,
                interest_rate,
                loan_term
            }, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
        } catch (e) {
            console.log(e)
        }
    }
    
    return {
        getFinancesCategories,
        getAccountTransactions,
        submitAccountTransactions,
        getLoanSetting,
        submitLoanSettings
    };
}