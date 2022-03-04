//#region Styles
import {
    Row, 
    Column, 
    Part, 
    TitleSection, 
    ParagraphSection, 
    Fields 
} from "../../../components/styles";
//#endregion
//#region Components
import HandlerRadio from "../../../../../../components/CustomRadio/CustomRadio";
//#endregion
//#region Images
//#endregion
//#region Utils
import db from "../../../../../utils/db/database";
//#endregion

const locationIcons = [
    "clarity:video-camera-solid",
    "ic:baseline-place"
];

const Part2 = ({
    form, 
    handlerChangeField 
}) => {
    //#region Effects
    //#endregion
    //#region Functions
    const handlerLocationIdField = (value) => {
        handlerChangeField("locationId", value);
    }
    //#endregion
    return (
        <Part>
            <Fields>
                <Column>
                    <TitleSection>Ubicación:</TitleSection>
                    <Row className="row flex-start">
                        <HandlerRadio
                            value={form.locationId}
                            onChange={handlerLocationIdField}
                            radiosProps={
                                db.location.map((row, idx) => ({
                                    value: row.id, 
                                    label: row.text,
                                    icon: locationIcons[idx]
                                }))
                            }/>
                    </Row>
                    <ParagraphSection>
                        *Los links serán generados automáticamente
                    </ParagraphSection>
                </Column>
            </Fields>
        </Part>
    );
}

export default Part2;