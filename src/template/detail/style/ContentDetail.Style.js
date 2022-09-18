//styled component
import Styled from 'styled-components';

export const DetailContainer = Styled.div`
    width: 100%;
    height: 100%;
    padding-top: 1.5rem;
    color: #1B2F5D;
    & div.loadingMessage{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5rem;
        color: #e8e8e8;
        font-weight: 600;
        width: 100%;
        height: 100%;
    }
    & div.loadingMessage{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        color: #e8e8e8;
        font-weight: 400;
        width: 100%;
        height: 100%;
    }
    & div.detail{
        width: 100%;
        height: 100%;
        font-size: 24px;
    }

`;