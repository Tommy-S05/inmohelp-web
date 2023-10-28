import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
import HeroPages from "@/components/Heros/HeroPages";
import FilterProperties from "@/components/FilterProperties";
import useProperties from "@/hooks/properties";
import ListProperties from "@/components/ListProperties";
import HeroHome from "@/components/Heros/HeroHome";
import PropertiesComponent from "@/components/PropertiesComponent";


export default async function Properties() {
    const session = await getServerSession(authOptions)
    const {properties, propertiesAffordable} = useProperties();
    const data = session?.user ? await propertiesAffordable({user: session?.user}) : await properties();
    // const data = await propertiesAffordable({user: session?.user})
    
    const breadcrumb = [
        {
            name: 'Propiedades',
            href: '/properties'
        },
    ];
    
    return (
        <main className={'space-y-5 pb-5'}>
            <HeroPages breadcrumb={breadcrumb}/>
            
            <section className={'flex max-w-screen-2xl mx-auto lg:space-x-7 xl:space-x-10 px-10'}>
                <PropertiesComponent
                    session={session}
                    data={data}
                />
            </section>
        </main>
    )
}