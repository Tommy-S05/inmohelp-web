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
    Link, Divider
} from "@nextui-org/react";
import {UserIcon, EnvelopeIcon, AtSymbolIcon, PhoneIcon, LockClosedIcon} from "@heroicons/react/24/outline";
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/solid";
import {useMemo, useState} from "react";
import {useForm} from "react-hook-form";

import UseAxios from "@/libs/axios";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";


export default function RegisterModal({
                                          isOpenRegister,
                                          onOpenRegister,
                                          onOpenChangeRegister,
                                          onOpenLogin,
                                          onOpenStepper
                                      }) {
    const [email, setEmail] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] = useState(false);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const {register, handleSubmit, setValue, getValues} = useForm();
    const router = useRouter();
    
    const {AxiosInstance} = UseAxios();
    const toggleVisibilityPassword = () => setIsPasswordVisible(!isPasswordVisible);
    const toggleVisibilityPasswordConfirm = () => setIsPasswordConfirmVisible(!isPasswordConfirmVisible);
    const validateEmail = (email) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    
    const validationStateEmail = useMemo(() => {
        if(email === "") return undefined;
        
        return validateEmail(email) ? "valid" : "invalid";
    }, [email]);
    
    /*
    const handleRegister = async (onClose) => {
        setLoading(true);
        await AxiosInstance.get("/sanctum/csrf-cookie");

        setError([]);
        const data = {
            name: name,
            email: email,
            username: username,
            phone_number: phoneNumber,
            password: password,
            password_confirmation: passwordConfirmation,
        }

        // try {
        await AxiosInstance.post('/api/register', data)
            .then((response) => {
                signIn("credentials", {
                    email,
                    password,
                    redirect: false,
                    // callbackUrl: "/",
                })
                    .then((response) => {
                        onClose()
                        router.push("/profile")
                        router.refresh()
                    })
                // router.push("/profile")
            })
            .catch((errors) => {
                if (errors.response.status === 422) {
                    const errors = errors.response.data.errors;
                    const errorArray = [];
                    for (const key in errors) {
                        errorArray.push(errors[key][0]);
                    }
                    setError(errorArray);
                }
            })
            .finally(() => setLoading(false));

        // } catch (errors) {
        //     // console.log(errors.response);
        //     if (errors.response.status === 422) {
        //         const errors = errors.response.data.errors;
        //         const errorArray = [];
        //         for (const key in errors) {
        //             errorArray.push(errors[key][0]);
        //         }
        //         setError(errorArray);
        //     }
        // }
    }*/
    
    const onRegister = async(data, onClose) => {
        setLoading(true);
        await AxiosInstance.get("/sanctum/csrf-cookie");
        
        await AxiosInstance.post('/api/register', data).then((response) => {
            signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
                // callbackUrl: "/",
            }).then((response) => {
                onOpenStepper();
                onClose()
                setErrors([]);
                setLoading(false)
            }).finally(() => setLoading(false));
        }).catch((error) => {
            if(error.response.status === 422) {
                console.log(error.response);
                const errors = error.response.data.errors;
                const errorObject = {};
                
                for(const key in errors) {
                    errorObject[key] = errors[key];
                }
                setErrors(errorObject);
            }
            setLoading(false)
        });
    }
    
    
    return (
        <Modal
            isOpen={isOpenRegister}
            onOpenChange={onOpenChangeRegister}
            placement={"center"}
            scrollBehavior={"outside"}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className={"text-2xl uppercase"}>
                            Registrate
                        </ModalHeader>
                        <Divider className={'my-2'}/>
                        <form onSubmit={handleSubmit((data) => onRegister(data, onClose))}>
                            <ModalBody className={'space-y-2'}>
                                <Input
                                    {...register("name", {required: true})}
                                    isRequired={true}
                                    isDisabled={loading}
                                    isClearable={true}
                                    startContent={
                                        <UserIcon
                                            className={"w-4 h-4 text-secondary pointer-events-none flex-shrink-0"}/>
                                    }
                                    classNames={{
                                        label: 'text-default-600 text-sm xxs:text-base',
                                    }}
                                    label={"Nombre completo"}
                                    labelPlacement={'outside'}
                                    variant={"bordered"}
                                    type={"text"}
                                />
                                
                                
                                <Input
                                    {...register("email", {required: true})}
                                    type={"email"}
                                    label={"Correo electrónico"}
                                    labelPlacement={'outside'}
                                    isRequired={true}
                                    isDisabled={loading}
                                    isClearable={true}
                                    startContent={
                                        <EnvelopeIcon
                                            className={"w-4 h-4 text-secondary pointer-events-none flex-shrink-0"}/>
                                    }
                                    classNames={{
                                        label: 'text-default-600 text-sm xxs:text-base',
                                    }}
                                    variant={"bordered"}
                                    isInvalid={!!errors?.email || validationStateEmail === "invalid"}
                                    
                                    color={validationStateEmail === "invalid" || errors?.email ?
                                        "danger" :
                                        validationStateEmail === "valid" ?
                                            "success" :
                                            "default"
                                    }
                                    errorMessage={
                                        validationStateEmail === "invalid" ?
                                            "Por favor introduzca un correo electrónico válido" :
                                            errors?.email ?
                                                errors?.email[0] :
                                                null
                                    }
                                    onValueChange={setEmail}
                                />
                                
                                <Input
                                    {...register("username")}
                                    type={"text"}
                                    label={"Usuario"}
                                    labelPlacement={'outside'}
                                    isDisabled={loading}
                                    isClearable={true}
                                    startContent={
                                        <AtSymbolIcon
                                            className={"w-4 h-4 text-secondary pointer-events-none flex-shrink-0"}/>
                                    }
                                    classNames={{
                                        label: 'text-default-600 text-sm xxs:text-base',
                                    }}
                                    variant={"bordered"}
                                    isInvalid={!!errors?.username}
                                    color={errors?.username ? "danger" : "default"}
                                    errorMessage={errors?.username ? errors?.username[0] : null}
                                />
                                
                                <Input
                                    {...register("phone_number")}
                                    type={"tel"}
                                    label={"Teléfono"}
                                    labelPlacement={'outside'}
                                    isDisabled={loading}
                                    isClearable={true}
                                    startContent={
                                        <PhoneIcon
                                            className={"w-4 h-4 text-secondary pointer-events-none flex-shrink-0"}/>
                                    }
                                    classNames={{
                                        label: 'text-default-600 text-sm xxs:text-base',
                                    }}
                                    variant={"bordered"}
                                    isInvalid={!!errors?.phone_number}
                                    color={errors?.phone_number ? "danger" : "default"}
                                    errorMessage={errors?.phone_number ? errors?.phone_number[0] : null}
                                />
                                
                                <Input
                                    {...register("password", {required: true})}
                                    type={isPasswordVisible ? "text" : "password"}
                                    label={"Contraseña"}
                                    labelPlacement={'outside'}
                                    isRequired={true}
                                    isDisabled={loading}
                                    startContent={
                                        <LockClosedIcon
                                            className={"w-4 h-4 text-secondary pointer-events-none flex-shrink-0"}/>
                                    }
                                    endContent={
                                        <button className={"focus:outline-none"} type={"button"}
                                                onClick={toggleVisibilityPassword}>
                                            {
                                                isPasswordVisible ? (
                                                    <EyeSlashIcon
                                                        className="w-6 h-6 text-default-400"/>
                                                ) : (
                                                    <EyeIcon
                                                        className="w-6 h-6 text-default-400"/>
                                                )
                                            }
                                        </button>
                                    }
                                    classNames={{
                                        label: 'text-default-600 text-sm xxs:text-base',
                                    }}
                                    variant={"bordered"}
                                    isInvalid={!!errors?.password}
                                    color={errors?.password ? "danger" : "default"}
                                    // errorMessage={errors?.password ? errors?.password[0] : null}
                                    errorMessage={
                                        errors?.password && errors?.password.length && (
                                            <>
                                                {
                                                    errors?.password.map((error, index) => (
                                                        <span key={index} className={'block'}>
                                                            {error}
                                                        </span>
                                                    ))
                                                }
                                            </>
                                        )
                                    }
                                />
                                
                                <Input
                                    {...register("password_confirmation", {required: true})}
                                    type={isPasswordConfirmVisible ? "text" : "password"}
                                    label={"Confirmar contraseña"}
                                    labelPlacement={'outside'}
                                    isRequired={true}
                                    isDisabled={loading}
                                    startContent={
                                        <LockClosedIcon
                                            className={"w-4 h-4 text-secondary pointer-events-none flex-shrink-0"}/>
                                    }
                                    endContent={
                                        <button className={"focus:outline-none"} type={"button"}
                                                onClick={toggleVisibilityPasswordConfirm}>
                                            {
                                                isPasswordConfirmVisible ? (
                                                    <EyeSlashIcon
                                                        className="w-6 h-6 text-default-400"/>
                                                ) : (
                                                    <EyeIcon
                                                        className="w-6 h-6 text-default-400"/>
                                                )
                                            }
                                        </button>
                                    }
                                    classNames={{
                                        label: 'text-default-600 text-sm xxs:text-base',
                                    }}
                                    variant={"bordered"}
                                    isInvalid={!!errors?.password}
                                    color={errors?.password ? "danger" : "default"}
                                />
                            </ModalBody>
                            <ModalFooter
                                className={'flex flex-col justify-center items-center gap-2 w-full'}
                            >
                                <Button
                                    className={'px-20'}
                                    radius={'full'}
                                    type={"submit"}
                                    variant={"solid"}
                                    color={"primary"}
                                    isLoading={loading}
                                >
                                    Registrarse
                                </Button>
                                <Divider className={'my-2'}/>
                                <div
                                    className={'flex flex-col xxs:flex-row justify-center items-center xxs:space-x-1 w-full'}>
                                <span className={'text-sm xxs:text-base'}>
                                    ¿Ya tienes una cuenta?
                                </span>
                                    <Link
                                        className={'text-sm xxs:text-base cursor-pointer'}
                                        color={"secondary"}
                                        onPress={() => {
                                            onClose()
                                            onOpenLogin()
                                        }}
                                    >
                                        Inicia sesión
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
