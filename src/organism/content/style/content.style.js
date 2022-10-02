//styled components
import Styled from 'styled-components';
/*
 * #fdcb6e light orange
 * #00b894 light green
 * #0984e3 light blue
 * #fd79a8 light pink
 * #6c5ce7 light violet
 */
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
                color: #fff;
            }
        }
        & div.body{
            width: 100%;
            height: Calc(100% - 10rem);
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        & div.footer{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            border-top: 1px solid #e8e8e8;
            position: absolute;
            bottom: 0;
            & div.blogAction{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                width: 100%;
                font-size: 20px;
                label{
                    display: flex;
                    align-items: center;
                    span{
                        margin-left: 0.5rem;
                    }
                }
                .link{
                    color: #2F88FC;
                    margin-left: 1rem;
                    text-decoration: none;
                }
                span.delete{
                    margin-left: 1rem;
                    cursor: pointer;
                }
            }
            & div.pageNavigation{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                width: 100%;

                & .pagination{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    list-style-type: none;
                    width: auto;
                    height: 3rem;
                    color: #2F88FC;
                    cursor: pointer;
                    .active{
                        background-color: #0984e3;
                        color: #fff;
                    }
                }
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
    }
`;
