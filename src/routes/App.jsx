import React, { useContext } from "react";
import AppPokemons from "@context/AppPokemons";
import useGetPokemons from "@hooks/useGetPokemons";
import Layout from "@containers/Layout";
import '@styles/global.css';
import AppShowFavorites from "@context/AppShowFavorites";
const APIpokemon = 'https://pokeapi.co/api/v2/pokemon/';

const App = () => {
    const Pokedex = useGetPokemons(APIpokemon);
    const [show, setShow] = React.useState(AppShowFavorites);

    return (
        <AppPokemons.Provider value={Pokedex}>
            <AppShowFavorites.Provider value={[show, setShow]}>
                <Layout />
            </AppShowFavorites.Provider>
        </AppPokemons.Provider>
    );
}

export default App;