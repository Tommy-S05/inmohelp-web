import axios from "axios";

export default function UseAxios() {
    // const router = useRouter();

    const AxiosInstance = axios.create({
        // baseURL: 'http://localhost:8000',
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        withCredentials: true
    });

    // AxiosInstance.interceptors.request.use(async function (config) {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         console.log(token, "token");
    //         config.headers.Authorization = `Bearer ${token}`;
    //     }
    //     console.log(config, "config");
    //     return config;
    // }, function (error) {
    //     console.log(error, "error");
    //     if (error?.response?.status === 401) {
    //         router.push('/login');
    //     }
    // });

    return {AxiosInstance};
}