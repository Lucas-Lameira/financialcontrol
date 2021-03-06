import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;
    
    table{
        width: 100%;
        border-spacing: 0 0.5rem;

        th, td{
            padding: 1rem 2rem;
        }

        th{
            color: var(--text);
            font-weight: 500;
            
            text-align: left;
            line-height: 1.5rem;
        }

        td{
            border: 0;
            background: var(--white);
            
            &.income{
                color: var(--green);
            }

            &.outcome{
                color: var(--red);
            }
        }

        td + td{
            color: var(--text);
            border-radius: 0.25rem;
        }       
    }
`