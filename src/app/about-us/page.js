"use client";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export default function SobreNosotros() {
    return (
        <main>
            <section className="text-center max-w flex flex-col items-center justify-center">
                <div className="text-xl font-bold text-primary my-4">
                    <h2>Sobre Nosotros</h2>
                </div>

                <div className="mb-3 ">
                    <p>¿Por qué InmoHelp?</p>
                </div>

                <div className="mb-4 w-2/4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit proin primis,
                        phasellus ornare faucibus eros aenean metus torquent curabitur
                        potenti commodo, lacus est praesent felis nascetur mattis sed
                        rhoncus. Fusce dignissim turpis nostra neque posuere iaculis justo
                        ultricies auctor nisi gravida nunc nascetur, tincidunt lectus aenean
                        morbi suspendisse tellus orci laoreet praesent faucibus sagittis.
                    </p>
                </div>
            </section>

            <section className="flex justify-center">
                <>
                    <>
                        <Card className="max-w-[400px] mx-4 my-4">
                            <div className="bg-primary h-4 max-w"></div>
                            <CardHeader className="flex justify-center">
                                <div className="flex flex-col">
                                    <h1 className="text-xl">Misión</h1>
                                </div>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit proin
                                    primis, phasellus ornare faucibus eros aenean metus torquent
                                    curabitur potenti commodo, lacus est praesent felis nascetur
                                    mattis sed rhoncus. Fusce dignissim turpis nostra neque
                                    posuere iaculis justo ultricies auctor nisi gravida nunc
                                    nascetur, tincidunt lectus aenean morbi suspendisse tellus
                                    orci laoreet praesent faucibus sagittis. Habitasse enim
                                    ultrices laoreet sagittis mi donec eget consequat, velit
                                    imperdiet dapibus sem urna posuere feugiat, quam sociosqu
                                    metus praesent placerat tellus rutrum.{" "}
                                </p>
                            </CardBody>
                            <Divider />
                        </Card>

                        <Card className="max-w-[400px] mx-4 my-4">
                            <div className="bg-primary h-4 max-w"></div>
                            <CardHeader className="flex justify-center">
                                <div className="flex flex-col">
                                    <h1 className="text-xl">Visión</h1>
                                </div>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit proin
                                    primis, phasellus ornare faucibus eros aenean metus torquent
                                    curabitur potenti commodo, lacus est praesent felis nascetur
                                    mattis sed rhoncus. Fusce dignissim turpis nostra neque
                                    posuere iaculis justo ultricies auctor nisi gravida nunc
                                    nascetur, tincidunt lectus aenean morbi suspendisse tellus
                                    orci laoreet praesent faucibus sagittis. Habitasse enim
                                    ultrices laoreet sagittis mi donec eget consequat, velit
                                    imperdiet dapibus sem urna posuere feugiat, quam sociosqu
                                    metus praesent placerat tellus rutrum.{" "}
                                </p>
                            </CardBody>
                            <Divider />
                        </Card>
                    </>

                    <Card className="max-w-[400px] mx-4 my-4">
                        <div className="bg-primary h-4 max-w"></div>
                        <CardHeader className="flex justify-center">
                            <div className="flex flex-col">
                                <h1 className="text-xl">Valores</h1>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit proin
                                primis, phasellus ornare faucibus eros aenean metus torquent
                                curabitur potenti commodo, lacus est praesent felis nascetur
                                mattis sed rhoncus. Fusce dignissim turpis nostra neque posuere
                                iaculis justo ultricies auctor nisi gravida nunc nascetur,
                                tincidunt lectus aenean morbi suspendisse tellus orci laoreet
                                praesent faucibus sagittis. Habitasse enim ultrices laoreet
                                sagittis mi donec eget consequat, velit imperdiet dapibus sem
                                urna posuere feugiat, quam sociosqu metus praesent placerat
                                tellus rutrum.{" "}
                            </p>
                        </CardBody>
                        <Divider />
                    </Card>
                </>
            </section>
        </main>
    );
}
