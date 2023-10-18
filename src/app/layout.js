import "./globals.css";
// import {Inter, Poppins, Roboto} from 'next/font/google'
import {Poppins} from "next/font/google";
import UIProvider from "@/providers/NextUIProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";

import AuthProvider from "@/providers/AuthProvider";
import NNavBar from "@/components/Navbar/_NavBar";

// const inter = Inter({subsets: ['latin']})
const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    // styles: ['regular', 'italic'],
    styles: ["normal"],
    subsets: ["latin"],
});

// const roboto = Roboto({
//     weight: ['300', '400', '500', '700'],
//     styles: ['regular', 'italic'],
//     subsets: ['latin']
// })

export const metadata = {
    title: "InmoHelp - Home",
    description: "Real Estate website landing page",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${poppins.className}`}>
        <UIProvider>
            <AuthProvider>
                <div className={'flex flex-col min-h-screen py-0'}>
                    <Navbar/>
                    {/*<NNavBar/>*/}
                    <div className={'flex-grow flex'}>
                        <div className={'flex-grow'}>
                            {children}
                        </div>
                    </div>
                    <Footer/>
                </div>
            </AuthProvider>
        </UIProvider>
        </body>
        </html>
    );
}
