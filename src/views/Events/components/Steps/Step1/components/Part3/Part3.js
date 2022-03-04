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
    ParagraphSection, 
    Fields 
} from "../../../components/styles";
import {
    ContainerShifts,
    InformationShift
} from "./styles";
//#endregion
//#region Components
import CustomCheckbox from "../../../../../../components/CustomCheckbox/CustomCheckbox";
import CustomDateTimeField from "../../../../../../components/CustomDateTimeField/CustomDateTimeField";
import Shift from "./components/Shift/Shift";
//#endregion
//#region Utils
import { getDate } from "../../../../../../components/CustomDateTimeField/utils/date";
import db from "../../../../../utils/db/database";
//#endregion

const Part3 = ({
    form, 
    handlerChangeField 
}) => {
    //#region State
    const [allDays, setAllDays] = useState(false);
    //#endregion
    //#region Effects
    useEffect(() => {
        const newDays = db.days.map((row, idx) => row.id);
        handlerChangeField(
            "daysIds", 
            allDays 
            ? newDays
            : []);
    }, [allDays]);
    //#endregion
    //#region Functions
    const handlerDateField = (key, value) => {
        handlerChangeField("date", {
            ...form.date, 
            [key]: value
        });
    };
    const handlerDaysField = (value) => {
        let copy = [...form.daysIds];
        if (!isDayIdInFormField(value))
            copy.push(value);
        else 
            copy = copy.filter(
                copyId => value !== copyId);
        handlerChangeField("daysIds", copy);
        handlerChangeField("shifts", Array(copy.length).fill({}));        
    }
    const handlerShifts = (idx, key, value) => {
        const copy = [...form.shifts];
        copy[idx] = {
            ...copy[idx], 
            [key]: value
        };
        handlerChangeField("shifts", copy);
    }
    const isDayIdInFormField = (value) => {
        return form.daysIds.some(currentId => currentId === value);
    }
    //#endregion
    return (
        <Part>
            <Fields>
                <Column>
                    <Column>
                        <TitleSection>Duración</TitleSection>
                        <ParagraphSection>
                            Selecciona una opción
                        </ParagraphSection>
                    </Column>
                </Column>
                <Column>
                    <SubtitleSection>Fecha:</SubtitleSection>
                    <Row className="flex-start">
                        <CustomDateTimeField 
                            label="Inicio:" 
                            value={form.date.start}
                            min={getDate(Date.now())}
                            onChange={(value) => handlerDateField("start", value)}/>
                        <CustomDateTimeField 
                            label="Fin:" 
                            value={form.date.end}
                            min={getDate(Date.now())}
                            onChange={(value) => handlerDateField("end", value)}/>
                    </Row>
                </Column>
                <Column>
                    <SubtitleSection>Días:</SubtitleSection>
                    <Row>
                        <Row className="flex-start">
                        {db.days.map((row, idx) => {
                            return (
                                <CustomCheckbox
                                    key={idx}
                                    label={row.text}
                                    value={row.id}
                                    checked={isDayIdInFormField(row.id)}
                                    onChange={
                                        () => handlerDaysField(
                                            row.id)}/>
                                );
                            })}
                        </Row>
                        <CustomCheckbox
                            label="Todos los días"
                            regular={true}
                            checked={allDays}
                            onChange={() => setAllDays(prev => !prev)}/>
                    </Row>
                </Column>
                <InformationShift>
                    <span>*Inicio desde 06:00 - 22:00</span>
                    <span>*Fin desde 07:00 - 23:00</span>
                </InformationShift>
                <ContainerShifts>
                    {[...form.daysIds].sort().map((id, idx) => {
                        const rowDay = db.days.find(
                                    row => row.id === id);
                        return (
                            <Shift 
                                key={idx}
                                day={rowDay.text}
                                value={form.shifts[idx]}
                                onChange={
                                    (key, value) => handlerShifts(idx, key, value)} />
                        );
                    })}
                </ContainerShifts>
            </Fields>
        </Part>
    );
}

export default Part3;