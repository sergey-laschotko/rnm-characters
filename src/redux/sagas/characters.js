import { takeEvery, call, put } from 'redux-saga/effects';
import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAIL
} from '../types';
import { fetchCharacters } from '../../api';

async function loadCharacters() {
  const response = await fetchCharacters();
  return await response.json();
}

function* getCharactersWorker() {
  try {
    const payload = yield call(loadCharacters);
    yield put({ type: FETCH_CHARACTERS_SUCCESS, payload });
  } catch (e) {
    yield put({ type: FETCH_CHARACTERS_FAIL });
  }
}

export function* getCharactersWatcher() {
  yield takeEvery(FETCH_CHARACTERS, getCharactersWorker);
}
