//#region Libraries
import {
    useState, 
    useEffect
} from "react";
//#endregion
//#region Styles
import {
    Row, 
    Column, 
    SubtitleSection, 
    TitleSection, 
    ParagraphSection, 
    Fields 
} from "../../../components/styles";
import {
    StyledPart 
} from "./styles";
//#endregion
//#region Components
import HandlerRadio from "../../../../../../components/CustomRadio/CustomRadio";
import CustomButton from "../../../../../../components/CustomButton/CustomButton";
import CustomTextInput from "../../../../../../components/CustomTextInput/CustomTextInput";
import DialogSearchTeacher from "./components/DialogSearchTeacher/DialogSearchTeacher";
//#endregion
//#region Utils
import db from "../../../../../utils/db/database";
//#endregion

const Part1 = ({
    form, 
    handlerChangeField 
}) => {
    //#region States
    const [showDialogSearchTeacher, setShowDialogSearchTeacher] = useState(false);
    //#endregion
    //#region Effects
    useEffect(() => {
    }, [form.teacherFullName]);
    //#endregion
    //#region Functions
    const toggleDialogSearchTeacher = () => {
        setShowDialogSearchTeacher(prev => !prev);
    }
    const handlerOrganizerIdField = value => {
        handlerChangeField("organizerId", value);
    }
    const handlerTeacherField = value => {
        handlerChangeField("teacherFullName", value)
    }
    const handlerClickFoundTeacher = (teacher) => {
        handlerChangeField("teacherFullName", teacher);
    }
    //#endregion
    const showSearchTeacher = form.organizerId === 7;
    return (
        <>
            <StyledPart>
                <TitleSection>Organizado por:</TitleSection>
                <Fields className="fields">
                    <Row className="row flex-start">
                        <HandlerRadio
                            value={form.organizerId}
                            onChange={handlerOrganizerIdField}
                            radiosProps={
                                db.organizers.map(row => ({
                                    value: row.id, 
                                    label: row.text
                                }))
                            }/>
                    </Row>
                    <Column>
                        <SubtitleSection>Docente a cargo</SubtitleSection>
                        <ParagraphSection>
                            Docente solo aplica para académico
                        </ParagraphSection>
                        <Row className="flex-start">
                            {
                                showSearchTeacher && (
                                    <>
                                        <Column 
                                            className="column-search-teacher">
                                            <h4>
                                                Busca al docente dando click en el botón
                                            </h4>
                                            <CustomButton text="Buscar docente" variant="purple"
                                            onClick={toggleDialogSearchTeacher}/>
                                        </Column>
                                        <span>o</span>
                                    </>
                                )
                            }
                            <Column className="column-search-teacher">
                                <h4>
                                    {showSearchTeacher
                                        ? "Escribe sus datos si no está en la lista"
                                        : "Escribe sus datos"}
                                </h4>
                                <CustomTextInput
                                    value={form.teacherFullName}
                                    onChange={handlerTeacherField}
                                    placeholder="Nombres y Apellidos"/>
                            </Column>
                        </Row>
                    </Column>
                </Fields>
            </StyledPart>
            <DialogSearchTeacher 
                show={showDialogSearchTeacher}
                toggleShow={toggleDialogSearchTeacher}
                teacherFullName={form.teacherFullName}
                handlerClickFoundTeacher={handlerClickFoundTeacher}/>
        </>
    );
}

export default Part1;