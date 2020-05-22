import styled from 'styled-components'

export const homeContainer = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const content = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

export const input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0.5rem;
    border-radius: .25rem 0 0 .25rem;

    &focus,
    &active{
        outline: none;
        box-shadow: none;
    }
`

export const button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;

    &focus,
    &active{
        outline: none;
        box-shadow: none;
    }
`

export const errorMsg = styled.span`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`