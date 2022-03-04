//#region Libraries
import styled from "styled-components";
//#endregion

export const ContainerTextAreas = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    & > * {
        width: 48%;
    }
`;