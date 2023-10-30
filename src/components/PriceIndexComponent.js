'use client'
import PriceIndexForm from "@/components/PriceIndexForm";
import {useSession} from "next-auth/react";
import {useState} from "react";
import usePriceIndex from "@/hooks/priceIndex";
import PriceIndexCard from "@/components/PriceIndexCard";
import {CircularProgress} from "@nextui-org/progress";

export default function PriceIndexComponent() {
    const {data: session, status} = useSession();
    const [priceIndex, setPriceIndex] = useState([]);
    const [loading, setLoading] = useState(false);
    const {getPriceIndex} = usePriceIndex();
    
    let formattedNumber = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    });
    const onSubmit = async(data) => {
        setLoading(true);
        let params = "?";
        for(const [key, value] of Object.entries(data.name)) {
            params += `name[]=${value.value}&`;
        }
        try {
            const response = await getPriceIndex({user: session?.user, params});
            await setPriceIndex(response);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false)
        }
    };
    
    return (
        <section className={'flex flex-col justify-center items-center max-w-screen-2xl mx-auto space-y-10'}>
            <div className="w-6/12 bg-white p-5 rounded-2xl shadow-2xl ">
                <PriceIndexForm onSubmit={onSubmit}/>
            </div>
            {
                loading ? (
                    <div className={'w-full flex justify-center items-center'}>
                        <CircularProgress
                            label={'Cargando...'}
                            color={'primary'}
                            size={'lg'}
                        />
                    </div>
                ) : (
                    <section className={'space-y-5'}>
                        {
                            priceIndex?.map((item, index) => (
                                <article
                                    key={index}
                                    className={'flex space-x-5'}
                                >
                                    <PriceIndexCard
                                        // title={item.average_price}
                                        title={`$${formattedNumber.format(item.average_price)}/DOP`}
                                        content={`Precio por metro cuadrado (m²) en ${item.name} apróximadamente`}
                                    />
                                    <PriceIndexCard
                                        title={`${formattedNumber.format(item.maxArea)} (m²)`}
                                        content={`Área máxima a comprar en ${item.name} apróximadamente`}
                                    />
                                </article>
                            ))
                        }
                    </section>
                )
            }
        </section>
    )
}