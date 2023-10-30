import HeroPages from "@/components/Heros/HeroPages";
import Amortization from "@/components/Amortization/Amortization";

export default function AmortizationTablePage() {
    const breadcrumb = [
        {
            name: 'Tabla de amortización',
            href: '/amortization-table'
        },
    ];
    
    return (
        <main className={'space-y-5'}>
            <HeroPages
                title={'Tabla de amortización'}
                breadcrumb={breadcrumb}
                height={400}
            />
            <section className={'w-full max-w-screen-2xl mx-auto px-2 sm:px-5 md:px-10'}>
                <Amortization/>
            </section>
        </main>
    )
}