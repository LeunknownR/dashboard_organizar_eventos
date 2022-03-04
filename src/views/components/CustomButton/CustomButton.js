//#region Icons
import { Icon } from '@iconify/react';
//#endregion
//#region Styles
import {
    Container 
} from "./styles";
//#endregion

const CustomButton = ({ 
    text, 
    icon, 
    variant, 
    onClick 
}) => {
    return (
        <Container onClick={onClick} className={variant}>
            {icon && <Icon icon={icon}/>}
            <span>{text}</span>
        </Container>
    );
}

export default CustomButton;