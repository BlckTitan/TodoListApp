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
        font-size: 1.5rem;
        border: 0.5px solid #e8e8e8;
        color: #1B2F5D;
    }
    input{
        height: 4rem;
        margin: 1.5rem 0;
    }
    input:focus-within,
    textarea:focus-within{
        border: 1px solid #2F88FC;
    }
    textarea{
        height: 12rem;
    }
    label{
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 40%;
        margin: 1rem 0;
        font-size: 1.5rem;
        color: #1B2F5D;
    }
    select{
        margin-top: 1rem;
        padding-left: 1.5rem;
        border: 1px solid lightblue;
        border-radius: 5px;
        height: 3rem;
        width: 80%;
        font-size: 1.5rem;
        color: #1B2F5D;
    }
    button{
        width: 8rem;
        height: 3.5rem;
        background-color: #2F88FC;
        border: 0;
        border-radius: 0.3rem;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 3.5rem;
        color: #fff;
    }
`;