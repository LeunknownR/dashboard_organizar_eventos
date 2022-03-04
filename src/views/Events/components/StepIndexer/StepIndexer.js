//#region Styles
import {
    Container 
} from "./styles";
//#endregion
//#region Components
import StepIndex from "./components/StepIndex/StepIndex";
//#endregion

const stepInfo = [
    "Detalles del evento",
    "Organización, ubicación y público", 
    "Vista previa y confirmación"
];
const StepIndexer = ({
    currentStep 
}) => {
    return (
        <Container>
            {stepInfo.map((text, idx) => {
                return (
                    <StepIndex 
                        key={idx}
                        step={idx + 1} 
                        passed={currentStep > idx + 1}
                        filling={currentStep === idx + 1}
                        isLast={idx === stepInfo.length - 1}>
                        {text}
                    </StepIndex>
                );
            })}
        </Container>
    );
}

export default StepIndexer;