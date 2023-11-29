import {Input, Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";

export default function ContactusForm() {
    return (
        <form
            action={"https://formspree.io/f/xleyddre"}
            method={"POST"}
            className={"space-y-2"}
        >
            <Input
                label={"Nombre completo"}
                name={'Nombre'}
                variant={"bordered"}
                color={'secondary'}
            />
            <Input
                label={'Correo electrónico'}
                name={'Correo electrónico'}
                variant={"bordered"}
                color={'secondary'}
            />
            <Textarea
                label={"Escribe tu mensaje aquí"}
                name={'Mensaje'}
                variant={'bordered'}
                color={'secondary'}
            />
            <Button
                color={"primary"}
                type={'submit'}
            >
                Enviar
            </Button>
        </form>
    )
}