import {Button} from "@nextui-org/button";
import NextLink from "next/link";

export default function Thanks({onClose, loading, setActiveStep}) {
    return (
        <section
            className={"space-y-6 rounded-lg p-8 mt-3 bg-gradient-to-r from-gray-200 to-gray-300 shadow-xl border-2 border-gray-400"}>
            <div>
                <header>
                    <h1 className={"text-5xl text-secondary font-extrabold mb-4"}>
                        ¡Felicidades!
                    </h1>
                </header>
                <main className={"text-lg text-gray-600 text-center space-y-6"}>
                    <p>
                        Has completado con éxito el proceso de registro en InmoHelp. Ahora estás listo para explorar un
                        mundo de oportunidades inmobiliarias y encontrar tu nuevo hogar de ensueño. ¡Da rienda suelta a
                        tu imaginación y descubre propiedades excepcionales!
                    </p>
                    <p>
                        Gracias por unirte a nuestra exclusiva comunidad. Si necesitas asistencia personalizada o tienes
                        alguna pregunta, nuestro equipo de expertos está listo para ayudarte en cada paso del camino.
                    </p>
                </main>
            </div>
            <div className={"flex justify-center"}>
                <Button
                    as={NextLink}
                    href={'/properties'}
                    onClick={() => {
                        onClose()
                        setActiveStep(0)
                    }}
                    isLoading={loading}
                    variant={'shadow'}
                    color={'primary'}
                    radius={'full'}
                    className={"text-lg text-white font-semibold hover:bg-primary/90"}>
                    {
                        loading ? 'Guardando' : 'Comienza a Explorar'
                    }
                </Button>
            </div>
            <p className={"text-ternary text-center"}>
                Nota: Si en algún momento deseas actualizar tus datos, puedes hacerlo en tu perfil.
            </p>
        </section>
    )
}