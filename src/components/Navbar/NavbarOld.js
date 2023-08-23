import Image from "next/image";
import Link from "next/link";
import AvatarMenu from "@/components/Navbar/AvatarMenu";
import {BiMenuAltRight} from "react-icons/bi";
import HamburgerMenu from "@/components/Navbar/hamburguer-menu";

export default function NavbarOld() {
    return (
        <nav className={''}>
            <header
                // className={'flex flex-wrap w-full justify-between items-center p-16 md:p-8 sm:p-6'}
                className={'flex w-full justify-between items-center mx-auto p-4 px-3 lg:px-20 md:p-8 sm:p-6'}
            >
                {/*<div className={'flex items-center'}>*/}
                {/*    <Image src={''} alt={''}/>*/}
                {/*    <img src="/next.svg" alt="logo" className="w-8 h-8"/>*/}
                {/*    <h1 className="text-2xl font-bold ml-2">Asta Blog</h1>*/}
                {/*</div>*/}
                <Link href={"/"} className="flex items-center">
                    <Image
                        width={'50'}
                        height={'50'}
                        priority={true}
                        src="/assets/logos/logo-black.png"
                        alt="Logo"
                    />
                    <h1 className="font-bold text-2xl title">InmoHelp</h1>
                </Link>
                <ul className={'hidden md:flex space-x-5 items-center md:[&>li]:px-1 [&>li]:font-bold [&>li]:py-2 md:[&>li]:text-sm [&>li>a]:transition-all [&>li>a]:duration-1000 lg:[&>li]:px-5 lg:[&>li]:text-md'}>
                    <li>
                        <Link href={"/properties"}>Propiedades</Link>
                    </li>
                    <li>
                        <Link href="/price-index">Indices de Precios</Link>
                    </li>
                    <li>
                        <Link href={"/contactus"}>Contactanos</Link>
                    </li>
                </ul>
                <Link
                    href={"/login"}
                    className="bg-primary p-3 text-white rounded-tl-xl rounded-br-xl hover:bg-primary/80 hidden sm:flex"
                >
                    Iniciar Sesión
                </Link>
                {/*<Avatar showFallback name={'Tommy'}/>*/}
                {/*<AvatarMenu name={'Tommy'} isBordered={true} email={'tommy-s05@hotmail.com'}/>*/}
            
            </header>
            {/*<div className="flex items-center">*/}
            {/*    <img src="/next.svg" alt="logo" className="w-8 h-8"/>*/}
            {/*    <h1 className="text-2xl font-bold ml-2">Asta Blog</h1>*/}
            {/*</div>*/}
            {/*<div className="flex items-center">*/}
            {/*    <button*/}
            {/*        className="bg-gray-200 dark:bg-black hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">*/}
            {/*        <svg className="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20">*/}
            {/*            <path*/}
            {/*                d="M10.707,14.707 C10.316,15.098 9.684,15.098 9.293,14.707 C8.902,14.316 8.902,13.684 9.293,13.293 L12.586,10 L9.293,6.707 C8.902,6.316 8.902,5.684 9.293,5.293 C9.684,4.902 10.316,4.902 10.707,5.293 L14.707,9.293 C15.098,9.684 15.098,10.316 14.707,10.707 L10.707,14.707 Z"/>*/}
            {/*        </svg>*/}
            {/*        <span>Back to Blog</span>*/}
            {/*    </button>*/}
            {/*</div>*/}
        </nav>
    )
}