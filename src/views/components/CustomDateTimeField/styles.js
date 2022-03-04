//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    & label {
        font-weight: 600;
    }
`;
export const StyledInputDate = styled.input`
    padding: 5px 15px;
    color: #6D6060;
    background-color: var(--light-1);
    border: 2px solid var(--light-gray-1);
    border-radius: 5px;
    outline: none;
    transition: 0.15s;
    cursor: text;
    &::-webkit-calendar-picker-indicator {
        cursor: pointer;
    }
`;