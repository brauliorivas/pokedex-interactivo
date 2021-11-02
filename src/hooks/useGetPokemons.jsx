import { useEffect, useState} from 'react';

const useGetPokemons = (APIpok, APIhabitat, APIgender) => {
    const [pokedex] = useState([]);
    // const [habitats] = useState([]);
    // const [genders] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const fetchPokemons = async (API) => {
        const response = await fetch(API);
        const data = await response.json();
        pokedex.push({
            name: data.name,
            id: data.id,
            sprites: data.sprites.front_default,
        });
        if (pokedex.length === 898) {
            setLoaded(true);
        }
    }

    // const fetchHabitats = async (API) => {
    //     const response = await fetch(API);
    //     const data = await response.json();
    //     habitats.push({
    //         name: data.name,
    //         species: data.pokemon_species,
    //     })
    // }

    // const fetchGenders = async (API) => {
    //     const response = await fetch(API);
    //     const data = await response.json();
    //     genders.push({
    //         name: data.name,
    //         species: data.pokemon_species_details,
    //     })
    // };

    useEffect( () => {
        for (let i = 1; i <= 898; i++) { 
            fetchPokemons(`${APIpok}${i}/`);
        }
    }, [])

    // useEffect( () => {
    //     for (let i = 1; i <= 9; i++) {
    //         fetchHabitats(`${APIhabitat}${i}/`);
    //     }
    // }, [])

    // useEffect( () => {
    //     for(let i = 1; i <= 3; i++) {
    //         fetchGenders(`${APIgender}${i}/`);
    //     }
    // }, [])

    return pokedex;
}

export default useGetPokemons;
