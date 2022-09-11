import Styled from 'styled-components';
/*
 * #fdcb6e light orange
 * #00b894 light green
 * #0984e3 light blue
 * #fd79a8 light pink
 * #6c5ce7 light violet
 */

export const List = Styled.ul`
    width: 100%;
    list-style-type: none;
`;
export const Items = Styled.li`   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    height: 6.2rem;
    padding-left: 1rem;
    border-bottom: 1px solid #e8e8e8;
    border-left: 3px solid ${(props) => props.statusColor};
    color: #1B2F5D;
    & div.bodyHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 70%;
        & div.text,
            div.action{
            display: flex;
            align-items: center;
        }
        & div.text{
            width: 90%;
        }
        & div.action{
            display: flex;
            justify-content: space-evenly;
            width: 10%;
            visibility: hidden;
        }
        &:hover div.action{
            visibility: visible;
            display: flex;
            justify-content: space-evenly;
            width: 10%;
        }
    }
    & div.bodyFooter{
        width: 100%;
        height: 30%;
        span{
            color: gray;
        }
    }
`