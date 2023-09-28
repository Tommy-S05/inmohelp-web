"use client";
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
    Link,
} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/checkbox";

import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/24/solid";
import {useForm} from "react-hook-form";
import {useMemo, useState} from "react";
import {signIn} from "next-auth/react";
import UseAxios from "@/libs/axios";

export default function LoginModal({isOpen, onOpen, onOpenChange}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState([]);
    const validateEmail = (email) =>
        email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const validationState = useMemo(() => {
        if (email === "") return undefined;

        return validateEmail(email) ? "valid" : "invalid";
    }, [email]);

    // const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [loading, setLoading] = useState(false);
    const {register, handleSubmit, setValue, getValues} = useForm();

    // const onSubmit = async (data) => {
    //     setLoading(true)
    //
    //     // await submitFinancialSettings(data, setLoading);
    //     console.log(data);
    //     setLoading(false)
    // }

    const handlerLogin = async ({email, password}) => {
        // alert("hola");
        await signIn("credentials", {
            email,
            password,
            redirect: false,
            // callbackUrl: "/",
        })
            .then((response) => console.log(response))
            .catch((error) => {
                console.log(error);
                // setError(Object.values(error.response.data.errors));
                // console.log(error.response);
            });
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // console.log(e.target.email.value, e.target.password.value, e.target.remember_me.checked);
        // console.log(email, password)
        // await submitFinancialSettings(data, setLoading);
        // console.log(data);
        await handlerLogin({email, password}).finally(() => setLoading(false));

        // const { AxiosInstance } = UseAxios();

        // await AxiosInstance.get("/sanctum/csrf-cookie");

        // const response = await AxiosInstance.post("/api/login", {
        //   email: email,
        //   password: password,
        // })
        //   .then((response) => response.data)
        //   .catch((error) => {
        //     // alert("error");
        //     // setError(error.response.data.errors);
        //     setError(Object.values(error.response.data.errors));
        //     console.log(error.response);
        //   })
        //   .finally(() => setLoading(false));

        // const user = await response;
        // setLoading(false);
        // return user;
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Iniciar sesión
                        </ModalHeader>
                        {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
                        <form onSubmit={onSubmit}>
                            <ModalBody>
                                {error.length > 0 && (
                                    <div>
                                        <div className={"text-red-700 font-bold"}>Errors!</div>
                                        {/*<ul className={'mt-2 text-red-700 text-sm'}>*/}

                                        {/*</ul>*/}
                                        <ul className={"list-disc list-inside"}>
                                            {error.map((error, index) => (
                                                <li key={index}>{error}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
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
                                    errorMessage={
                                        validationState === "invalid" &&
                                        "Please enter a valid email"
                                    }
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
                                <Button
                                    type={"button"}
                                    color="danger"
                                    variant="flat"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button type={"submit"} color="primary" isLoading={loading}>
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </form>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
