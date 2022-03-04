//#region Libraries
import styled from "styled-components";
//#endregion
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    & .content {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    & .subcontent {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    & .helper-text {
        color: var(--light-gray-2);
        font-size: 14px;
        font-weight: 490;
    }
    & .error-text {
        color: var(--red-2);
        font-size: 14px;
        font-weight: 490;
        margin-left: 10px;
    }
    & label {
        font-weight: 540;
    }
`;
export const StyledTextInput = styled.input`
    padding: 10px 15px;
    color: #6D6060;
    background-color: var(--light-1);
    border-radius: 5px;
    outline: none;
    transition: 0.15s;
    cursor: text;
    border: 2px solid var(--light-gray-1);
    width: 240px;
    &.error::placeholder {
        color: var(--red-2);
    }
    &.error {
        color: var(--red-2);
        border-color: var(--red-2);
    }
    &.no-border {
        border: 0;
    }
`;