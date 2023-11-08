'use client'
import {AiOutlineMore} from "react-icons/ai";
import Link from "next/link";
import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default function Sidebar({children, user}) {
    return (
        <aside className={'hidden lg:flex lg:flex-col max-w-[250px] h-full bg-[#EEEEEE] pt-5'}>
            <nav className={'h-full flex flex-col justify-between border-r shadow-sm'}>
                <ul className={'px-3'}>
                    {children}
                </ul>
                <div className={'border-t flex p-3'}>
                    <img
                        src={'https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true'}
                        alt={''}
                        className={'w-10 h-10 rounded-full'}
                    />
                    <div className={'flex justify-between items-center w-52 ml-3'}>
                        <div className={'leading-4'}>
                            <h4 className={'font-semibold'}>
                                {user.name}
                            </h4>
                            <span className={'text-xs text-gray-600'}>
                                {user.email}
                            </span>
                        </div>
                        <AiOutlineMore size={20}/>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export function SidebarItem({icon, title, active, href = '#'}) {
    const router = useRouter();
    const handleSignOut = async() => {
        await signOut({redirect: false}).then(() => {
            router.push('/');
        });
    };
    
    const handleClick = title === 'Cerrar sesión' ? handleSignOut : undefined;
    return (
        <Link href={href}>
            <li onClick={handleClick}
                className={`
                flex items-center py-2 px-3 my-1
                text-lg font-medium rounded-md cursor-pointer
                transition-colors
                ${active ?
                    'bg-gradient-to-tr from-secondary to-indigo-100 text-black' :
                    title === 'Cerrar sesión' ? 'hover:bg-danger-100 hover:text-danger text-gray-600' :
                        'hover:bg-secondary/20 text-gray-600'}
                `}
            >
                {icon}
                <span className={'w-52 ml-3'}>
                {title}
            </span>
            </li>
        </Link>
    )
    // return (
    //     <li className={`flex items-center mb-3 px-3 py-2 rounded-md cursor-pointer ${active && 'bg-gray-100'}`}>
    //         {icon}
    //         <span className={'ml-2 text-sm font-semibold'}>
    //             {title}
    //         </span>
    //     </li>
    // )
}