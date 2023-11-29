import {Input, Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";

export default function ContactusForm() {
    return (
        <form className="space-y-2 ">
            <Input
                label={"Nombre completo"}
                variant={"bordered"}
                color={'secondary'}
            />
            <Input
                label={'Correo electrónico'}
                variant={"bordered"}
                color={'secondary'}
            />
            <Textarea
                label={"Escribe tu mensaje aquí"}
                variant={'bordered'}
                color={'secondary'}
            />
            <Button color="primary">
                Enviar
            </Button>
        </form>
    )
}