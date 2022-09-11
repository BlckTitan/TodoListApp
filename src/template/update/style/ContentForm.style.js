import Styled from 'styled-components';

export const Form = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    height: 100%;
    input, textarea{
        width: 60%;
        border-radius: 0.5rem;
        padding: 1rem;
        font-size: 1rem;
        border: 0.5px solid #e8e8e8;
    }
    input{
        height: 4rem;
        margin: 1.5rem 0;
    }
    input:focus-within{
        border: 1px solid red;
    }
    textarea{
        height: 12rem;
    }
    textarea:focus-within{
        border: 1px solid red;
    }
    button{
        width: 7rem;
        height: 3.5rem;
        background-color: #2F88FC;
        border: 0;
        border-radius: 0.3rem;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;
        color: #fff;
    }
`;