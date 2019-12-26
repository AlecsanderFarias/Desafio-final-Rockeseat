import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* rooSaga() {
  return yield all([auth]);
}
