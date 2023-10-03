import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import {useForm} from "react-hook-form";
import {TfiMoney} from "react-icons/tfi";
import {Select, SelectItem} from "@nextui-org/select";
import {FiPercent} from "react-icons/fi";
import {Button} from "@nextui-org/button";
import {AiOutlineCalculator} from "react-icons/ai";


export default function AmortizationForm({onSubmit}) {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: {errors}
    } = useForm();

    return (
        <Card className={'py-5'}>
            <CardHeader>
                <h2
                    className={'text-lg font-bold text-gray-800 uppercase'}
                >
                    Calculadora
                </h2>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardBody className={'flex flex-col space-y-5'}>
                    <Input
                        autoComplete={'off'}
                        type={"number"}
                        label={"Préstamo"}
                        labelPlacement={"outside"}
                        placeholder={"Préstamo"}
                        defaultValue={300000.00}
                        {...register('loan', {required: true})}
                        variant={'bordered'}
                        color={'secondary'}
                        startContent={
                            <TfiMoney
                                className={'w-4 h-4 text-secondary pointer-events-none flex-shrink-0'}/>
                        }
                        classNames={{
                            label: 'text-[#414342] font-semibold text-base xl:text-lg',
                        }}
                    />

                    <Select
                        label={"Plazo del préstamo"}
                        placeholder={"Selecciona"}
                        labelPlacement={"outside"}
                        {...register('periods', {required: true})}
                        defaultSelectedKeys={["30"]}
                        variant={'bordered'}
                        color={'secondary'}
                        classNames={{
                            label: 'text-[#414342] font-semibold text-base xl:text-lg',
                        }}
                    >
                        <SelectItem key={30} value={30}>
                            30 años
                        </SelectItem>
                        <SelectItem key={20} value={20}>
                            20 años
                        </SelectItem>
                        <SelectItem key={15} value={15}>
                            15 años
                        </SelectItem>
                        <SelectItem key={10} value={10}>
                            10 años
                        </SelectItem>
                    </Select>

                    <Input
                        autoComplete={'off'}
                        type={'number'}
                        label={'Tasa de interés'}
                        labelPlacement={'outside'}
                        placeholder={'Tasa de interés'}
                        defaultValue={12.00}
                        {...register('interest', {required: true})}
                        variant={'bordered'}
                        color={'secondary'}
                        endContent={
                            <FiPercent
                                className={'w-4 h-4 text-secondary pointer-events-none flex-shrink-0'}/>
                        }
                        classNames={{
                            label: 'text-[#414342] font-semibold text-base xl:text-lg',
                        }}
                    />
                </CardBody>
                <CardFooter className={'flex flex-row justify-center items-center'}>
                    <Button
                        type={'submit'}
                        color={"primary"}
                        variant={"ghost"}
                        radius={"md"}
                        className={'flex items-center justify-between text-sm py-5 bg-primary/10'}
                        startContent={
                            <AiOutlineCalculator
                                className={'w-4 h-4 pointer-events-none flex-shrink-0'}/>
                        }
                    >
                        Calcular
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
