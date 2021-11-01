import { useEffect, useState} from 'react';

const useGetPokemons = (APIpok) => {
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async (API) => {
        const response = await fetch(API);
        const data = await response.json();
        setPokemons([...pokemons, {
            name: data.name,
            id: data.id,
            sprites: data.sprites.front_default,
        }]);
    }

    useEffect( () => {
        for (let i = 1; i <= 898; i++) { 
            fetchPokemons(`${APIpok}${i}/`);
        }
    }, [])

    return { 
        pokemons
    };
}

export default useGetPokemons;
