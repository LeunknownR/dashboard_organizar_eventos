//#region Libraries
import { 
    useState, useEffect } from "react";
//#endregion
//#region Styles
import {
    Row, 
    Column, 
    Part, 
    TitleSection, 
    SubtitleSection, 
    Fields 
} from "../../../components/styles";

//#endregion
//#region Components
import CustomCheckbox from "../../../../../../components/CustomCheckbox/CustomCheckbox";
import CustomTextInput from "../../../../../../components/CustomTextInput/CustomTextInput";
import CustomSwitch from "../../../../../../components/CustomSwitch/CustomSwitch";
//#endregion
//#region Utils
import db from "../../../../../utils/db/database";
//#endregion

const regex = {
    numbers: /^[0-9]+$/
}

const Part3 = ({
    form, 
    handlerChangeField 
}) => {
    //#region State
    const [allCampus, setAllCampus] = useState(false);
    const [errors, setErrors] = useState({
        quantityVacancy: false
    });
    //#endregion
    //#region Effects
    useEffect(() => {
        handlerChangeField(
            "publicByCampusIds", 
            allCampus 
            ? db.publicByCampus.map((row, idx) => row.id)
            : []);
    }, [allCampus]);
    useEffect(() => {
        setErrors(prev => ({
            ...prev, 
            quantityVacancy: form.quantityVacancy <= 0
        }));
    }, [form.quantityVacancy]);
    //#endregion
    //#region Functions
    const handlerQuantityVacancyField = value => {
        handlerChangeField("quantityVacancy", Number(value));
    }
    const handlerOnlyNumbers = (e) => {
        if (!regex.numbers.test(e.key)) 
            e.preventDefault();
    }
    const handlerPublicByCampusField = value => {
        let copy = [...form.publicByCampusIds];
        if (!isPublicByCampusInFormField(value))
            copy.push(value);
        else 
            copy = copy.filter(
                copyId => value !== copyId);
        handlerChangeField("publicByCampusIds", copy);
    }
    const isPublicByCampusInFormField = value => {
        return form.publicByCampusIds.some(currentId => currentId === value);
    }
    //#endregion
    return (
        <Part>
            <Fields>
                <TitleSection>
                    Público
                </TitleSection>
                <Row className="flex-start">
                    <CustomTextInput
                        label="Capacidad de vacantes"
                        placeholder="Número de vacantes"
                        value={form.quantityVacancy}
                        helperText="*Solo se permiten números"
                        errorText="Capacidad inválida"
                        error={errors.quantityVacancy}
                        onKeyPress={handlerOnlyNumbers}
                        onChange={handlerQuantityVacancyField}/>
                </Row>
                <Column>
                    <SubtitleSection>Dirigido a estudiantes del campus:</SubtitleSection>
                    <Row className="flex-start">
                        {db.publicByCampus.map((row, idx) => {
                            return (
                                <CustomCheckbox
                                    key={idx}
                                    regular={true}
                                    label={row.text}
                                    value={row.id}
                                    checked={isPublicByCampusInFormField(row.id)}
                                    onChange={
                                        () => handlerPublicByCampusField(
                                            row.id)}/>
                                );
                            })}
                    </Row>
                    <CustomSwitch 
                        label="Todos los campus" 
                        checked={allCampus}
                        onChange={() => setAllCampus(prev => !prev)}/>
                </Column>
            </Fields>
        </Part>
    );
}

export default Part3;