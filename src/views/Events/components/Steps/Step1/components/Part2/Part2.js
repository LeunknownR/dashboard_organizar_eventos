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
    ContainerEventGraphics 
} from "./styles";
//#endregion
//#region Components
import EventGraphicSelect from "./components/EventGraphicSelect/EventGraphicSelect";
import CustomSelect from "../../../../../../components/CustomSelect/CustomSelect";
//#endregion
//#region Images
import imgEventGraphic1 from "../../img/img-event-graphic-1.png";
import imgEventGraphic2 from "../../img/img-event-graphic-2.png";
import imgEventGraphic3 from "../../img/img-event-graphic-3.png";
import imgEventGraphic4 from "../../img/img-event-graphic-4.png";
import imgEventGraphic5 from "../../img/img-event-graphic-5.png";
//#endregion
//#region Utils
import db from "../../../../../utils/db/database";
//#endregion

const imagesEventGraphic = [
    imgEventGraphic1, 
    imgEventGraphic2, 
    imgEventGraphic3, 
    imgEventGraphic4, 
    imgEventGraphic5
];

const Part2 = ({
    form, 
    handlerChangeField 
}) => {
    const [eventSubtypes, setEventSubtypesId] = useState([]);
    //#region Effects
    useEffect(() => {
        setEventSubtypesId(getEventSubtypes());
    }, [form.eventTypeId]);
    //#endregion
    //#region Functions
    const getEventSubtypes = () => {
        const filterEventSubtypesId = [1, 2];
        if (!filterEventSubtypesId.includes(form.eventTypeId)) {
            return db.eventSubtype;
        }
        handlerChangeField("eventSubtypeId", 0);
        return db.eventSubtype.filter(
            row =>  row.id === 1 || row.id === 2);
    }
    const handlerChangeFieldToNumber = (key, e) => {
        handlerChangeField(key, Number(e.target.value));
    }
    const handleChangeGraphicField = (value) => {
        handlerChangeField("graphicId", value);
    }
    //#endregion
    return (
        <Part>
            <Fields>
                <Row>
                    <Column>
                        <TitleSection>Tipo de evento</TitleSection>
                        <ParagraphSection>
                            Selecciona una opción
                        </ParagraphSection>
                        <CustomSelect
                            value={form.eventTypeId} 
                            onChange={e => handlerChangeFieldToNumber("eventTypeId", e)}
                            disableOptionText="- Seleccione el tipo de evento -"
                            optionsProps={
                                db.eventType.map(row => {
                                    return {
                                        value: row.id,
                                        text: row.text 
                                    };
                                })}/>
                    </Column>
                    <Row className="container-event-subtype">
                        <SubtitleSection>Subtipo de evento</SubtitleSection>
                        <CustomSelect
                            value={form.eventSubtypeId}
                            onChange={e => handlerChangeFieldToNumber("eventSubtypeId", e)}
                            disableOptionText="- Seleccione el subtipo de evento -"
                            optionsProps={
                                eventSubtypes.map(row => {
                                    return {
                                        value: row.id,
                                        text: row.text 
                                    };
                                })}/>
                    </Row>
                </Row>
                <Column>
                    <SubtitleSection>Gráfica para evento</SubtitleSection>
                    <ParagraphSection>
                        Selecciona la gráfica que ayudará al estudiante a identificar tu evento
                    </ParagraphSection>
                    <ContainerEventGraphics>
                        <EventGraphicSelect 
                            propsOptions={db.eventGraphic.map((row, idx) => {
                                return {
                                    src: imagesEventGraphic[idx], 
                                    title: row.text,
                                    currentValue: row.id
                                };
                            })}
                            value={form.graphicId}
                            onClick={handleChangeGraphicField}>
                        </EventGraphicSelect>
                    </ContainerEventGraphics>
                </Column>
            </Fields>
        </Part>
    );
}

export default Part2;