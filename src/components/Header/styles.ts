import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding:3rem 1rem 10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        color: var(--white);
        font-weight: 700;
        background: var(--blue-light);
        padding: 1rem 2rem;
        border: none;
        border-radius: 8px;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`