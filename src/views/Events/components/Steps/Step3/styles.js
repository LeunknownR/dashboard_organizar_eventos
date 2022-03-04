//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 40px 30px;
    border-radius: 8px;
    padding-bottom: 30px;
    transform: translateX(-15px);
    background-color: var(--light-1);
    flex-wrap: wrap;
    & .center {
        margin: 30px 0;
        justify-content: space-around;
    }
`;
export const ContainerEventGraphicResult = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: var(--light-2);
    padding: 25px;
    border-radius: 10px;
    width: 110px;
    height: 110px;
    position: relative;
    & img {
        width: 100%;
    }
    & span {
        font-weight: 520;
    }
`;