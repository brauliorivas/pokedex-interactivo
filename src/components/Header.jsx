import React from 'react';
import pokeapi from '@assets/pokeapi.png';
import '@styles/Header.scss'

const Header = () => {
    return (
        <nav>
            <div className="navbar-logo">
                <img src={pokeapi} alt="Pokeapi" />
            </div>
            <div className="navbar-menu">
                <ul>
                    <li>Favoritos</li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;