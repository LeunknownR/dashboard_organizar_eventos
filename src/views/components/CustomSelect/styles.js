//#region Libraries
import styled from "styled-components";
//#endregion

export const StyledSelect = styled.select`
    padding: 5px 10px;
    font-weight: 500;
    outline: none;
    background-color: var(--light-1);
    color: var(--light-gray-2);
    border: 2px solid var(--light-gray-2);
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
        box-shadow: 5px 4px 9px #15151533;
    }
    & option[disabled] {
        color: var(--light-gray-1);
    }
    @media (max-width: 800px) {
        width: 100%;
        text-overflow: ellipsis;
    }
`;