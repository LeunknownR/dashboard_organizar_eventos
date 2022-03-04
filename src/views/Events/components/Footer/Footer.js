//#region Libraries
import { 
    useState } from "react";
import {
    useNavigate 
} from "react-router";
//#endregion
//#region Styles
import { Container } from "./styles";
//#endregion
//#region Components
import CustomButton from "../../../components/CustomButton/CustomButton";
import DialogAlert from "../../../components/DialogAlert/DialogAlert";
import CreatedEvent from './components/CreatedEvent/CreatedEvent';
//#endregion

const Footer = ({
    currentStep, 
    nextStep, 
    backStep
}) => {
    //#region Extra
    const navigate = useNavigate();
    //#endregion
    //#region States
    const [showDialogCreatedEvent, setShowDialogCreatedEvent] = useState(false);
    //#endregion
    //#region Effects
    //#endregion
    //#region Functions
    const toHome = () => {
        setShowDialogCreatedEvent(false);
        setTimeout(() => {
            navigate("/home");
        }, 1000);
    }
    const toggleDialogCreatedEvent = () => {
        setShowDialogCreatedEvent(prev => !prev);
    }
    //#endregion
    return (
        <>
            <Container>
                <div>
                    {currentStep > 1
                        &&
                        <CustomButton 
                            text="Atrás"
                            variant="purple"
                            onClick={backStep}/>}
                    <CustomButton 
                        text="Guardar Borrador" variant="purple"/>
                </div>
                <CustomButton 
                    text={
                        currentStep >= 3
                        ? "Finalizar" : "Guardar y continuar" }
                    variant="purple"
                    onClick={() => {
                        nextStep();
                        if (currentStep >= 3) 
                            setShowDialogCreatedEvent(true);
                    }}/>
            </Container>
            <DialogAlert 
                open={showDialogCreatedEvent} 
                handleOpen={toggleDialogCreatedEvent}
                handleClose={toHome}
                description={
                    <CreatedEvent toHome={toHome}/>
                }/>
        </>
    );
}

export default Footer;