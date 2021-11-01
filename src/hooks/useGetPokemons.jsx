import { useEffect, useState} from 'react';

const useGetPokemons = (APIpok, APIhab, APIgen) => {
    const [loading, setLoading] = useState(true);
    const pokemons = [];

    // const [pokHabitats, setPokHabitats] = useState([]);
    // const [pokGender, setPokGender] = useState([]);

    // const fetchPokHabitats = async (API) => {
    //     const response = await fetch(API);
    //     const data = await response.json();
    //     setPokHabitats(...pokHabitats, data);
    // }

    // const fetchPokGender = async (API) => {
    //     const response = await fetch(API);
    //     const data = await response.json();
    //     setPokGender(...pokGender, data);
    // }

    const fetchPokemons = async (API) => {
        const response = await fetch(API);
        const data = await response.json();
        pokemons.push({ 
            name: data.name,
            id: data.id,
            sprites: data.sprites.front_default,
        })
        console.log(pokemons.length)
    }

    useEffect( () => {
        for (let i = 1; i <= 898; i++) { 
            fetchPokemons(`${APIpok}${i}/`);
        }
        if (pokemons.length == 898) {
            setLoading(false);
            return [pokemons, loading]
        }
    }, )

    // useEffect( () => {
    //     for (let i = 1; i <= 9; i++) {
    //         fetchPokHabitats(`${APIhab}${i}/`);
    //     }
    // }, [])

    // useEffect( () => {
    //     for (let i = 1; i <= 3; i++) {
    //         fetchPokGender(`${APIgen}${i}/`);
    //     }
    // } , [])

    // const POKEDEX = {
        // names: pokemons.map(pokemon => pokemon.name),
        // ids: pokemons.map(pokemon => pokemon.id),
        // images: pokemons.map(pokemon => pokemon.sprites.front_default),
    //     habitats: null ,
    // }
    if (loading) {
        console.log('loading');
        return [pokemons, loading];
    } else {
        console.log('loaded');
        return [pokemons, loading]
    }
}

export default useGetPokemons;
