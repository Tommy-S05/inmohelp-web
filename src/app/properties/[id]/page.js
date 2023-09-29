import useProperties from "@/hooks/properties";
import HeroPages from "@/components/Heros/HeroPages";
import PropertyGallery from "@/components/PropertyGallery";

export default async function Property({params}) {
    const {id} = params;
    const {propertyById} = useProperties();
    const property = await propertyById(id);

    const breadcrumb = [
        {
            name: 'Propiedades',
            href: '/properties'
        },
        {
            name: property.name,
            href: `/properties/${property.id}`
        }
    ];

    const images = [
        '/assets/real-estate/r1.jpeg',
        '/assets/real-estate/r2.jpeg',
        '/assets/real-estate/r3.jpeg',
        '/assets/real-estate/r4.jpeg',
        '/assets/real-estate/r5.jpeg',
        '/assets/real-estate/r6.jpeg',
        '/assets/real-estate/r7.png',
        '/assets/real-estate/r8.png',
        '/assets/real-estate/r9.png',
    ]

    return (
        <main className={'md:space-y-5'}>
            <HeroPages breadcrumb={breadcrumb}/>

            <section>
                <div className={'grid grid-cols-12 gap-5 max-w-screen-2xl mx-auto px-10'}>
                    <div className={'col-span-12 md:col-span-7'}>
                        <PropertyGallery images={images}/>
                    </div>
                </div>
            </section>
        </main>
    )
}