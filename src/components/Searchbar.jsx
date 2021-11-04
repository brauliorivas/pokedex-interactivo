import React, { useRef, useState, useContext } from "react";
import pokeapi from '@assets/pokeapi.png';
import '@styles/Searchbar.scss';
import AppSearch from "@context/AppSearch";
import Button from "@components/Button";

const Searchbar = () => {
    const value = useRef(null);
    const [search, setSearch] = useContext(AppSearch);

    const handleInput = () => {
        setSearch(value.current.value);
    }

    const clearValue = () => {
        setSearch("");
        value.current.value = "";
    };

    return (
        <div className="Searchbar">
            <img src={pokeapi} alt="pokeapi" id="logo" />
            <div className="searchbar-container">
                <input type="text" placeholder="Buscar pokemon..." onChange={() => handleInput()} ref={value} />
                <div className="button" onClick={clearValue}>
                    <Button value="Limpiar" />
                </div>
            </div>
        </div>
    );
}

export default Searchbar;