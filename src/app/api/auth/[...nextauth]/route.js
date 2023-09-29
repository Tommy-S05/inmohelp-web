import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import UseAxios from "@/libs/axios";

export const authOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                const {AxiosInstance} = UseAxios();

                // await AxiosInstance.get("/sanctum/csrf-cookie");
                //
                // const response = await AxiosInstance.post("/api/login", {
                //   email: credentials.email,
                //   password: credentials.password,
                // })
                //   .then((response) => response.data)
                //   .catch((error) => error);
                //
                // const user = await response;
                // return user;

                try {
                    await AxiosInstance.get("/sanctum/csrf-cookie");

                    const response = await AxiosInstance.post("/api/login", {
                        email: credentials.email,
                        password: credentials.password,
                    })
                    //     .then((response) => response.data)
                    //     .catch((error) => error.response);
                    //
                    // if (response.status !== 200) {
                    //     throw new Error(response.data)
                    // }

                    const user = await response.data;

                    return user
                } catch (err) {
                    throw new Error(err.response.data)
                }
            },
        }),
    ],
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user};
        },
        async session({session, token}) {
            session.user = token;
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    //   pages: {
    // signIn: "/auth/login",
    // error: '/auth/login'
    //   },
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
/*
export const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                const {AxiosInstance} = UseAxios();
                // // const csrf = () => AxiosInstance.get('/sanctum/csrf-cookie');
                // await AxiosInstance.get('/sanctum/csrf-cookie');
                //
                // // const login = async ({email, password}) => {
                // //     await csrf();
                // //     await AxiosInstance.post('/api/login', {
                // //         email: email,
                // //         password: password
                // //     })
                // //         .then(response => {
                // //         })
                // //         .catch(error => {
                // //             console.log(error, "error");
                // //         });
                // // }
                //
                // const response = await AxiosInstance.post('/api/login', {
                //     email: credentials.email,
                //     password: credentials.password
                // });
                //
                // const user = await response.data;
                //
                // if (response.ok && user) {
                //     return user
                // } else {
                //     return null
                // }

                // await AxiosInstance.get('/sanctum/csrf-cookie');
                //
                // try {
                //     const response = await AxiosInstance.post('/api/login', {
                //         email: credentials.email,
                //         password: credentials.password
                //     });
                //
                //     if (!response.ok) {
                //         throw new Error(response)
                //         // return null
                //     }
                //
                //     const user = await response.data;
                //
                //     return user
                // } catch (err) {
                //     throw new Error(err)
                // }

                await AxiosInstance.get('/sanctum/csrf-cookie');

                const response = await AxiosInstance.post('/api/login', {
                    email: credentials.email,
                    password: credentials.password
                }).then(response => response.data);

                const user = await response;
                return user

                // try {
                //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
                //         method: 'POST',
                //         headers: {
                //             'Content-Type': 'application/json',
                //             'Accept': 'application/json'
                //         },
                //         body: JSON.stringify({
                //             email: credentials.email,
                //             password: credentials.password
                //         })
                //     })
                //
                //     if (!res.ok) {
                //         throw new Error('Wrong Credentials!')
                //         // return null
                //     }
                //
                //     const user = await res.json()
                //
                //     return user
                // } catch (err) {
                //     throw new Error(err)
                // }

            },
        }),
    ],
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user}
        },
        async session({session, token}) {
            session.user = token;
            return session;
        }
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/login',
        error: '/auth/login'
    }
    // pages: {
    //     error: "/",
    // },
});
*/

// export { handler as GET, handler as POST };
