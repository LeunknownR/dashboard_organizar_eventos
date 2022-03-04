//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    padding: 0 35px;
    & > div {
        display: flex;
        gap: 15px;
        align-items: center;
        flex-wrap: wrap;
    }
`;