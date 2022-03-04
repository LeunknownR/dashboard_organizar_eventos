import styled from "styled-components";

export const Container = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    background-color: var(--light-1);
    z-index: 801;
    & ul, & li {
        margin: 0;
        padding: 0;
    }
    & ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        width: 100px;
    }
`;
export const ContainerListItems = styled.ul`
    background-color: var(--light-2);
    gap: 1px;
`;