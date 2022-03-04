//#region Libraries
import {
    useState, 
    useEffect
} from "react";
//#endregion
//#region Styles
import {
    Container, 
    SearchInput, 
    Message
} from "./styles";
//#endregion
//#region Icons
import { Icon } from '@iconify/react';
//#endregion
//#region Components
import CustomTextInput from "../../../../../../../../components/CustomTextInput/CustomTextInput";
import DialogAlert from "../../../../../../../../components/DialogAlert/DialogAlert";
import FoundTeachersBlock from "./FoundTeachersBlock";
//#endregion
//#region Utils
import db from "../../../../../../../utils/db/database";
//#endregion

const DialogSearchTeacher = ({
    show, 
    toggleShow, 
    handlerClickFoundTeacher 
}) => {
    //#region States
    const [teacherSearched, setTeacherSearched] = useState("");
    const [teachersFound, setTeachersFound] = useState([]);
    //#endregion
    //#region Effects
    useEffect(() => {
        getTeachersMatch();
    }, [teacherSearched]);
    //#endregion
    //#region Functions
    const handlerTeacherSearched = (value) => {
        setTeacherSearched(value);
    };
    const getTeachersMatch = () => {
        if (teacherSearched.length === 0) {
            setTeachersFound([]);
            return;
        }
        setTeachersFound(db.teachers
            .map(
                teacher => teacher.fullName)
            .filter(
                fullName => 
                    fullName.toUpperCase()
                        .includes(teacherSearched.toUpperCase()))
        );
    }
    //#endregion
    const emptyTeachers = teachersFound.length === 0;
    return (
        <DialogAlert 
            title="Buscar al docente"
            titleIcon="openmoji:man-teacher"
            open={show} 
            handleOpen={toggleShow}
            description={
                <Container>
                    <Message className={emptyTeachers && "not-found"}>
                        <Icon icon={
                            emptyTeachers 
                            ? "mi:circle-error" 
                            : "akar-icons:check-box-fill"}/>
                        <span className="text">
                            {emptyTeachers 
                                ? "El docente buscado no existe" 
                                : "Estas son las coincidencias"
                            }
                        </span>
                    </Message>
                    <SearchInput>
                        <CustomTextInput
                            className="no-border"
                            value={teacherSearched}
                            onChange={handlerTeacherSearched}
                            placeholder="Nombres y Apellidos"/>
                        <Icon icon="fa:search"/>
                        <FoundTeachersBlock 
                            teachersFound={teachersFound}
                            onClick={value => {
                                handlerClickFoundTeacher(value);
                                setTeacherSearched("");
                                toggleShow();
                            }}/>
                    </SearchInput>
                </Container>
            }/>
    );
}

export default DialogSearchTeacher;