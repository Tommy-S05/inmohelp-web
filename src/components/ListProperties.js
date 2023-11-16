import PropertyCard from "@/components/PropetyCard/PropertyCard";
import {CircularProgress} from "@nextui-org/progress";

export default function ListProperties({properties, loading}) {
    return (
        loading ? (
            <div className={'w-full flex justify-center items-center'}>
                <CircularProgress
                    label={'Cargando...'}
                    color={'primary'}
                    size={'lg'}
                />
            </div>
        ) : (
            <section className={'grid content-start grid-cols-12 gap-5 xl:gap-10 max-w-screen-2xl mx-auto'}>
                {
                    properties?.map((property) => (
                            <PropertyCard
                                key={property.id}
                                id={property.id}
                                // image={"/assets/real-estate/r1.jpeg"}
                                image={property.thumbnail ? property.thumbnail : "/assets/real-estate/r1.jpeg"}
                                name={property.name}
                                purpose={property.purpose}
                                price={property.price}
                                garages={property.garages}
                                area={property.area}
                                bathrooms={property.bathrooms}
                                bedrooms={property.bedrooms}
                            />
                        )
                    )
                }
            </section>
        )
    )
}