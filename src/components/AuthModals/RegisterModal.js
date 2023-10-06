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


export default function RegisterModal({isOpenRegister, onOpenRegister, onOpenChangeRegister, onOpenLogin}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] = useState(false);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);
    const {register, handleSubmit, setValue, getValues} = useForm();
    
    const {AxiosInstance} = UseAxios();
    const toggleVisibilityPassword = () => setIsPasswordVisible(!isPasswordVisible);
    const toggleVisibilityPasswordConfirm = () => setIsPasswordConfirmVisible(!isPasswordConfirmVisible);
    const validateEmail = (email) =>
        email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    
    const validationState = useMemo(() => {
        if(email === "") return undefined;
        
        return validateEmail(email) ? "valid" : "invalid";
    }, [email]);
    
    const handleRegister = async() => {
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
        
        try {
            const response = await AxiosInstance.post('/api/register', data);
            // console.log(response);
        } catch (error) {
            // console.log(error.response);
            if(error.response.status === 422) {
                const errors = error.response.data.errors;
                const errorArray = [];
                for(const key in errors) {
                    errorArray.push(errors[key][0]);
                }
                setError(errorArray);
            }
        }
    }
    
    const onSubmit = async(e) => {
        e.preventDefault();
        await handleRegister();
    }
    
    
    return (
        <Modal
            isOpen={isOpenRegister}
            onOpenChange={onOpenChangeRegister}
            placement="center"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className={"text-2xl uppercase"}>
                            Registrate
                        </ModalHeader>
                        <Divider className={'my-2'}/>
                        <form onSubmit={onSubmit}>
                            <ModalBody className={'space-y-2'}>
                                {
                                    error.length > 0 && (
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
                                    )
                                }
                                
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
                                    value={name}
                                    onValueChange={setName}
                                />
                                
                                <Input
                                    {...register("email", {required: true})}
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
                                    label={"Correo electrónico"}
                                    labelPlacement={'outside'}
                                    variant={"bordered"}
                                    type={"email"}
                                    color={validationState === "invalid" ? "danger" : validationState === "valid" ? "success" : "default"}
                                    errorMessage={
                                        validationState === "invalid" &&
                                        "Por favor introduzca una correo electrónico válido"
                                    }
                                    validationState={validationState}
                                    value={email}
                                    onValueChange={setEmail}
                                />
                                
                                <Input
                                    {...register("username")}
                                    isDisabled={loading}
                                    isClearable={true}
                                    startContent={
                                        <AtSymbolIcon
                                            className={"w-4 h-4 text-secondary pointer-events-none flex-shrink-0"}/>
                                    }
                                    classNames={{
                                        label: 'text-default-600 text-sm xxs:text-base',
                                    }}
                                    label={"Usuario"}
                                    labelPlacement={'outside'}
                                    variant={"bordered"}
                                    type={"text"}
                                    value={username}
                                    onValueChange={setUsername}
                                />
                                
                                <Input
                                    {...register("phone_number")}
                                    isDisabled={loading}
                                    isClearable={true}
                                    startContent={
                                        <PhoneIcon
                                            className={"w-4 h-4 text-secondary pointer-events-none flex-shrink-0"}/>
                                    }
                                    classNames={{
                                        label: 'text-default-600 text-sm xxs:text-base',
                                    }}
                                    label={"Teléfono"}
                                    labelPlacement={'outside'}
                                    variant={"bordered"}
                                    type={"tel"}
                                    value={phoneNumber}
                                    onValueChange={setPhoneNumber}
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
                                    label={"Contraseña"}
                                    labelPlacement={'outside'}
                                    type={isPasswordVisible ? "text" : "password"}
                                    variant={"bordered"}
                                    value={password}
                                    onValueChange={setPassword}
                                />
                                
                                <Input
                                    {...register("password_confirmation", {required: true})}
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
                                    label={"Confirmar contraseña"}
                                    labelPlacement={'outside'}
                                    type={isPasswordConfirmVisible ? "text" : "password"}
                                    variant={"bordered"}
                                    value={passwordConfirmation}
                                    onValueChange={setPasswordConfirmation}
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
