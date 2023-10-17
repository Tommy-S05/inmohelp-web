import useFinances from "@/hooks/finances";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import FinancesAccordion from "@/components/FinancesAccordion";


export default async function ProfileFinancesPage() {
    const session = await getServerSession(authOptions)
    const {getFinancesCategories, getAccountTransactions} = useFinances();

    const financesCategories = await getFinancesCategories();
    const accountTransactions = await getAccountTransactions({user: session?.user});

    return (
        <section className={'w-full max-w-screen-2xl mx-auto'}>
            <FinancesAccordion financesCategories={financesCategories} accountTransactions={accountTransactions}/>
        </section>
    )
}