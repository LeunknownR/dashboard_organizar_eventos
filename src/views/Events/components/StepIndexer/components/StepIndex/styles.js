//#region Libraries
import styled from "styled-components";
//#endregion

const size = "40px";
export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    & .iconify {
        width: ${size};
        height: ${size};
        color: var(--purple-1);
    }
`;
export const StepNumber = styled.div`
    width: ${size};
    height: ${size};
    border-radius: 100%;
    color: var(--color);
    border: 3px solid var(--color);
    --color: var(--light-gray-2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    &.filling {
        --color: var(--purple-1);
    }
`;
export const Description = styled.span`
    color: var(--light-gray-2);
    font-weight: 600;
    &.filling {
        color: var(--purple-1);
    }
`;
export const Line = styled.hr`
    width: 100px;
    border: 1px solid var(--light-gray-1);
    &.filling {
        border-color: var(--purple-1);
    }
    @media (max-width: 800px) {
        display: none;
    }
`;