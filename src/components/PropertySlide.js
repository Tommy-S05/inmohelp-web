import {FaCar, FaVectorSquare, FaBath, FaBed} from "react-icons/fa";
import Image from "next/image";


const PropertySlide = ({image, name, purpose, price, garages, area, bathrooms, bedrooms,}) => {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return (
        <article className="relative w-64 h-[350px] cursor-pointer">
            {/*<img className="h-full object-cover w-64" src={image} alt="Propiedad"/>*/}
            <Image
                fill={true}
                src={image}
                alt={"Propiedad"}
            />
            <footer className={"flex justify-center w-full absolute bottom-0"}>
                <div className={"p-3 bg-white bg-opacity-80 w-full h-36 relative rounded-tl-xl"}>
                    <header className={"absolute right-0 -top-5 text-white bg-primary p-2 rounded-tr-xl rounded-bl-xl"}>
                        {USDollar.format(price)} /RD
                    </header>
                    <p className={"text-xs py-2"}>{purpose}</p>
                    <h1 className={"text-sm py-1"}>{name}</h1>
                    <hr></hr>
                    <ul className={"text-xs grid grid-cols-2 mt-2 gap-1 [&>li]:flex [&>li]:items-center [&>li]:space-x-[2px] [&>li>i]:text-primary"}>
                        <li>
                            <FaCar className={"text-primary w-[15px]"}/>
                            <p>{garages} Parqueos</p>
                        </li>
                        <li>
                            <FaVectorSquare className={"text-primary w-[15px]"}/>
                            <p>{area} m<sup>2</sup></p>
                        </li>
                        <li>
                            <FaBath className={"text-primary w-[15px]"}/>
                            <p>{bathrooms} Baños</p>
                        </li>
                        <li>
                            <FaBed className={"text-primary w-[15px]"}/>
                            <p>{bedrooms} Habitaciones</p>
                        </li>
                    </ul>
                </div>
            </footer>
        </article>
    );
};

export default PropertySlide;