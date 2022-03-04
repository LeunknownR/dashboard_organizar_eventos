//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 800px) {
        width: 100%;
    }
    & label {
        font-weight: 620;
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 2px solid var(--light-gray-1);
    border-radius: 5px;
    padding: 10px;
`;
export const StyledTextArea = styled.textarea`
    outline: none;
    border: 0;
    border-bottom: 2px solid var(--light-2);
    height: 100px;
    resize: none;
`;
export const CharCounter = styled.span`
    color: var(--light-gray-2);
    font-weight: 600;
    font-size: 12px;
    align-self: flex-end;
`;