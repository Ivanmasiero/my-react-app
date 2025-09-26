export const fetchPokemons = async() => {
    const response = await fetch ('https://pokeapi.co/api/v2/pokemon-species?limit=1025');
    if (!response.ok) throw new error ('error al hacer fetch')
    const data = await response.json();
    return data.results;
};