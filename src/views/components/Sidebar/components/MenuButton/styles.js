//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    height: 72px;
    background-color: var(--red-1);
    z-index: 0;
    cursor: pointer;
    & .iconify {
        transition: 0.4s;
        color: var(--light-1);
        font-size: 40px;
    }
    &:hover .iconify {
        transform: scale(1.2);
    }
`;