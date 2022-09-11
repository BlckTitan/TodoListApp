//styled component
import Styled from 'styled-components';

export const Container = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
    & div.nav, div.body{
        width: 100%;
    }
    & div.nav{
        height: 5rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    }
    & div.body{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 5rem;
        left: 0;
        height: Calc(100vh - 5rem);
    }
`;
