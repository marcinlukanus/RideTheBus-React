import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
    margin-left: 1.5em;
    margin-right: 1.5em;
`

const Card = styled.img`
    height: 314px
    width: 226px
`

class PlayingCard extends React.Component {
    render() {
        let { cardState, onCardPressed } = this.props
        let { isFlipped, image } = cardState

        let imageSource = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Card_back_06.svg/209px-Card_back_06.svg.png'

        if (isFlipped) {
            imageSource = image
        }

        return (
            <CardContainer >
                <Card
                    onClick={onCardPressed}
                    src={ imageSource }
                />
            </CardContainer>
        );
    }
}

export default PlayingCard
