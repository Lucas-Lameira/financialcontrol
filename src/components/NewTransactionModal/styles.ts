import styled from "styled-components";
import {transparentize} from 'polished';
export const Container = styled.form`
    h2{
        color: var(--titles);
        font-size: 1.5rem;
    }

    input, button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 8px;
        font-size: 1rem;
    }

    input{                
        background: #e7e9ee;
        border: 1px solid #d7d7d7;
        font-weight: 400;        

        &::placeholder{
            color: var(--titles);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        background: var(--green);
        color:var(--white);
        border: 0;
        font-weight: 600;
        margin-top: 1.5rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }    
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
`

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    red: '#12A454',
    green: '#E52E4D'
}
export const RadioBox = styled.button<RadioBoxProps>`
    display: flex;
    align-items: center;
    justify-content:center;

    height: 4rem;
    border: 1px solid #d7d7d7;
    background: ${({isActive, activeColor}) => isActive 
        ? transparentize(0.9, colors[activeColor])
        : 'transparent'
    };

    transition: border-color 0.2s;

    &:hover{
        border-color: #aaa;
    }

    img{
        width: 25px;
        height: 25px;
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--titles);
    }
`