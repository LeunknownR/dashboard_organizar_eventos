//#region Styles
import {
    Container, 
    Content, 
    StyledTextArea, 
    CharCounter 
} from "./styles";
//#endregion

const CustomTextArea = ({
    value = "", 
    label, 
    placeholder, 
    maxLength, 
    onChange  
}) => {
    
    return (
        <Container>
            <label>
                {label}
            </label>
            <Content>
                <StyledTextArea
                    onChange={onChange}
                    placeholder={placeholder}
                    maxLength={maxLength}></StyledTextArea>
                <CharCounter>
                    Caracteres: {value.length}/{maxLength}
                </CharCounter>
            </Content>
        </Container>
    );
}

export default CustomTextArea;