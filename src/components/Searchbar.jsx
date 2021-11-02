import React, { useRef } from "react";
import pokeapi from '@assets/pokeapi.png';
import '@styles/Searchbar.scss'

const Searchbar = () => {
    const value = useRef(null);

    const handleInput = () => {
        console.log(value.current.value); 
    }

    return (
        <div className="Searchbar">
            <img src={pokeapi} alt="pokeapi" id="logo" />
            <div className="searchbar-container">
                <input type="text" placeholder="Buscar pokemon..." onChange={ () => handleInput()} ref={value}/>
                <div className="button">
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
}

export default Searchbar;