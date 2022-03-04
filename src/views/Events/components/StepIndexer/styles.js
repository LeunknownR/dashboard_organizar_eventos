//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.section`
    display: flex;
    gap: 10px;
    align-self: center;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;