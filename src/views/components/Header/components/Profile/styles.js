import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;
export const Content = styled.section`
    display: flex;
    align-items: center;
    gap: 17px;
    border-left: 1px solid var(--light-gray-1);
    padding: 0 15px;
    & > img {
        width: 30px;
        border-radius: 30px;
    }
    & .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        & h4, & h5 {
            margin: 0;
        }
        & .name {
            font-weight: 400;
            & span {
                font-weight: 620;
            }
        }
        & .position {
            font-weight: 500;
            color: var(--light-gray-1);
        }
    }

`;