//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    font-size: 20px;
    border-radius: 10px;
    transition: 0.4s;
    cursor: pointer;
    &:hover {
        backdrop-filter: brightness(80%);
    }
`;