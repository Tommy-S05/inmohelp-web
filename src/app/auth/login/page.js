'use client'
import {useEffect, useMemo, useState} from "react";
import {signIn} from "next-auth/react";
import {Button, Input} from "@nextui-org/react";
import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/24/solid";
import {useSearchParams} from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const params = useSearchParams();
    const [error, setError] = useState("");

    useEffect(() => {
        setError(params.get("error"));
    }, [params]);
    const validateEmail = (email) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const validationState = useMemo(() => {
        if (email === "") return undefined;

        return validateEmail(email) ? "valid" : "invalid";
    }, [email]);
    const onSubmit = async () => {
        const result = await signIn('credentials', {
            email: email,
            password: password,
            redirect: true,
            callbackUrl: '/'
        })
    };
    return (
        <main className={"flex min-h-screen items-center justify-center bg-gradient-to-br from-cyan-300 to-sky-600"}>
            <div className={'px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2'}>
                <Input
                    isRequired={true}
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
                    isRequired={true}
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
                <Button onClick={onSubmit} type={"button"} color="primary">
                    Sign in
                </Button>
                {error && error}
            </div>
        </main>
    )
}