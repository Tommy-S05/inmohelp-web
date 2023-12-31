'use client'
import {signIn, signOut, useSession} from "next-auth/react";

export default function _Header() {
    // const {data: session} = useSession();
    const {data: session} = useSession();
    console.log(session);
    return (
        <>
            <div className={'bg-gradient-to-b from-cyan-50 to-cyan-200 p-2 flex gap-5'}>
                <div className={'ml-auto flex gap-2'}>
                    {
                        session?.user ? (
                            <>
                                <p className={'text-sky-600'}>{session.user.data?.name}</p>
                                <button className={'text-red-500'} onClick={() => signOut()}>
                                    Sign out
                                </button>
                            </>
                        ) : (
                            <button className={'text-green-600'} onClick={() => signIn()}>
                                Sign in
                            </button>
                        )
                    }
                </div>
            </div>
        </>
    )
}