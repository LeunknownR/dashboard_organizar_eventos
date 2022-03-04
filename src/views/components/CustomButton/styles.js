//#region Libraries
import styled from "styled-components";
import {
    Button 
} from "@mui/material";
//#endregion

export const Container = styled(Button)`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 15px !important;
    border-radius: 5px;
    background-color: var(--color-1) !important;
    color: var(--color-2) !important;
    border: 3px solid transparent !important;
    font-weight: 500;
    cursor: pointer;
    & .iconify {
        font-size: 20px;
    }
    &.purple {
        --color-1: var(--purple-1);
        --color-2: var(--light-1);
    }
    &.purple:hover {
        --color-1: var(--light-1);
        --color-2: var(--purple-1);
        border-color: var(--purple-1) !important;
    }
`;