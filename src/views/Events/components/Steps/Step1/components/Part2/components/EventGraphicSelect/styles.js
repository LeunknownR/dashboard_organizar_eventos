//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    width: 120px;
    height: 120px;
    cursor: pointer;
    & img {
        background-color: var(--light-2);
        padding: 15px 25px;
        width: 100%;
        border-radius: 10px;
        border: 3px solid transparent;
        transition: 0.4s;
    }
    & h6 {
        margin: 0;
        font-size: 14px;
    }
    &:hover img, &.selected img {
        border-color: var(--purple-1);      
    }
`;