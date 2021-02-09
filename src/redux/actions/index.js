import { FETCH_CHARACTERS } from '../types';

export const getCharacters = (payload) => ({
  type: FETCH_CHARACTERS,
  payload
});
