import ApiClient from '../utils/ApiUtil';

export async function fetchPokemonApi() {
    const fetchPokemonUrl = `/pokemon?offset=1&limit=100`;
    const pokemon = await ApiClient.get(fetchPokemonUrl);

    console.log('pokemon: ', pokemon);
    return pokemon;
}
