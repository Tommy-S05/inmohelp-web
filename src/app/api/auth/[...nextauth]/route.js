import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import UseAxios from "@/libs/axios";

export const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                const {AxiosInstance} = UseAxios();
                // const csrf = () => AxiosInstance.get('/sanctum/csrf-cookie');
                await AxiosInstance.get('/sanctum/csrf-cookie');

                // const login = async ({email, password}) => {
                //     await csrf();
                //     await AxiosInstance.post('/api/login', {
                //         email: email,
                //         password: password
                //     })
                //         .then(response => {
                //         })
                //         .catch(error => {
                //             console.log(error, "error");
                //         });
                // }

                const response = await AxiosInstance.post('/api/login', {
                    email: credentials.email,
                    password: credentials.password
                });

                const user = await response.data;

                if (response.ok && user) {
                    return user
                } else {
                    return null
                }

                //Check if the user exists.
                // await connect();
                //
                // try {
                //     const user = await User.findOne({
                //         email: credentials.email,
                //     });
                //
                //     if (user) {
                //         const isPasswordCorrect = await bcrypt.compare(
                //             credentials.password,
                //             user.password
                //         );
                //
                //         if (isPasswordCorrect) {
                //             return user;
                //         } else {
                //             throw new Error("Wrong Credentials!");
                //         }
                //     } else {
                //         throw new Error("User not found!");
                //     }
                // } catch (err) {
                //     throw new Error(err);
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
    // pages: {
    //     error: "/",
    // },
});

export {handler as GET, handler as POST};