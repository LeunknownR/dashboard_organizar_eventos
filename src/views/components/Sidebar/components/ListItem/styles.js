//#region Libraries
import styled from "styled-components";
import { Link } from 'react-router-dom';
//#endregion

export const ContainerLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 10px;
    padding: 14px;
    height: 80px;
    background-color: var(--light-1);
    transition: 0.4s;
    cursor: pointer;
    z-index: 0;
    &.active {
        background-color: var(--light-2);
    }
    & .iconify {
        color: var(--light-gray-2) !important;
        font-size: 22px;
    }
    & .description {
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
        font-weight: 500;
        color: var(--light-gray-1) !important;
    }
`;