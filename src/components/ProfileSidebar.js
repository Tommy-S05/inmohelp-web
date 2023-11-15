import Sidebar, {SidebarItem} from "@/components/Sidebar";
import {BiUserCircle, BiLogOut} from "react-icons/bi";
import {HiCalculator} from "react-icons/hi";

export default async function ProfileSidebar() {
    return (
        <Sidebar>
            <SidebarItem href={'/profile'} title={'Perfil'} icon={<BiUserCircle size={24}/>}/>
            <SidebarItem href={'/profile/finances'} title={'Finanzas'} icon={<HiCalculator size={24}/>}/>
            {/*<SidebarItem href={'/profile/favorites'} title={'Favoritos'} icon={<AiFillHeart size={24}/>}/>*/}
            <SidebarItem title={'Cerrar sesión'} icon={<BiLogOut size={24}/>}/>
        </Sidebar>
    )
}