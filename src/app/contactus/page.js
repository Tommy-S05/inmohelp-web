import HeroPages from "@/components/Heros/HeroPages";
import Contactus from "@/components/Contactus/Contactus";

export default function ContactusPage() {
    const breadcrumb = [
        {
            name: 'Contáctanos',
            href: '/contactus'
        },
    ];
    
    return (
        <main className={'space-y-5 pb-5'}>
            <HeroPages
                title={'Contáctanos'}
                breadcrumb={breadcrumb}
                height={400}
            />
            <section
                className={'w-full max-w-screen-2xl mx-auto flex justify-center items-center px-2 sm:px-5 md:px-10'}>
                <Contactus/>
            </section>
        </main>
    )
}