import styled from 'styled-components';

export const CompareProductContainer = styled.div`
    font-family: sans-serif;
    .section-1 {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        & > div {
            width: 33.33%;
            min-height: 380px;
        }
    }
    .featute-section {
        border-top: 2px solid #cccccc;
        border-bottom: 2px solid #cccccc;
        margin-top: 20px;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
    }
`;