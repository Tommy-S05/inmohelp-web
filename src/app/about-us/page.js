import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import HeroPages from "@/components/Heros/HeroPages";
import {FaChevronDown} from "react-icons/fa";
import AboutUs from "@/components/AboutUs/AboutUs";

export default function SobreNosotros() {
    const breadcrumb = [
        {
            name: 'Sobre nosotros',
            href: '/about-us'
        },
    ];
    
    return (
        <main className={'space-y-10 pb-5'}>
            <HeroPages
                title={'Sobre nosotros'}
                breadcrumb={breadcrumb}
                height={350}
            />
            
            <AboutUs/>
        </main>
    );
}
