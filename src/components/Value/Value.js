import Image from "next/image";
import ValueAccordion from "@/components/Value/ValueAccordion";

export default function Value() {

    return (
        <section className={'mx-auto max-w-screen-2xl'}>
            <div className={'p-6 w-full flex flex-col lg:flex-row justify-center items-center gap-8'}>
                <article className={'flex justify-center flex-1'}>
                    <div
                        className={'relative max-w-[30rem] max-h-[35rem] w-[95%] h-[95%] overflow-hidden rounded-t-[15rem] border-solid border-8 border-[#E8E8E8FF]'}
                    >
                        <Image
                            src={"/assets/value.png"}
                            alt={"Value image"}
                            width={480}
                            height={560}
                        />
                    </div>
                </article>
                <article className={'flex flex-1 flex-col items-start gap-2'}>
                    <span className={'text-primary text-2xl font-semibold'}>
                        Our Value
                    </span>
                    <span className={'text-secondary font-bold text-[2rem]'}>
                        Value We Give to You
                    </span>
                    <span className={'text-sm text-[#8C8B8B]'}>
                        We always ready to help by providijng the best services for you.
                        <br/>
                        We beleive a good blace to live can make your life better.
                    </span>

                    <ValueAccordion/>
                </article>
            </div>
        </section>
    );
}