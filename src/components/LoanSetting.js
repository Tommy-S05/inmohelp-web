import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import {Input} from "@nextui-org/input";
import {useFormContext} from "react-hook-form";
import {Button} from "@nextui-org/button";

export default function LoanSetting({showSave = false, loading}) {
    const {register} = useFormContext();
    return (
        <Card className={"max-w-[400px] min-w-[320px] md:min-w-[400px] justify-center items-center mt-5"}>
            <CardHeader className="flex gap-3">
                <h1>
                    Preferencias
                </h1>
            </CardHeader>
            <Divider/>
            <CardBody>
                <fieldset className={'space-y-3'}>
                    <Input
                        {...register("down_payment_available")}
                        classNames={{
                            label: 'text-default-600 text-sm xxs:text-base',
                        }}
                        label={"Inicial para comprar"}
                        labelPlacement={'outside'}
                        placeholder={' '}
                        variant={"bordered"}
                        type={"number"}
                        onWheel={(event) => event.target.blur()}
                    />
                    <Input
                        {...register("interest_rate")}
                        classNames={{
                            label: 'text-default-600 text-sm xxs:text-base',
                        }}
                        label={"Tasa de interés (anual)"}
                        labelPlacement={'outside'}
                        placeholder={' '}
                        variant={"bordered"}
                        type={"number"}
                        onWheel={(event) => event.target.blur()}
                    />
                    <Input
                        {...register("loan_term")}
                        classNames={{
                            label: 'text-default-600 text-sm xxs:text-base',
                        }}
                        label={"Plazo de préstamo (años)"}
                        labelPlacement={'outside'}
                        placeholder={' '}
                        variant={"bordered"}
                        type={"number"}
                        onWheel={(event) => event.target.blur()}
                    />
                </fieldset>
            </CardBody>
            {
                showSave && (
                    <CardFooter>
                        <Button
                            className={'text-white rounded-tl-xl rounded-br-xl hover:bg-primary/80'}
                            radius={'none'}
                            type={"submit"}
                            variant={"solid"}
                            color={"primary"}
                            isLoading={loading}
                        >
                            Guardar
                        </Button>
                    </CardFooter>
                )
            }
        </Card>
    )
}