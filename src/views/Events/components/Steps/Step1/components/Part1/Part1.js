//#region Styles
import {
    Part, 
    TitleSection, 
    ParagraphSection, 
    Fields 
} from "../../../components/styles";
import {
    ContainerTextAreas
} from "./styles";
//#endregion
//#region Components
import CustomSwitch from "../../../../../../components/CustomSwitch/CustomSwitch";
import CustomTextArea from "../../../../../../components/CustomTextArea/CustomTextArea";
//#endregion

const Part1 = ({
    form, 
    handlerChangeField 
}) => {
    //#region Functions
    const toggleResaltEvent = () => {
        handlerChangeField("resaltEvent", !form.resaltEvent);
    }
    //#endregion
    return (
        <Part>
            <TitleSection>Información del evento</TitleSection>
            <ParagraphSection>
                Añade la información que consideres necesaria:
            </ParagraphSection>
            <Fields>
                <ContainerTextAreas>
                    <CustomTextArea 
                        label="Título"
                        placeholder="Escribe el título del evento..."
                        value={form.title}
                        onChange={
                            e => handlerChangeField("title", e.target.value)}
                        maxLength={100}/>
                    <CustomTextArea 
                        label="Descripción"
                        placeholder="Escriba la descripción del evento..."
                        value={form.description}
                        onChange={
                            e => handlerChangeField("description", e.target.value)}
                        maxLength={400}/>
                </ContainerTextAreas>
                <CustomSwitch 
                    label="Destacar evento" 
                    checked={form.resaltEvent}
                    onChange={toggleResaltEvent}/>
            </Fields>
        </Part>
    );
}

export default Part1;