import useProperties from "@/hooks/properties";
import HeroPages from "@/components/Heros/HeroPages";
import PropertyGallery from "@/components/PropertyDetails/PropertyGallery";
import r1 from '../../../../public/assets/real-estate/r1.jpeg'
import r2 from '../../../../public/assets/real-estate/r2.jpeg'
import r3 from '../../../../public/assets/real-estate/r3.jpeg'
import r4 from '../../../../public/assets/real-estate/r4.jpeg'
import r5 from '../../../../public/assets/real-estate/r5.jpeg'
import r6 from '../../../../public/assets/real-estate/r6.jpeg'
import r7 from '../../../../public/assets/real-estate/r7.png'
import r8 from '../../../../public/assets/real-estate/r8.png'
import r9 from '../../../../public/assets/real-estate/r9.png'
import ListedBy from "@/components/PropertyDetails/ListedBy";
import PropertyCharacteristics from "@/components/PropertyDetails/PropertyCharacteristics";
import PropertyDescription from "@/components/PropertyDetails/PropertyDescription";
import PropertyAmenities from "@/components/PropertyDetails/PropertyAmenities";
import Amortization from "@/components/Amortization/Amortization";

export default async function PropertyPage({params}) {
    const {id} = params;
    const {propertyById} = useProperties();
    const property = await propertyById(id);
    
    const breadcrumb = [
        {
            name: 'Propiedades',
            href: '/properties'
        },
        {
            name: 'Detalles de la propiedad',
            href: `/properties/${property.id}`
        }
    ];
    
    const images = [
        r1,
        r2,
        r3,
        r4,
        r5,
        r6,
        r7,
        r8,
        r9,
    ]
    
    return (
        <main className={'space-y-5 pb-5'}>
            <HeroPages breadcrumb={breadcrumb}/>
            
            <section>
                <div className={'grid grid-cols-12 gap-5 max-w-screen-2xl mx-auto px-2 sm:px-5 md:px-10'}>
                    <div className={'flex flex-col space-y-5 col-span-12 lg:col-span-8'}>
                        <PropertyCharacteristics
                            name={property.name}
                            purpose={property.purpose}
                            price={property.price}
                            area={property.area}
                            bedrooms={property.bedrooms}
                            bathrooms={property.bathrooms}
                            garages={property.garages}
                            address={property.address}
                            map={property.map}
                        />
                        <PropertyGallery gallery={property.gallery}/>
                        <PropertyDescription description={property.description}/>
                        <PropertyAmenities amenities={property.amenities}/>
                    </div>
                    <div className={'flex justify-center items-center lg:block col-span-12 lg:col-span-4'}>
                        <ListedBy agent={property.agent}/>
                    </div>
                    <Amortization/>
                </div>
            </section>
        </main>
    )
}