import { all, fork } from 'redux-saga/effects';
import * as charactersSagas from './characters';

export function* rootSaga() {
  yield all(
    [...Object.values(charactersSagas)].map(fork)
  );
}
