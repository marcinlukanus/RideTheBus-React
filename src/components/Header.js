import React from 'react'
import styled from 'styled-components';

const Link = styled.a`
    color: #42b983;
    text-decoration: none;
`

const Header = () => {
    return (
        <div>
            <h1>Welcome to RideTheBus!</h1>
            <p>
                <i>A single-player drinking game created by Marcin Lukanus.</i>
            </p>
            <p>
                <Link
                    href="https://github.com/marcinlukanus/RideTheBus-React" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    GitHub Repo
                </Link>
            </p>
        </div>
    )
}

export default Header
