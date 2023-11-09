"use client";
import NextLink from "next/link";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    useDisclosure,
} from "@nextui-org/react";
import {useEffect, useState} from "react";
import Image from "next/image";
import AvatarMenu from "@/components/Navbar/AvatarMenu";
import RegisterModal from "@/components/AuthModals/RegisterModal";
import LoginModal from "@/components/AuthModals/LoginModal";
import {usePathname} from "next/navigation";
import StepperModal from "@/components/StepperModal";
import {useSession} from "next-auth/react";
import {CircularProgress} from "@nextui-org/progress";

export default function HeaderUI() {
    const {data: session, status} = useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {isOpen: isOpenLogin, onOpen: onOpenLogin, onOpenChange: onOpenChangeLogin} = useDisclosure();
    const {isOpen: isOpenRegister, onOpen: onOpenRegister, onOpenChange: onOpenChangeRegister} = useDisclosure();
    const {isOpen: isOpenStepper, onOpen: onOpenStepper, onOpenChange: onOpenChangeStepper} = useDisclosure();
    
    const pathname = usePathname();
    
    // Define las rutas correspondientes a los enlaces
    const routes = {
        "Propiedades": "/properties",
        "Indices de Precios": "/price-index",
        "Tabla de Amortizacion": "/amortization-table",
        // Contactanos: "/contactus",
    };
    
    // Función para verificar si un enlace debe estar activo
    const isLinkActive = (linkText) => {
        const currentRoute = routes[linkText];
        return pathname === currentRoute;
    };
    
    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log In",
        "Log Out",
    ];
    
    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            shouldHideOnScroll
            maxWidth={"2xl"}
            isBlurred={true}
            isBordered={true}
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-2",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-primary",
                ],
            }}
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link as={NextLink} href={"/"} className="flex items-center">
                        <Image
                            width={"40"}
                            height={"40"}
                            priority={true}
                            src="/assets/logos/logo-black.png"
                            alt="Logo"
                        />
                        <h1 className="font-bold text-sm md:text-xl lg:text-2xl title">
                            InmoHelp
                        </h1>
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={isLinkActive("Propiedades")}>
                    <Link
                        as={NextLink}
                        href={"/properties"}
                        color={isLinkActive("Propiedades") ? "primary" : "foreground"}
                        aria-current={isLinkActive("Propiedades") ? "page" : undefined}
                        className={"text-sm md:text-lg"}
                    >
                        Propiedades
                    </Link>
                </NavbarItem>
                {
                    status === 'authenticated' && (
                        <NavbarItem isActive={isLinkActive("Indices de Precios")}>
                            <Link
                                as={NextLink}
                                href={"/price-index"}
                                color={isLinkActive("Indices de Precios") ? "primary" : "foreground"}
                                aria-current={isLinkActive("Indices de Precios") ? "page" : undefined}
                                className={"text-sm md:text-lg"}
                            >
                                Indices de Precios
                            </Link>
                        </NavbarItem>
                    )
                }
                <NavbarItem isActive={isLinkActive("Tabla de Amortizacion")}>
                    <Link
                        as={NextLink}
                        href={"/amortization-table"}
                        color={isLinkActive("Tabla de Amortizacion") ? "primary" : "foreground"}
                        aria-current={isLinkActive("Tabla de Amortizacion") ? "page" : undefined}
                        className={"text-sm md:text-lg"}
                    >
                        Tabla de Amortizacion
                    </Link>
                </NavbarItem>
                
                {/*<NavbarItem isActive={isLinkActive("Contactanos")}>*/}
                {/*    <Link*/}
                {/*        as={NextLink}*/}
                {/*        href={"/contactus"}*/}
                {/*        color={isLinkActive("Contactanos") ? "primary" : "foreground"}*/}
                {/*        aria-current={isLinkActive("Contactanos") ? "page" : undefined}*/}
                {/*        className={"text-sm md:text-lg"}*/}
                {/*    >*/}
                {/*        Contactanos*/}
                {/*    </Link>*/}
                {/*</NavbarItem>*/}
            </NavbarContent>
            {
                status === "authenticated" ? (
                    session?.user && (
                        <>
                            <NavbarContent justify="end">
                                <NavbarItem>
                                    <AvatarMenu
                                        name={session?.user.name}
                                        isBordered={true}
                                        email={session?.user.email}
                                    />
                                </NavbarItem>
                                <NavbarItem>
                                    <Button
                                        onPress={onOpenStepper}
                                        color={"primary"}
                                        variant={"flat"}
                                    >
                                        Step
                                    </Button>
                                </NavbarItem>
                            </NavbarContent>
                            <StepperModal
                                isOpenStepper={isOpenStepper}
                                onOpenStepper={onOpenStepper}
                                onOpenChangeStepper={onOpenChangeStepper}
                                session={session}
                                status={status}
                            />
                        </>
                    )
                ) : status === "unauthenticated" ? (
                    <NavbarContent justify="end">
                        <NavbarItem className={"hidden xxxs:flex space-x-5"}>
                            <Link
                                className={'hidden xs:flex'}
                                href={'#'}
                                onPress={onOpenLogin}
                                color={"primary"}
                            >
                                Login
                            </Link>
                            <LoginModal
                                isOpenLogin={isOpenLogin}
                                onOpenLogin={onOpenLogin}
                                onOpenChangeLogin={onOpenChangeLogin}
                                onOpenRegister={onOpenRegister}
                            />
                            
                            <Button
                                onPress={onOpenRegister}
                                color={"primary"}
                                variant={"flat"}
                            >
                                Registrate
                            </Button>
                            <RegisterModal
                                isOpenRegister={isOpenRegister}
                                onOpenRegister={onOpenRegister}
                                onOpenChangeRegister={onOpenChangeRegister}
                                onOpenLogin={onOpenLogin}
                                onOpenStepper={onOpenStepper}
                            />
                            {/*<Button as={NextLink} color="primary" href="/auth/login" variant="flat">*/}
                            {/*    Registrate*/}
                            {/*</Button>*/}
                        </NavbarItem>
                    </NavbarContent>
                ) : (
                    <NavbarContent justify="end">
                        <NavbarItem>
                            <CircularProgress size="sm" aria-label="Loading..." color={"primary"}/>
                        </NavbarItem>
                    </NavbarContent>
                )
            }
            <NavbarMenu>
                {/*<NavbarMenuItem>*/}
                {/*    <Link*/}
                {/*        as={NextLink}*/}
                {/*        className="w-full"*/}
                {/*        href={"#"}*/}
                {/*        size="lg"*/}
                {/*        color={'foreground'}*/}
                {/*    >*/}
                {/*        Profile*/}
                {/*    </Link>*/}
                {/*</NavbarMenuItem>*/}
                {/*<NavbarMenuItem>*/}
                {/*    <Link*/}
                {/*        as={NextLink}*/}
                {/*        className="w-full"*/}
                {/*        href={"#"}*/}
                {/*        size="lg"*/}
                {/*        color={'foreground'}*/}
                {/*    >*/}
                {/*        Profile*/}
                {/*    </Link>*/}
                {/*</NavbarMenuItem>*/}
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        {session?.user
                            ? item !== "Log In" && (
                            <Link
                                as={NextLink}
                                color={item === "Log Out" ? "danger" : "foreground"}
                                className="w-full"
                                href={"#"}
                                size="lg"
                            >
                                {item}
                            </Link>
                        )
                            : item !== "Log Out" &&
                            item !== "Profile" && (
                                <Link
                                    as={NextLink}
                                    color={item === "Log In" ? "primary" : "foreground"}
                                    className="w-full"
                                    href={"#"}
                                    size="lg"
                                >
                                    {item}
                                </Link>
                            )}
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
