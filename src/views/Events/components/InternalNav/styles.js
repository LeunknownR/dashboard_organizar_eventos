//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.section`
    padding: 0;
    padding-top: 30px;
    & ul, & li {
        margin: 0;
        padding: 0;
    }
    & ul {
        display: flex;
        gap: 10px;
        list-style: none;
    }
`;
