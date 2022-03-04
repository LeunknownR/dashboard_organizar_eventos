//#region Libraries
import styled from "styled-components";
import { Link } from 'react-router-dom';
//#endregion

export const ContainerLink = styled(Link)`
    color: var(--light-gray-2);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: 0.4s;
    &.active {
        color: var(--dark-1);
        font-weight: 550;
    }
    &:hover {
        filter: brightness(160%);
    }
`;