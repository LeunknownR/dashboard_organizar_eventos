//#region Styles
import {
    Container 
} from "./styles";
//#endregion

const CustomCheckbox = ({
    label, 
    value, 
    onChange,
    checked, 
    regular = false
}) => {
    return (
        <Container className={regular && "regular"}>
            <input 
                onChange={onChange}
                checked={checked}
                type="checkbox"/>
            <label onClick={onChange}>{label}</label>
        </Container>
    );
}

export default CustomCheckbox;