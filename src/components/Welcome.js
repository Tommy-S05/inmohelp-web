export default function Welcome() {
    return (
        <section
            className={"space-y-5 rounded-lg p-8 mt-3 bg-gradient-to-r from-gray-200 to-gray-300 shadow-xl border-2 border-gray-400"}>
            <header>
                <h1 className="text-5xl text-secondary font-extrabold">
                    ¡Bienvenido a InmoHelp!
                </h1>
            </header>
            <main className="text-lg text-gray-600 text-center">
                <p>
                    Te damos la bienvenida a InmoHelp, tu guía en el emocionante viaje de encontrar tu nueva propiedad.
                    Explora nuestras propiedades con confianza y descubre el lugar perfecto para ti. ¡Comienza a
                    explorar y encuentra tu sueño entre nuestras excepcionales propiedades!
                </p>
                <p className="mt-6">
                    Completa tus datos en las siguientes secciones para una experiencia más completa, obtiendo
                    resultados en tus búsquedas de propiedades adaptadas a tu situación económica. <strong>¡Encuentra tu
                    hogar ideal con InmoHelp!</strong>
                </p>
                <div className="mt-8 text-ternary">
                    <p>
                        Nota: Los datos proporcionados serán utilizados exclusivamente para ayudarte a encontrar la
                        propiedad perfecta para ti. Si prefieres no proporcionar tus datos, puedes cerrar esta ventana
                        en cualquier momento y puedes completar tus datos luego desde tu perfil.
                    </p>
                </div>
            </main>
        </section>
    )
}