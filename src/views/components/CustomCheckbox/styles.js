//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.div`
    display: flex;
    gap: 10px;
    padding: 15px;
    border-radius: 5px;
    position: relative;
    & input {
        cursor: pointer;
    }
    & label {
        font-weight: 500;
        font-size: 12px;
        cursor: pointer;
    }
    &.regular {
        align-items: center; 
        & label {
            font-weight: 520;
            color: var(--light-gray-2);
        }
        & input {
            align-self: normal;
        }
    }
    &:not(.regular) {
        background-color: var(--light-2);
        flex-direction: column;
        width: 90px;
        height: 90px;
        & label {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        & input {
            transform: scale(1.2);
        }
    }
`;