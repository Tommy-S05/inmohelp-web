'use client'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Checkbox,
    Input,
    Link
} from "@nextui-org/react";

import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/24/solid";

export default function RegisterModal({isOpen, onOpen, onOpenChange}) {
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="center"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Registrate</ModalHeader>
                        <ModalBody>
                            <Input
                                autoFocus
                                endContent={
                                    <EnvelopeIcon
                                        className="w-6 h-6 text-default-400 pointer-events-none flex-shrink-0"
                                    />
                                }
                                label="Email"
                                placeholder="Enter your email"
                                variant="bordered"
                            />
                            <Input
                                endContent={
                                    <LockClosedIcon
                                        className="w-6 h-6 text-default-400 pointer-events-none flex-shrink-0"/>
                                }
                                label="Password"
                                placeholder="Enter your password"
                                type="password"
                                variant="bordered"
                            />
                            <div className="flex py-2 px-1 justify-between">
                                <Checkbox
                                    classNames={{
                                        label: "text-small",
                                    }}
                                >
                                    Remember me
                                </Checkbox>
                                <Link color="primary" href="#" size="sm">
                                    Forgot password?
                                </Link>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Sign in
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
