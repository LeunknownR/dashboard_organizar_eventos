//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    & label, & input {
        cursor: pointer;
    }
    & label {
        color: var(--light-gray-2);
        font-weight: 510;
        font-size: 13.5px;
    }
    & input {
        transform: scale(1.3);
    }
    & .iconify {
        color: var(--light-gray-2);
    }
`;
export const StyledRadio = styled.input`
    display: flex;
    gap: 5px;
    align-items: center;
`;