//#region Styles
import {
    StyledSelect, 
} from "./styles";
//#endregion

const CustomSelect = ({
    value, 
    onChange, 
    disableOptionText, 
    optionsProps = [],
}) => {
    return (
         <StyledSelect 
            value={value} 
            onChange={onChange}>
            <option disabled value={0}>{disableOptionText}</option>
            {
                optionsProps.map((props, idx) => {
                    return (
                        <option 
                            key={idx} 
                            value={props.value}>{props.text}</option>
                    );
                })}
        </StyledSelect>
    );
}

export default CustomSelect;