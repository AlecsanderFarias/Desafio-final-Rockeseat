import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { signFailure, signInSucess } from './actions';

export function* signIn({ payload }) {
  try {
    const response = yield call(api.post, `/students/${payload.email}`);

    const { id } = response.data;

    yield put(signInSucess(id));

    /* history.push('/students'); */
  } catch (error) {
    Alert.alert('Erro na autenticacao', 'O usuario nao existe');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
