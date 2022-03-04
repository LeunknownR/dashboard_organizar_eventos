//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.section`
    background-color: var(--light-1);
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column; 
    gap: 20px;
    max-width: 160px;
    & h4 {
        color: var(--light-gray-2) !important;
    }
`;