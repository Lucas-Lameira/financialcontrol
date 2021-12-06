import styled from "styled-components";

export const Container = styled.div` 
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    
    margin-top: -5rem;

    div {
        padding: 1rem;
        background: var(--white);
        border-radius: 8px;

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
        }

        strong{
            //margin-top: 1rem; não funciona em elementos com display inline, portanto mude para block
            opacity: 0.8;
            font-weight:500;
            font-size: 2rem;
        }

        &.highlight-background{
            background: var(--green);
            color:var(--white);
        }
    }
`