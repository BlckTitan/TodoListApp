//styled components
import Styled from 'styled-components';

export const  Container = Styled.div`
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
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #e8e8e8;
            h4{
                color: #1B2F5D;
            }
            & button{
                width: 7rem;
                height: 3.5rem;
                background-color: #2F88FC;
                border: 0;
                border-radius: 0.3rem;
                font-size: 1rem;
                font-weight: 600;
                & .link{
                    color: #fff;
                }
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
