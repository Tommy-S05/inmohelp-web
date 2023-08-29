import Link from "next/link";

export default function Contactus() {
    return (
        <section id={"contactanos"} className={"relative"}>
            <div className={"absolute flex-col flex justify-center items-center h-full w-full md:space-y-5 space-y-20"}>
                <h2 className={"font-bold md:text-5xl text-5xl text-white"}>
                    Contactanos
                </h2>
                <p className={"hidden md:flex text-white"}>
                    Sabemos lo que necesitas
                </p>
                <Link className="bg-white p-3 px-7 text-black rounded-xl" href={'/contactus'}>
                    Enviar un mensaje
                </Link>
            </div>
            <div className={"hidden bg-white w-full md:flex justify-center pb-14 lg:pt-4 px-5"}>
                <img
                    className={"hidden md:flex h-[400px] w-[900px] lg:object-cover object-contain"}
                    src="/assets/contactanos/contactanos.png"
                    alt="Contactanos"
                />
            </div>
            <img
                className={"md:hidden w-full object-cover"}
                src="/assets/contactanos/contactanos-movile.png"
                alt="Contactanos"
            />
        </section>
    );
}