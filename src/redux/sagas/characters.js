import { takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAIL,
  FETCH_CURRENT_CHARACTER,
  FETCH_CURRENT_CHARACTER_SUCCESS,
  FETCH_CURRENT_CHARACTER_FAIL
} from '../types';
import { fetchCharacters, fetchCharacter } from '../../api';

async function loadCharacters(url) {
  const response = await fetchCharacters(url);

  return await response.json();
}

function* getCharactersWorker({ payload }) {
  try {
    const data = yield call(loadCharacters, payload);

    yield put({ type: FETCH_CHARACTERS_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: FETCH_CHARACTERS_FAIL });
  }
}

export function* getCharactersWatcher() {
  yield takeEvery(FETCH_CHARACTERS, getCharactersWorker);
}

async function loadCharacter(id) {
  const response = await fetchCharacter(id);

  return await response.json();
}

function* getCharacterWorker({ payload }) {
  try {
    const data = yield call(loadCharacter, payload);

    if (data.error) {
      yield put({ type: FETCH_CURRENT_CHARACTER_FAIL });
    } else {
      yield put({ type: FETCH_CURRENT_CHARACTER_SUCCESS, payload: data });
    }
  } catch (e) {
    yield put({ type: FETCH_CURRENT_CHARACTER_FAIL });
  }
}

export function* getCharacterWatcher() {
  yield takeEvery(FETCH_CURRENT_CHARACTER, getCharacterWorker);
}
