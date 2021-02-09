export const fetchCharacters = (url) => fetch(url ? url : 'https://rickandmortyapi.com/api/character/');
