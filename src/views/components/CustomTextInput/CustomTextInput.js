//#region Styles
import {
    Container, 
    StyledTextInput
} from "./styles";
//#endregion

const CustomTextInput = ({
    placeholder, 
    label, 
    value,
    helperText,
    error = false, 
    errorText, 
    onChange,
    onKeyPress,
    className
}) => {
    return (
        <Container>
            <div className="content">
                {label && <label>{label}</label>}   
                <div className="subcontent">
                    <StyledTextInput
                        onChange={e => onChange(e.target.value)}
                        value={value}
                        onKeyPress={onKeyPress}
                        placeholder={placeholder}
                        className={`${className}${error
                            ? " error" : ""}`}/>
                    {helperText && <span className="helper-text">{helperText}</span>}
                </div>
            </div>
            {(errorText && error) 
                && 
                <span className="error-text">{errorText}</span>}
        </Container>
    );
}

export default CustomTextInput;