export const fetchCharacters = (url) => fetch(url ? url : 'https://rickandmortyapi.com/api/character/');

export const fetchCharacter = (id) => fetch(`https://rickandmortyapi.com/api/character/${id}`);
