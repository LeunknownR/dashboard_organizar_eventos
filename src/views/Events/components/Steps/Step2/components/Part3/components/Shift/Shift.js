//#region Styles
import {
    Row, 
    Column, 
    Part, 
    TitleSection, 
    SubtitleSection, 
    ParagraphSection, 
    Fields 
} from "../../../../../components/styles";
import {
    Container  
} from "./styles";
//#endregion
//#region Components
import CustomDateField from "../../../../../../../../components/CustomDateField/CustomDateField";
//#endregion

const Shift = ({
    day,
    value, 
    onChange 
}) => {
    return (
        <Container>
            <SubtitleSection>{day}</SubtitleSection>
            <Column>
                <CustomDateField
                    type="time"
                    label="Desde:"
                    value={value.timeStart}
                    placeholder="Elige una hora"
                    onChange={value => {
                        onChange("timeStart", value);
                    }}/>
                <CustomDateField
                    type="time"
                    label="Hasta:"
                    value={value.timeEnd}
                    placeholder="Elige una hora"
                    onChange={value => {
                        onChange("timeEnd", value);
                    }}/>
            </Column>
        </Container>
    );
}

export default Shift;