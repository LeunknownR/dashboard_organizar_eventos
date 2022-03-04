//#region Libraries
import styled from "styled-components";
//#endregion
//#region Styles
import {
    Part  
} from "../../../components/styles";
//#endregion

export const StyledPart = styled(Part)`
    gap: 20px;
    & .column-search-teacher h4 {
        margin: 0;
        font-weight: 550;
    }
    & .column-search-teacher + span {
        font-weight: 590;
    }
`;