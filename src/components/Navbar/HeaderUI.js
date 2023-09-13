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
import { AcmeLogo } from "../AcmeLogo.jsx";
import { useState } from "react";
import Image from "next/image";
import AvatarMenu from "@/components/Navbar/AvatarMenu";
import RegisterModal from "@/components/AuthModals/RegisterModal";
import LoginModal from "@/components/AuthModals/LoginModal";
import { signOut } from "next-auth/react";

export default function HeaderUI({ session }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
        <NavbarItem>
          <Link
            as={NextLink}
            color="foreground"
            href={"#"}
            className={"text-sm md:text-lg"}
          >
            Propiedades
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            as={NextLink}
            href={"#"}
            aria-current="page"
            className={"text-sm md:text-lg"}
          >
            Indices de Precios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            as={NextLink}
            color="foreground"
            href={"#"}
            className={"text-sm md:text-lg"}
          >
            Contactanos
          </Link>
        </NavbarItem>
      </NavbarContent>

      {session?.user ? (
        <NavbarContent justify="end">
          <NavbarItem>
            <AvatarMenu
              name={session?.user.name}
              isBordered={true}
              email={session?.user.email}
            />
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          {/*<NavbarItem className={"hidden lg:flex"}>*/}
          {/*    /!*<Button as={NextLink} color="primary" href="/auth/login" variant="light">*!/*/}
          {/*    /!*    Login*!/*/}
          {/*    /!*</Button>*!/*/}
          {/*    <LoginModal/>*/}
          {/*</NavbarItem>*/}
          <NavbarItem className={"hidden xxs:flex"}>
            <Button onPress={onOpen} color="primary" variant={"flat"}>
              Registrate
            </Button>
            <LoginModal
              onOpenChange={onOpenChange}
              isOpen={isOpen}
              onOpen={onOpen}
            />

            {/*<Button as={NextLink} color="primary" href="/auth/login" variant="flat">*/}
            {/*    Registrate*/}
            {/*</Button>*/}
          </NavbarItem>
        </NavbarContent>
      )}

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
