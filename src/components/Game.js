import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
    background: transparent;
    border-radius: 5px;
    color: green;
    margin: 0.5em 1em;
    padding: .75em 1.5em;
    font-size: 1em;

    ${props => props.primary && css`
        background: green;
        color: white;
        border: 2px solid green;
    `}

    ${props => props.secondary && css`
        background: gray;
        color: white;
        border: 2px solid gray;
    `}
`;

const Container = styled.div`
    text-align: center;
`

const Game = () => {
    return (
        <div>
            <Container>
                <Button primary>Draw Cards</Button>
                <Button secondary>Rules</Button>
            </Container>
        </div>
    )
}

export default Game
