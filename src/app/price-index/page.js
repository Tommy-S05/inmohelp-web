import HeroPages from "@/components/Heros/HeroPages";
import PriceIndexComponent from "@/components/PriceIndexComponent";
import useFilters from "@/hooks/filters";

export default async function PriceIndexPage() {
    const {getNeighborhoods} = useFilters()
    const neighborhoods = await getNeighborhoods()
    
    return (
        <main className={'space-y-5 pb-10'}>
            <HeroPages
                title={'Indices de precios'}
                breadcrumb={breadcrumb}
                height={350}
            />
            
            {/*<section className={'flex flex-col justify-center items-center max-w-screen-2xl mx-auto space-y-10'}>*/}
            <PriceIndexComponent
                neighborhoods={neighborhoods}
            />
            {/*</section>*/}
        </main>
    );
}

const breadcrumb = [
    {
        name: 'Indices de precios',
        href: '/price-index'
    },
];