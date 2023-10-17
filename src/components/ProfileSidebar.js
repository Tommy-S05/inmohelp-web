import Sidebar, {SidebarItem} from "@/components/Sidebar";
import {BiUserCircle} from "react-icons/bi";
import {HiCalculator} from "react-icons/hi";

export default function ProfileSidebar() {
    return (
        <Sidebar>
            <SidebarItem href={'/profile'} title={'Perfil'} icon={<BiUserCircle size={24}/>}/>
            <SidebarItem href={'/profile/finances'} title={'Finanzas'} icon={<HiCalculator size={24}/>}/>
        </Sidebar>
    )
}