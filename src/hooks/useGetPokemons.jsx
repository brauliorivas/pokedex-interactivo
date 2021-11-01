import { useEffect, useState} from 'react';

const useGetPokemons = (APIpok) => {
    const [pokedex] = useState([]);

    const fetchPokemons = async (API) => {
        const response = await fetch(API);
        const data = await response.json();
        pokedex.push({
            name: data.name,
            id: data.id,
            sprites: data.sprites.front_default,
        });
    }

    useEffect( () => {
        for (let i = 1; i <= 898; i++) { 
            fetchPokemons(`${APIpok}${i}/`);
        }
    }, [])
   
    return {
        pokedex
    };
}

export default useGetPokemons;
