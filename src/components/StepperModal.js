'use client'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button as ButtonNext
} from "@nextui-org/react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import {QontoStepIcon, QontoConnector} from '@/app/styles/StepperComponent';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import {useEffect, useState} from "react";
import FinancesAccordion from "@/components/FinancesAccordion";
import useFinances from "@/hooks/finances";
import {useMediaQuery} from "@mui/material";
import {useForm, FormProvider} from "react-hook-form"
import LoanSetting from "@/components/LoanSetting";
import Welcome from "@/components/Welcome";
import Thanks from "@/components/Thanks";

function TabPanel(props) {
    const {children, value, index} = props;
    
    return (
        <fieldset
            id={`fieldset-${index}`}
            hidden={value !== index}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && <>{children}</>}
        </fieldset>
    );
}

export default function StepperModal({isOpenStepper, onOpenStepper, onOpenChangeStepper, session, status}) {
    // const {data: session, status} = useSession();
    const methods = useForm();
    const methods2 = useForm();
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [loanSetting, setLoanSetting] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const {getAccountTransactions, getLoanSetting, submitAccountTransactions, submitLoanSettings} = useFinances();
    const matches = useMediaQuery('(min-width:600px)');
    
    const steps = ["Bienvenida", "Ingresos/Gastos", "Configuración de Préstamo"]
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleReset = (onClose) => {
        onClose();
        setActiveStep(0);
    };
    
    const onSubmitAccount = async(data) => {
        try {
            await submitAccountTransactions({user: session?.user, data})
        } catch (e) {
            console.log(e)
        }
    }
    
    const onSubmitLoanSetting = async(data) => {
        const {down_payment_available, interest_rate, loan_term} = data;
        try {
            await submitLoanSettings({user: session?.user, down_payment_available, interest_rate, loan_term})
        } catch (e) {
            console.log(e)
        }
    }
    
    const onSubmitAllData = async() => {
        setLoadingSubmit(true)
        try {
            const isLoanSettingFormValid = await methods2.trigger();
            if(isLoanSettingFormValid) {
                handleNext()
                await methods.handleSubmit(onSubmitAccount)()
                await methods2.handleSubmit(onSubmitLoanSetting)()
            }
        } catch (e) {
            console.log(e)
        } finally {
            setLoadingSubmit(false)
        }
    }
    
    const getAccountTransactionsAsync = async() => {
        try {
            const accountTransactions = await getAccountTransactions({user: session?.user});
            methods.reset(accountTransactions)
        } catch (error) {
            console.log(error)
        }
    }
    
    const getLoanSettingDataAsync = async() => {
        try {
            const loanSettings = await getLoanSetting({user: session?.user})
            setLoanSetting(loanSettings)
            methods2.reset(loanSettings)
        } catch (e) {
            console.log(e)
        }
    }
    
    useEffect(() => {
        if(session?.user) {
            getAccountTransactionsAsync();
            getLoanSettingDataAsync();
        }
    }, [status]);
    return (
        <Modal
            isOpen={isOpenStepper}
            onOpenChange={onOpenChangeStepper}
            size={matches ? "5xl" : "full"}
            isDismissable={false}
            placement={'center'}
            scrollBehavior={"outside"}
            backdrop={'blur'}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                        <ModalBody>
                            <Box sx={{width: '100%'}}>
                                <Stepper activeStep={activeStep} connector={<QontoConnector/>}>
                                    {
                                        steps.map((step, index) => {
                                            return (
                                                <Step key={step}>
                                                    <StepLabel StepIconComponent={QontoStepIcon}>
                                                        {step}
                                                    </StepLabel>
                                                </Step>
                                            );
                                        })
                                    }
                                </Stepper>
                                <TabPanel value={activeStep} index={0}>
                                    <Welcome/>
                                </TabPanel>
                                <TabPanel value={activeStep} index={1}>
                                    <div className={'pt-3 space-y-5'}>
                                        <div className={'flex justify-center'}>
                                            <p className={'w-3/4 text-ternary text-justify'}>
                                                Lleve un registro de sus ingresos y gastos para una mejor gestión
                                                financiera. A
                                                continuación, puede ingresar los detalles de sus transacciones
                                                financieras. Estos
                                                datos serán utilizados para determinar las propiedades que pueden ser
                                                para ti. Por
                                                favor sea lo mas preciso posible para mejores resultados.
                                            </p>
                                        </div>
                                        <FormProvider {...methods}>
                                            <form onSubmit={methods.handleSubmit(onSubmitAccount)}>
                                                <div>
                                                    <FinancesAccordion/>
                                                </div>
                                            </form>
                                        </FormProvider>
                                    </div>
                                </TabPanel>
                                <TabPanel value={activeStep} index={2}>
                                    <div className={'pt-3 space-y-5'}>
                                        <div className={'flex justify-center'}>
                                            <p className={'w-3/4 text-ternary text-justify'}>
                                                La configuración de préstamo es esencial para la búsqueda de propiedades
                                                adaptadas a
                                                ti. Los valores que ingrese aquí ayudan a determinar las opciones que se
                                                le
                                                presentarán.
                                            </p>
                                        </div>
                                        <FormProvider {...methods2}>
                                            <form onSubmit={methods2.handleSubmit(onSubmitLoanSetting)}>
                                                <div className={'w-full flex justify-center items-center'}>
                                                    <LoanSetting loanSetting={loanSetting}/>
                                                </div>
                                            </form>
                                        </FormProvider>
                                    </div>
                                </TabPanel>
                                <TabPanel value={activeStep} index={3}>
                                    <Thanks
                                        onClose={onClose}
                                        loading={loadingSubmit}
                                        setActiveStep={setActiveStep}
                                    />
                                </TabPanel>
                                <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0 || activeStep === steps.length}
                                        onClick={handleBack}
                                        sx={{mr: 1}}
                                        type={'button'}
                                    >
                                        Atras
                                    </Button>
                                    <Box sx={{flex: '1 1 auto'}}/>
                                    {
                                        activeStep === steps.length - 1 ? (
                                            <ButtonNext
                                                color={'primary'}
                                                onClick={() => {
                                                    onSubmitAllData()
                                                    // methods.handleSubmit(onSubmitAccount)()
                                                    // methods2.handleSubmit(onSubmitLoanSetting)()
                                                    // handleNext()
                                                }}
                                                isLoading={loadingSubmit}
                                                type={'submit'}
                                            >
                                                Terminar
                                            </ButtonNext>
                                        ) : (
                                            <ButtonNext
                                                color={activeStep === steps.length ? 'danger' : 'primary'}
                                                onClick={() => {
                                                    activeStep === steps.length ? handleReset(onClose) : handleNext()
                                                }}
                                                type={'button'}
                                            >
                                                {activeStep === steps.length ? 'Cerrar' : 'Siguiente'}
                                            </ButtonNext>
                                        )
                                    }
                                </Box>
                            </Box>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}