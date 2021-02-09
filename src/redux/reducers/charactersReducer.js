import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAIL
} from '../types';

const INITIAL_STATE = {
  characters: [],
  nextPage: null,
  loading: false,
  error: false
};

export const charactersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        loading: true,
        error: false
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload.results],
        nextPage: action.payload.info.next,
        loading: false,
        error: false
      };
    case FETCH_CHARACTERS_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};
