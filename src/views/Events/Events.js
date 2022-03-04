//#region Libraries
import {
    useState
} from "react";
//#endregion
//#region Styles
import {
    Container, Content 
} from "./styles";
//#endregion
//#region Components
import InternalNav from "./components/InternalNav/InternalNav";
import StepIndexer from "./components/StepIndexer/StepIndexer";
import Step1 from "./components/Steps/Step1/Step1";
import Step2 from "./components/Steps/Step2/Step2";
import Step3 from "./components/Steps/Step3/Step3";
import Footer from "./components/Footer/Footer";
//#endregion
//#region Utils
import { 
    initialFormStep1, 
    initialFormStep2 } from "./components/Steps/utils/initialValuesForStates";
//#endregion

const Events = () => {
    //#region States
    const [formStep1, setFormStep1] = useState(initialFormStep1);
    const [formStep2, setFormStep2] = useState(initialFormStep2);
    const [currentStep, setCurrentStep] = useState(1);
    //#endregion
    //#region Functions
    const handleCurrentStep = (direction) => {
        direction === 1 
            ? currentStep < 4 && setCurrentStep(currentStep + 1)
            : currentStep > 1 && setCurrentStep(currentStep - 1)
    }
    const getObjToSet = (prev, partForm, field, value) => {
        return {
            ...prev, 
            [partForm]: {
                ...prev[partForm], 
                [field]: value
            }
        };
    }
    const handlerForm = (step, partForm, field, value) => {
        if (step === "step1") 
            setFormStep1(
                prev => getObjToSet(prev, partForm, field, value));
        else 
            setFormStep2(
                prev => getObjToSet(prev, partForm, field, value));
    }
    //#endregion
    
    const views = [
        <Step1 handlerForm={handlerForm} form={formStep1}/>,
        <Step2 handlerForm={handlerForm} form={formStep2}/>,
        <Step3 form={{
            step1: formStep1, 
            step2: formStep2
        }}/>,
    ];
    return (
        <Container>
            <InternalNav/>
            <StepIndexer currentStep={currentStep}/>
            <Content>
                {views[currentStep-1] || views[views.length-1]}
            </Content>
            <Footer 
                currentStep={currentStep}
                backStep={
                    () => handleCurrentStep(-1)
                }
                nextStep={
                    () => handleCurrentStep(1)}/>
        </Container>
    )
}

export default Events;