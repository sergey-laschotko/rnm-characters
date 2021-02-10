import {
  FETCH_CHARACTERS, 
  FETCH_CURRENT_CHARACTER,
  SET_CURRENT_CHARACTER,
  UNSET_CURRENT_CHARACTER
} from '../types';

export const getCharacters = (payload) => ({
  type: FETCH_CHARACTERS,
  payload
});

export const getCurrentCharacter = (payload) => ({
  type: FETCH_CURRENT_CHARACTER,
  payload
});

export const setCurrentCharacter = (payload) => ({
  type: SET_CURRENT_CHARACTER,
  payload
});

export const unsetCurrentCharacter = () => ({
  type: UNSET_CURRENT_CHARACTER
});
