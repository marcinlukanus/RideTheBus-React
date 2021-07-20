import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import PlayingCard from './PlayingCard'

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

const PlayingField = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1em;
`;

const Game = () => {
    let [score, setScore] = useState(0);

    return (
        <div>
            <Button 
                primary
                onClick={() => setScore(score + 1)}
            >
                Draw Cards
            </Button>
            <Button secondary>Rules</Button>

            <PlayingField>
                <PlayingCard />
                <PlayingCard />
                <PlayingCard />
                <PlayingCard />
            </PlayingField>

            <p>Times redrawn: {score}</p>
        </div>
    )
}

export default Game
