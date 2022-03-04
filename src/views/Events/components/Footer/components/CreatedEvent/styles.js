//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40vh;
    & .iconify {
        font-size: 40px;
    }
    & h3, & p {
        margin: 15px 0;
    }
`;