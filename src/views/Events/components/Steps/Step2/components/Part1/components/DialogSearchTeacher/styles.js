//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: 175px;
    gap: 20px;
`;
export const Message = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    & .text {
        color: var(--green-1);
        font-weight: 500;
    }
    & .iconify {
        color: var(--green-1);
        font-size: 25px;
    }
    &.not-found {
        & .text {
            color: var(--red-2);
        }
        & .iconify {
            color: var(--red-2);
        }
    }
`;
export const SearchInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 2px solid var(--light-gray-1);
    position: relative;
    & .iconify {
        margin-right: 8px;
    }
`;
export const ContainerFoundTeachersBlock = styled.ul`
    position: absolute;
    top: 120%;
    width: 100%;
    background-color: var(--light-1);
    box-shadow: 0px 2px 3px #15151533;
    list-style: none;
    border-radius: 10px;
    padding: 0;
    margin: 0;
    max-height: 50vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--light-2);
    }
    & li {
        margin: 0;
        padding: 10px;
        text-align: center;
        transition: 0.35s;
        cursor: pointer;
    }
    & li:last-child {
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
    }
    & li:hover {
        background-color: var(--light-2);
    }
`;