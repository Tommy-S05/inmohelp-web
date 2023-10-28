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
    Link, Divider,
} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/checkbox";

import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/24/outline";
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/solid";
import {useForm} from "react-hook-form";
import {useMemo, useState} from "react";
import {signIn} from "next-auth/react";
import UseAxios from "@/libs/axios";
import {useRouter} from "next/navigation";

export default function LoginModal({isOpenLogin, onOpenLogin, onOpenChangeLogin, onOpenRegister}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const {register, handleSubmit, setValue, getValues} = useForm();
    
    const toggleVisibility = () => setIsVisible(!isVisible);
    const validateEmail = (email) =>
        email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    
    const validationState = useMemo(() => {
        if(email === "") return undefined;
        
        return validateEmail(email) ? "valid" : "invalid";
    }, [email]);
    
    // const {isOpen, onOpen, onOpenChange} = useDisclosure();
    
    const handlerLogin = async({email, password}, onClose) => {
        
        await signIn("credentials", {
            email,
            password,
            redirect: false,
            // callbackUrl: "/",
        })
            .then((response) => {
                onClose();
                // router.refresh()
            })
            .catch((error) => {
                console.log(error);
                // setError(Object.values(errors.response.data.errors));
                // console.log(errors.response);
            });
    };
    
    const onSubmit = async(e, onClose) => {
        e.preventDefault();
        setLoading(true);
        // console.log(e.target.email.value, e.target.password.value, e.target.remember_me.checked);
        // console.log(email, password)
        // await submitFinancialSettings(data, setLoading);
        // console.log(data);
        await handlerLogin({email, password}, onClose)
            .finally(() => setLoading(false));
        
        // const { AxiosInstance } = UseAxios();
        
        // await AxiosInstance.get("/sanctum/csrf-cookie");
        
        // const response = await AxiosInstance.post("/api/login", {
        //   email: email,
        //   password: password,
        // })
        //   .then((response) => response.data)
        //   .catch((errors) => {
        //     // alert("errors");
        //     // setError(errors.response.data.errors);
        //     setError(Object.values(errors.response.data.errors));
        //     console.log(errors.response);
        //   })
        //   .finally(() => setLoading(false));
        
        // const user = await response;
        // setLoading(false);
        // return user;
    };
    
    return (
        <Modal
            isOpen={isOpenLogin}
            onOpenChange={onOpenChangeLogin}
            placement={"center"}
            scrollBehavior={"outside"}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className={"text-2xl uppercase"}>
                            Iniciar sesión
                        </ModalHeader>
                        <Divider className={'my-2'}/>
                        {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
                        <form onSubmit={(e) => onSubmit(e, onClose)}>
                            <ModalBody className={'space-y-2'}>
                                {/*{*/}
                                {/*    errors.length > 0 && (*/}
                                {/*        <div>*/}
                                {/*            <div className={"text-red-700 font-bold"}>Errors!</div>*/}
                                {/*            /!*<ul className={'mt-2 text-red-700 text-sm'}>*!/*/}
                                
                                {/*            /!*</ul>*!/*/}
                                {/*            <ul className={"list-disc list-inside"}>*/}
                                {/*                {errors.map((error, index) => (*/}
                                {/*                    <li key={index}>{error}</li>*/}
                                {/*                ))}*/}
                                {/*            </ul>*/}
                                {/*        </div>*/}
                                {/*    )*/}
                                {/*}*/}
                                
                                <Input
                                    {...register("email", {required: true})}
                                    isRequired={true}
                                    isDisabled={loading}
                                    autoFocus
                                    isClearable={true}
                                    startContent={
                                        <EnvelopeIcon
                                            className={"w-4 h-4 text-secondary pointer-events-none flex-shrink-0"}/>
                                    }
                                    classNames={{
                                        label: 'text-default-600 text-sm xxs:text-base',
                                    }}
                                    label={"Correo electrónico"}
                                    labelPlacement={'outside'}
                                    // placeholder={" "}
                                    variant={"bordered"}
                                    type={"email"}
                                    color={validationState === "invalid" ? "danger" : validationState === "valid" ? "success" : "default"}
                                    errorMessage={
                                        validationState === "invalid" &&
                                        "Por favor introduzca un correo electrónico válido"
                                    }
                                    validationState={validationState}
                                    value={email}
                                    onValueChange={setEmail}
                                />
                                
                                <Input
                                    {...register("password", {required: true})}
                                    isRequired={true}
                                    isDisabled={loading}
                                    startContent={
                                        <LockClosedIcon
                                            className={"w-4 h-4 text-secondary pointer-events-none flex-shrink-0"}/>
                                    }
                                    endContent={
                                        <button className={"focus:outline-none"} type={"button"}
                                                onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <EyeSlashIcon
                                                    className="w-6 h-6 text-default-400"/>
                                            ) : (
                                                <EyeIcon
                                                    className="w-6 h-6 text-default-400"/>
                                            )}
                                        </button>
                                    }
                                    classNames={{
                                        label: 'text-default-600 text-sm xxs:text-base',
                                    }}
                                    label={"Contraseña"}
                                    labelPlacement={'outside'}
                                    type={isVisible ? "text" : "password"}
                                    variant={"bordered"}
                                    value={password}
                                    onValueChange={setPassword}
                                />
                                <div
                                    className={'flex flex-col justify-center items-start space-y-2 xxs:flex-row xxs:space-y-0 xxs:justify-between xxs:py-2 xxs:px-1 xxs:items-center xxs:space-x-1 w-full'}>
                                    <Checkbox
                                        type={"checkbox"}
                                        {...register("remember_me")}
                                        // defaultSelected={true}
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Recuérdame
                                    </Checkbox>
                                    {/*<input type={"checkbox"} {...register("remember_me")}/>*/}
                                    <Link color={"primary"} href={"#"} size="sm">
                                        ¿Olvidaste tu contraseña?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter
                                className={'flex flex-col justify-center items-center w-full'}
                            >
                                <Button
                                    className={'px-20'}
                                    radius={'full'}
                                    type={"submit"}
                                    variant={"solid"}
                                    color={"primary"}
                                    isLoading={loading}
                                >
                                    Iniciar sesión
                                </Button>
                                <Divider className={'my-2'}/>
                                <div
                                    className={'flex flex-col xxs:flex-row justify-center items-center xxs:space-x-1 w-full'}>
                                    <span className={'text-sm xxs:text-base'}>
                                        ¿No tienes una cuenta?
                                    </span>
                                    <Link
                                        className={'text-sm xxs:text-base cursor-pointer'}
                                        color={"secondary"}
                                        // onPress={onOpen}
                                        onPress={() => {
                                            onClose()
                                            onOpenRegister()
                                        }}
                                    >
                                        Registrate
                                    </Link>
                                </div>
                            </ModalFooter>
                        </form>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
