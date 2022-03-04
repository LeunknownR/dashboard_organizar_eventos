//#region Libraries
import {
    Switch  
} from "@mui/material";
import styled from "styled-components";
//#endregion

export const Container = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    & label {
        font-weight: 500;
    }
`;
export const StyledSwitch = styled(Switch)`
    & .css-jsexje-MuiSwitch-thumb {
        background-color: var(--purple-1);
    }
    & .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track {
        background-color: var(--purple-1);
    }
`;