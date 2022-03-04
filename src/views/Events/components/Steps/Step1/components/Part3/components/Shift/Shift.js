//#region Styles
import {
    Column, 
    SubtitleSection, 
} from "../../../../../components/styles";
import {
    Container  
} from "./styles";
//#endregion
//#region Components
import CustomDateTimeField from "../../../../../../../../components/CustomDateTimeField/CustomDateTimeField";
//#endregion

const Shift = ({
    day,
    value, 
    onChange 
}) => {
    //#region Functions
    const isValidTime = (value, limits) => {
        const hour = Number(value.split(":")[0]);
        return hour >= limits[0] && hour <= limits[1];
    }
    //#endregion
    return (
        <Container>
            <SubtitleSection>{day}</SubtitleSection>
            <Column>
                <CustomDateTimeField
                    type="time"
                    label="Desde:"
                    value={value.timeStart}
                    placeholder="Elige una hora"
                    min="06:00"
                    max="22:00"
                    onChange={value => {
                        if (!isValidTime(value, [6, 22]))
                            return;
                        onChange("timeStart", value);
                    }}/>
                <CustomDateTimeField
                    type="time"
                    label="Hasta:"
                    value={value.timeEnd}
                    placeholder="Elige una hora"
                    min="07:00"
                    max="23:00"
                    onChange={value => {
                        if (!isValidTime(value, [7, 23]))
                            return;
                        onChange("timeEnd", value);
                    }}/>
            </Column>
        </Container>
    );
}

export default Shift;