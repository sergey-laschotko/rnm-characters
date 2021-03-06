import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAIL,
  FETCH_CURRENT_CHARACTER,
  FETCH_CURRENT_CHARACTER_SUCCESS,
  FETCH_CURRENT_CHARACTER_FAIL,
  SET_CURRENT_CHARACTER,
  UNSET_CURRENT_CHARACTER
} from '../types';

const INITIAL_STATE = {
  characters: [],
  nextPage: null,
  loading: false,
  error: false,
  currentCharacter: {},
  loadingCharacter: false,
  errorCharacter: false,
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
    case FETCH_CURRENT_CHARACTER:
      return {
        ...state,
        loadingCharacter: true,
        errorCharacter: false
      };
    case FETCH_CURRENT_CHARACTER_SUCCESS:
      return {
        ...state,
        currentCharacter: action.payload,
        loadingCharacter: false,
        errorCharacter: false
      };
    case FETCH_CURRENT_CHARACTER_FAIL:
      return {
        ...state,
        loadingCharacter: false,
        errorCharacter: true
      };
    case SET_CURRENT_CHARACTER:
      return {
        ...state,
        currentCharacter: action.payload
      };
    case UNSET_CURRENT_CHARACTER:
      return {
        ...state,
        currentCharacter: {}
      };
    default:
      return state;
  }
};
