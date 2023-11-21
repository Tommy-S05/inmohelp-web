import FinancesAccountForm from "@/components/FinancesAccountForm";


export default async function ProfileFinancesPage() {
    return (
        <section className={'flex flex-col w-full max-w-screen-2xl mx-auto py-5 xs:p-5 space-y-10'}>
            {/*<FinancesInformation account={account?.account}/>*/}
            <FinancesAccountForm/>
        </section>
    )
}