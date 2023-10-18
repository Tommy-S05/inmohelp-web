'use client'
import {Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link} from "@nextui-org/react";
import {signOut} from "next-auth/react";
import NextLink from "next/link";
import {useRouter} from "next/navigation";

export default function AvatarMenu({name, avatar, isBordered, email, color = 'primary', showFallback = true}) {
    const router = useRouter();
    const handleSignOut = async () => {
        await signOut({redirect: false}).then(() => {
            router.push('/');
            router.refresh();
        });
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
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={handleSignOut}>
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
