import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import FinancesAccountForm from "@/components/FinancesAccountForm";


export default async function ProfileFinancesPage() {
    const session = await getServerSession(authOptions)
    
    return (
        <section className={'w-full max-w-screen-2xl mx-auto p-5'}>
            <FinancesAccountForm session={session}/>
        </section>
    )
}