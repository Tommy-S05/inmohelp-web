'use client'
import LoginModal from "@/components/AuthModals/LoginModal";
import {useDisclosure} from "@nextui-org/react";
import RegisterModal from "@/components/AuthModals/RegisterModal";
import {Button} from "@nextui-org/button";
import {useSession} from "next-auth/react";
import NextLink from "next/link";
import StepperModal from "@/components/StepperModal";

export default function HeroGetStarted() {
    const {data: session, status} = useSession();
    const {isOpen: isOpenLogin, onOpen: onOpenLogin, onOpenChange: onOpenChangeLogin} = useDisclosure();
    const {isOpen: isOpenRegister, onOpen: onOpenRegister, onOpenChange: onOpenChangeRegister} = useDisclosure();
    const {isOpen: isOpenStepper, onOpen: onOpenStepper, onOpenChange: onOpenChangeStepper} = useDisclosure();
    
    return (
        status === 'authenticated' ? (
            <>
                <StepperModal
                    isOpenStepper={isOpenStepper}
                    onOpenStepper={onOpenStepper}
                    onOpenChangeStepper={onOpenChangeStepper}
                    session={session}
                    status={status}
                />
                
                <Button
                    color={"primary"}
                    size={'lg'}
                    as={NextLink}
                    href={'/properties'}
                >
                    Empezar
                </Button>
            </>
        ) : status === 'unauthenticated' && (
            <>
                <Button
                    color={"primary"}
                    size={'lg'}
                    onPress={onOpenRegister}
                >
                    Crear cuenta
                </Button>
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
            </>
        )
    )
}