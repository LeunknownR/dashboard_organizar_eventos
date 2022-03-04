//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.section`
    min-height: calc(100vh - 80px);
    padding: 30px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    & > button {
        position: absolute;
        top: 35px;
        right: 25px;
    }
`;
export const Content = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    & > img {
        width: 200px;
        border-radius: 30px;
    }
`;
export const TextContent = styled.div` 
    & * {
        text-align: center;
    }
    & h3 {
        font-size: 16px;
    }
    & p {
        color: var(--light-gray-2);
        font-size: 15px;
    }
    & span {
        font-weight: 600;
    }
`;