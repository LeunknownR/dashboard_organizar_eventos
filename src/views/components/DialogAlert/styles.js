//#region Libraries
import Dialog  from '@mui/material/Dialog'; 
import styled from "styled-components";
//#endregion

export const Container = styled(Dialog)`
    & .MuiPaper-root {
        padding: 10px !important;
        @media (min-width: 501px) {
            min-width: 400px !important;
            max-width: 70% !important;
        }
        @media (max-width: 500px) {
            width: 90% !important;
        }
        overflow: visible;
    }
    & .MuiButton-root {
        /* border-color: #151515 !important; */
        background-color: var(--dark-1) !important;
        color: var(--light-2) !important;
        /* border-radius: 15px !important; */
    }
`;
export const Header = styled.header`
    display: flex;
    gap: 10px;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 1px solid #d5d5d5;
    & h3 {
        color: var(--light-gray-2);
        font-weight: bold;
        margin: 0 10px;
        margin-top: 5px;
    }
    & .iconify {
        font-size: 45px;
    }
`;
export const Footer = styled.footer`
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    align-items: center;
    & a:not(.link-paragraph) {
        text-decoration: none;
    }
`;