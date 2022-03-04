//#region Styles
import {
    Container, 
    StyledInputDate
} from "./styles";
//#endregion
//#region Utils
import { 
    getDate, 
    getTimeMillis } from "./utils/date";
//#endregion

const CustomDateTimeField = ({
    type = "date", 
    label, 
    value,
    placeholder, 
    onChange,
    max, 
    min     
}) => {
    return (
        <Container>
            <label>{label}</label>
            <StyledInputDate 
                type={type} 
                placeholder={placeholder}
                value={value 
                    ? (type === "date" 
                        ? getDate(value): value)
                    : ""}
                max={max}
                min={min}
                onChange={e => onChange(
                    type === "date" 
                    ? getTimeMillis(e.target.value)
                    : e.target.value)}/>
        </Container>
    );
}

export default CustomDateTimeField;