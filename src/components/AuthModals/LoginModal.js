'use client'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    // Checkbox,
    Input,
    Link
} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/checkbox";

import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/24/solid";
import {useForm} from "react-hook-form";
import {useMemo, useState} from "react";
import {signIn} from "next-auth/react";

export default function LoginModal() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validateEmail = (email) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const validationState = useMemo(() => {
        if (email === "") return undefined;

        return validateEmail(email) ? "valid" : "invalid";
    }, [email]);

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
    } = useForm();

    // const onSubmit = async (data) => {
    //     setLoading(true)
    //
    //     // await submitFinancialSettings(data, setLoading);
    //     console.log(data);
    //     setLoading(false)
    // }

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        // console.log(e.target.email.value, e.target.password.value, e.target.remember_me.checked);
        // console.log(email, password)
        // await submitFinancialSettings(data, setLoading);
        // console.log(data);

        await signIn('credentials', {
            email,
            password,
            redirect: true,
            callbackUrl: '/'
        })
        setLoading(false)
    }

    return (
        <>
            <Button onPress={onOpen} color="primary" variant={"light"}>Login</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Iniciar sesión</ModalHeader>
                            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
                            <form onSubmit={onSubmit}>
                                <ModalBody>
                                    <Input
                                        {...register("email", {required: true})}
                                        isRequired={true}
                                        isDisabled={loading}
                                        autoFocus
                                        endContent={
                                            <EnvelopeIcon
                                                className="w-6 h-6 text-default-400 pointer-events-none flex-shrink-0"/>
                                        }
                                        label="Email"
                                        placeholder="Enter your email"
                                        variant="bordered"
                                        type={"email"}
                                        color={validationState === "invalid" ? "danger" : "success"}
                                        errorMessage={validationState === "invalid" && "Please enter a valid email"}
                                        validationState={validationState}
                                        value={email}
                                        onValueChange={setEmail}
                                    />
                                    <Input
                                        {...register("password", {required: true})}
                                        isRequired={true}
                                        isDisabled={loading}
                                        endContent={
                                            <LockClosedIcon
                                                className="w-6 h-6 text-default-400 pointer-events-none flex-shrink-0"/>
                                        }
                                        label="Password"
                                        placeholder="Enter your password"
                                        type="password"
                                        variant="bordered"
                                        value={password}
                                        onValueChange={setPassword}
                                    />
                                    <div className="flex py-2 px-1 justify-between">
                                        <Checkbox
                                            type={"checkbox"}
                                            {...register("remember_me")}
                                            // defaultSelected={true}
                                            classNames={{
                                                label: "text-small",
                                            }}
                                        >
                                            Remember me
                                        </Checkbox>
                                        {/*<input type={"checkbox"} {...register("remember_me")}/>*/}
                                        <Link color="primary" href="#" size="sm">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button type={"button"} color="danger" variant="flat" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button type={"submit"} color="primary">
                                        Sign in
                                    </Button>
                                </ModalFooter>
                            </form>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
