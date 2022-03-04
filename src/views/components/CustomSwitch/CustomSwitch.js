//#region Styles
import {
    Container, 
    StyledSwitch
} from "./styles";
//#endregion

const CustomSwitch = ({
    label, checked, 
    onChange 
}) => {
    return (
        <Container>
            <label onClick={onChange}>
                {label}
            </label>
            <StyledSwitch 
                onChange={onChange}
                checked={checked}/>
        </Container>
    );
}

export default CustomSwitch;