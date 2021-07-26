import React from 'react'
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

const NUMBER_OF_CARDS_TO_DRAW = 4;
const deck = [];

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            cards: [
                {},
                {},
                {},
                {}
            ],
            lost: false,
            won: false,
        }
    }

    componentDidMount() {
        this.generateDeck();
    }

    startGame() {
        this.generateCards()
        this.setState({ score: this.state.score + 1 });
    }

    generateDeck() {
        const suits = ['SPADES', 'CLUBS', 'HEARTS', 'DIAMONDS']
        const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE']

        suits.forEach((suit) => {
            numbers.forEach((number) => {
                number = this.convertToString(number);
                let card = {
                    suit: suit,
                    color: suit === 'SPADES' || suit === 'CLUBS' ? 'black' : 'red',
                    value: this.convertToNumber(number),
                    image: require(`../assets/cards/PNG/${number !== 'A' ? number : 'ACE'}${suit.charAt(0)}.png`),
                    isFlipped: false
                }

                deck.push(card);
            })
        })
    }

    generateCards() {
        const cards = [];

        for (let i = 0; i < NUMBER_OF_CARDS_TO_DRAW; i++) {
            let randInt = Math.floor(Math.random() * deck.length);

            cards.push(deck.splice(randInt, 1)[0]);
        }

        this.setState({ cards: cards }, () => {
            console.log(this.state.cards);
        });
    }

    convertToNumber(value) {
        switch (value) {
            case 'A':
                return 14
            case 'K':
                return 13
            case 'Q':
                return 12
            case 'J':
                return 11
            default:
                return Number(value)
        }
    }
    
    convertToString(cardValue) {
        switch (cardValue) {
            case 'ACE':
                return 'A'
            case 'KING':
                return 'K'
            case 'QUEEN':
                return 'Q'
            case 'JACK':
                return 'J'
            default:
                return `${cardValue}`
        }
    }

    onCardPressed = (index) => {
        let cards = [...this.state.cards]
        let flippedCard = {
            ...cards[index],
            isFlipped: true
        }
        cards[index] = flippedCard

		this.setState({ cards: cards }, () => {
            console.log(this.state.cards);
        });
	}

    render() {
        return (
            <div>
                <Button 
                    primary
                    onClick={() => this.startGame()}
                >
                    Draw Cards
                </Button>
                <Button secondary>
                    Rules
                </Button>

                <PlayingField>
                    <PlayingCard
                        cardState={this.state.cards[0]}
                        onCardPressed={() => this.onCardPressed(0)}
                    />
                    <PlayingCard
                        cardState={this.state.cards[1]}
                        onCardPressed={() => this.onCardPressed(1)}
                    />
                    <PlayingCard
                        cardState={this.state.cards[2]}
                        onCardPressed={() => this.onCardPressed(2)}
                    />
                    <PlayingCard
                        cardState={this.state.cards[3]}
                        onCardPressed={() => this.onCardPressed(3)}
                    />
                </PlayingField>

                <p>Times redrawn: {this.state.score}</p>
            </div>
        );
    }
}

export default Game
