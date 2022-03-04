//#region Libraries
import styled from "styled-components";
//#endregion

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-self: center;
    padding-right: 35px;
    & .container-event-subtype {
        align-self: flex-end;
    }
`;
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    &.wrap {
        flex-wrap: wrap;
    }
    &.flex-start {
        justify-content: flex-start;
    }
    &.center {
        justify-content: center;
    }
`;
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
export const Part = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 40px 30px;
    border-radius: 8px;
    padding-bottom: 30px;
    background-color: var(--light-1);
`;
export const TitleSection = styled.h2`
    margin: 0;
    font-weight: 600;
`;
export const SubtitleSection = styled.h4`
    margin: 0;
    font-weight: 600;
`;
export const ParagraphSection = styled.p`
    margin: 0;
    color: var(--light-gray-1);
`;
export const Fields = styled.article`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;