// #region Icons
import { Icon } from '@iconify/react';
// #endregion
// #region Styles
import {
    Container, 
    StyledRadio
} from "./styles";
// #endregion

const CustomRadio = ({
    value, 
    label, 
    icon, 
    onChange, 
    checked = false 
}) => {
    return (
        <Container>
            <StyledRadio 
                type="radio"
                onChange={onChange}
                checked={checked}/>
            <label onClick={onChange}>
                {label}
            </label>
            {icon && (
                <Icon icon={icon}/>
            )}
        </Container>
    );
}

const HandlerRadio = ({
    value, 
    onChange, 
    radiosProps = [],
}) => {
    return radiosProps.map((props, idx) => {
        return (
            <CustomRadio  
                key={idx} 
                value={props.value}
                label={props.label}
                icon={props.icon}
                onChange={() => onChange(props.value)}
                checked={value === props.value}/>
        );
    });
}

export default HandlerRadio;