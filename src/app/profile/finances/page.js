import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import FinancesAccountForm from "@/components/FinancesAccountForm";
import useFinances from "@/hooks/finances";
import FinancesInformation from "@/components/FinancesInformation";


export default async function ProfileFinancesPage() {
    const session = await getServerSession(authOptions)
    const {getAccountTransactions} = useFinances();
    const account = await getAccountTransactions({user: session?.user})
    
    return (
        <section className={'flex flex-col w-full max-w-screen-2xl mx-auto py-5 xs:p-5 space-y-10'}>
            <FinancesInformation account={account?.account}/>
            <FinancesAccountForm user={session?.user}/>
        </section>
    )
}