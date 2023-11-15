'use client'
import {Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link} from "@nextui-org/react";
import {signOut} from "next-auth/react";
import NextLink from "next/link";
import {useRouter} from "next/navigation";
import UseAxios from "@/libs/axios";

export default function AvatarMenu({session, name, avatar, isBordered, email, color = 'primary', showFallback = true}) {
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
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    showFallback={showFallback}
                    isBordered={isBordered}
                    color={color}
                    as="button"
                    className="transition-transform"
                    name={name}
                    size="sm"
                    src={avatar}
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile-info" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{email}</p>
                </DropdownItem>
                <DropdownItem key={"profile"} as={NextLink} href={'/profile'}>
                    Perfil
                </DropdownItem>
                <DropdownItem key={"finances"} as={NextLink} href={'/profile/finances'}>
                    Finanzas
                </DropdownItem>
                {/*<DropdownItem key="settings">My Settings</DropdownItem>*/}
                {/*<DropdownItem key="team_settings">Team Settings</DropdownItem>*/}
                {/*<DropdownItem key="analytics">Analytics</DropdownItem>*/}
                {/*<DropdownItem key="system">System</DropdownItem>*/}
                {/*<DropdownItem key="configurations">Configurations</DropdownItem>*/}
                {/*<DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>*/}
                <DropdownItem key="logout" color="danger" onClick={handleSignOut}>
                    Cerrar sesión
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
