//styled components
import Styled from 'styled-components';

const  Container = Styled.div`
    position: absolute;
    top: 7rem;
    background-color: #fff;
    width: 80%;
    height: Calc(100vh - 14rem);
    border-radius: 0.5rem;
    padding: 0 2rem;
    & div{
        position: relative;
        width: 100%;
        height: 100%;
        & div.header, div.footer{
            width: 100%;
            height: 5rem;
        }
        & div.header{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: end;
            border-bottom: 1px solid #e8e8e8;
            & button{
                width: 7rem;
                height: 3.5rem;
                background-color: #2F88FC;
                border: 0;
                border-radius: 0.3rem;
                color: #fff;
                font-size: 1rem;
                font-weight: 600;
            }
        }
        & div.body{
                width: 100%;
                height: Calc(100% - 10rem);
            }
        & div.footer{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            border-top: 1px solid #e8e8e8;
            position: absolute;
            bottom: 0;
            & a{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 3rem;
                height: 2rem;
                border: 1px solid #e8e8e8;
                border-radius: 0.2rem;
                color: gray;
            }
        }
    }
`;
export {Container};
