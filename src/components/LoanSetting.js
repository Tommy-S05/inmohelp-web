import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";
import {Input} from "@nextui-org/input";
import {useFormContext} from "react-hook-form";
import {Button} from "@nextui-org/button";
import {Select, SelectItem} from "@nextui-org/select";

export default function LoanSetting({showSave = false, loading, loanSetting}) {
    const {register, formState: {errors}} = useFormContext();
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
                        {...register('down_payment_available', {required: true, min: 0})}
                        type={'number'}
                        label={"Inicial para comprar"}
                        labelPlacement={'outside'}
                        placeholder={' '}
                        isDisabled={loading}
                        isClearable={true}
                        classNames={{
                            label: 'text-default-600 text-sm xxs:text-base',
                        }}
                        variant={"bordered"}
                        isInvalid={!!errors?.down_payment_available}
                        color={errors?.down_payment_available ? "danger" : "default"}
                        errorMessage={
                            errors?.down_payment_available?.type === 'required' ? 'El inicial para comprar es requerida' :
                                errors?.down_payment_available?.type === 'min' ? 'El inicial para comprar minimo es 0' : null
                        }
                        onWheel={(event) => event.target.blur()}
                    />
                    <Input
                        {...register('interest_rate', {required: true, min: 0, max: 15})}
                        type={"number"}
                        label={"Tasa de interés (anual)"}
                        labelPlacement={'outside'}
                        placeholder={' '}
                        isDisabled={loading}
                        isClearable={true}
                        classNames={{
                            label: 'text-default-600 text-sm xxs:text-base',
                        }}
                        variant={"bordered"}
                        isInvalid={!!errors?.interest_rate}
                        color={errors?.interest_rate ? "danger" : "default"}
                        errorMessage={
                            errors?.interest_rate?.type === 'required' ? 'La tasa de interés es requerida' :
                                errors?.interest_rate?.type === 'min' ? 'La tasa de interés minima es 0' :
                                    errors?.interest_rate?.type === 'max' ? 'La tasa de interés máxima es 15' : null
                        }
                        onWheel={(event) => event.target.blur()}
                    />
                    {/*<input type={'number'} {...register('interest_rate', {required: true, min: 0, max: 15})}/>*/}
                    <Select
                        label={"Plazo del préstamo"}
                        placeholder={"Selecciona"}
                        labelPlacement={"outside"}
                        {...register('loan_term', {required: true})}
                        defaultSelectedKeys={[`${loanSetting.loan_term}`]}
                        variant={'bordered'}
                        color={'secondary'}
                        classNames={{
                            label: 'text-default-600 text-sm xxs:text-base',
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
                    {/*<Input*/}
                    {/*    {...register("loan_term")}*/}
                    {/*    classNames={{*/}
                    {/*        label: 'text-default-600 text-sm xxs:text-base',*/}
                    {/*    }}*/}
                    {/*    label={"Plazo de préstamo (años)"}*/}
                    {/*    labelPlacement={'outside'}*/}
                    {/*    placeholder={' '}*/}
                    {/*    variant={"bordered"}*/}
                    {/*    type={"number"}*/}
                    {/*    onWheel={(event) => event.target.blur()}*/}
                    {/*/>*/}
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