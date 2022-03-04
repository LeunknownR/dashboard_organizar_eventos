//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.section`
    display: flex;
    gap: 10px;
    &.vertical {
        flex-direction: column;
    }
    & ul {
        margin: 0;
        padding: 0;
    }
    & li {
        padding: 0;
        margin: 0;
    }
    & > span {
        word-break: break-word;
        max-width: 300px;
    }
`;