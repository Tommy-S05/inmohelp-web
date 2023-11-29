'use client'
import {Link as LinkUI} from "@nextui-org/link";
import Link from 'next/link'
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";
import {useSession, signOut} from "next-auth/react";
import {useRouter} from "next/navigation";
import UseAxios from "@/libs/axios";
import {useDisclosure} from "@nextui-org/react";
import LoginModal from "@/components/AuthModals/LoginModal";
import RegisterModal from "@/components/AuthModals/RegisterModal";
import StepperModal from "@/components/StepperModal";

export default function Footer() {
    const {data: session, status} = useSession();
    const {isOpen: isOpenLogin, onOpen: onOpenLogin, onOpenChange: onOpenChangeLogin} = useDisclosure();
    const {isOpen: isOpenRegister, onOpen: onOpenRegister, onOpenChange: onOpenChangeRegister} = useDisclosure();
    const {isOpen: isOpenStepper, onOpen: onOpenStepper, onOpenChange: onOpenChangeStepper} = useDisclosure();
    const {AxiosInstance} = UseAxios();
    const router = useRouter();
    const handleSignOut = async() => {
        try {
            await signOut({redirect: false});
            await AxiosInstance.post('/api/logout', null, {
                headers: {
                    'Authorization': `Bearer ${session?.user.token}`
                }
            })
            router.push('/')
        } catch (e) {
            console.log(e);
        }
    }
    return (
        // <footer className={"absolute bottom-0 w-full p-4 bg-black sm:p-6 dark:bg-gray-800"}>
        <footer className={"p-4 bg-black sm:p-6 dark:bg-gray-800"}>
            <div className={"mx-auto max-w-screen-2xl"}>
                <div className={"md:flex md:justify-between gap-6"}>
                    <div className={"mb-6 md:mb-0 md:w-56"}>
                        <Link href={"/"} className="flex items-center">
                            <img
                                className={"w-24 h-24"}
                                src="/assets/logos/logo-white.png"
                                alt="Logo"
                            />
                            <span
                                className={
                                    "self-center text-2xl font-semibold whitespace-nowrap text-white"
                                }
                            >
                                InmoHelp
                            </span>
                        </Link>
                    </div>
                    <div className={"grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"}>
                        <div>
                            <h2 className={"mb-6 text-md font-semibold uppercase text-white"}>
                                Soporte
                            </h2>
                            <ul className={"text-white space-y-4"}>
                                <li>
                                    <Link href={"/contactus"} className={"hover:underline"}>
                                        Contactanos
                                    </Link>
                                </li>
                                {/*<li>*/}
                                {/*    <Link href="#" className={"hover:underline"}>*/}
                                {/*        Centro de Soporte*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                                <li><a href={'mailto:inmohelp@gmail.com'}>inmohelp@gmail.com</a></li>
                                <li><a href={'tel:8098522693'}>809-852-2693</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className={"mb-6 text-md font-semibold uppercase text-white"}>
                                Nuestros Servicios
                            </h2>
                            <ul className={"text-white space-y-4"}>
                                <li className="">
                                    <Link href="#" className={"hover:underline"}>
                                        Comprar
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="#" className={"hover:underline"}>
                                        Alquilar
                                    </Link>
                                </li>
                                {/*<li className="">*/}
                                {/*    <Link href="#" className={"hover:underline"}>*/}
                                {/*        Venta*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                                {
                                    session?.user && (
                                        <li className="">
                                            <Link href={"/price-index"} className={"hover:underline"}>
                                                Indices de Precio
                                            </Link>
                                        </li>
                                    )
                                }
                                <li className="">
                                    <Link
                                        href={"/amortization-table"}
                                        className={"hover:underline"}
                                    >
                                        Tabla de Amortización
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className={"mb-6 text-md font-semibold uppercase text-white"}>
                                Mi cuenta
                            </h2>
                            <ul className={"text-white space-y-4"}>
                                {
                                    session?.user ? (
                                        <>
                                            <StepperModal
                                                isOpenStepper={isOpenStepper}
                                                onOpenStepper={onOpenStepper}
                                                onOpenChangeStepper={onOpenChangeStepper}
                                                session={session}
                                                status={status}
                                            />
                                            <li>
                                                <Link href={"/profile"} className={"hover:underline"}>
                                                    Perfil
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={"/profile/financials"}
                                                    className={"hover:underline"}
                                                >
                                                    Información Financiera
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"#"} onClick={handleSignOut} className={"hover:underline"}>
                                                    Cerrar sesión
                                                </Link>
                                            </li>
                                        </>
                                    ) : (
                                        <li>
                                            {/*<a*/}
                                            {/*    href={'#'}*/}
                                            {/*    className={"hover:underline"}*/}
                                            {/*    onClick={onOpenLogin}*/}
                                            {/*>*/}
                                            {/*    Iniciar sesión*/}
                                            {/*</a>*/}
                                            <LinkUI
                                                href={'#'}
                                                className={"hover:underline text-white"}
                                                onPress={onOpenLogin}
                                            >
                                                Iniciar sesión
                                            </LinkUI>
                                            <LoginModal
                                                isOpenLogin={isOpenLogin}
                                                onOpenLogin={onOpenLogin}
                                                onOpenChangeLogin={onOpenChangeLogin}
                                                onOpenRegister={onOpenRegister}
                                            />
                                            <RegisterModal
                                                isOpenRegister={isOpenRegister}
                                                onOpenRegister={onOpenRegister}
                                                onOpenChangeRegister={onOpenChangeRegister}
                                                onOpenLogin={onOpenLogin}
                                                onOpenStepper={onOpenStepper}
                                            />
                                        </li>
                                    )
                                }
                                
                                
                                {/*{*/}
                                {/*    token ? (*/}
                                {/*        <>*/}
                                {/*            <li className="">*/}
                                {/*                <Link href={'/profile'} className="hover:underline">Perfil</Link>*/}
                                {/*            </li>*/}
                                {/*            <li className="">*/}
                                {/*                <Link href={'/profile/financials'} className="hover:underline">Información*/}
                                {/*                    Financiera</Link>*/}
                                {/*            </li>*/}
                                {/*            <li className="">*/}
                                {/*                <a href="#" className="hover:underline">Lista de Favoritos</a>*/}
                                {/*            </li>*/}
                                {/*        </>*/}
                                {/*    ) : (*/}
                                {/*        <li className="">*/}
                                {/*            <Link href={'/login'} className="hover:underline">Iniciar sesión</Link>*/}
                                {/*        </li>*/}
                                {/*    )*/}
                                {/*}*/}
                            </ul>
                        </div>
                    </div>
                </div>
                <hr
                    className={
                        "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
                    }
                />
                <div className={"sm:flex sm:items-center sm:justify-between"}>
          <span
              className={
                  "text-sm text-gray-500 sm:text-center dark:text-gray-400"
              }
          >
            © 2023{" "}
              <Link href="/" className={"hover:underline"}>
              InmoHelp™
            </Link>
            . All Rights Reserved.
          </span>
                    <div className={"flex mt-4 space-x-6 sm:justify-center sm:mt-0"}>
                        <Link href="#" className={"text-gray-500 hover:text-white"}>
                            <FaFacebook/>
                        </Link>
                        <Link href="#" className={"text-gray-500 hover:text-white"}>
                            <FaInstagram/>
                        </Link>
                        <Link href="#" className={"text-gray-500 hover:text-white"}>
                            <FaTwitter/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
