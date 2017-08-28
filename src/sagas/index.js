import { call, put, all, takeLatest } from 'redux-saga/effects';
import { loginResponse, loginFailed } from '../actions/login';
import { expensesResponse, expensesRequestFailed } from '../actions/expenses';
import { showError } from '../actions/notifications';
import Api from '../api';

function* login(action) {
    try {
        const data = yield call(Api.login, action.payload);
        yield put(loginResponse(data));
    } catch (e) {
        yield put(loginFailed(e));
    }
}

function* showErrorMessage(payload) {
  yield put(showError(payload.msg));
}

function* handleLoginFailed({ payload }) {
    if (payload.length > 0) {
        return yield all(payload.map(showErrorMessage));
    }

    return yield showErrorMessage(payload)
}

function* requestExpenses({ payload }) {
    try {
        const data = yield call(Api.getExpenses, payload);
        yield put(expensesResponse(data));
    } catch (e) {
        yield put(expensesRequestFailed(e));
    }
}

function* mySaga() {
  yield takeLatest('LOGIN_REQUEST', login);
  yield takeLatest('LOGIN_FAILED', handleLoginFailed);
  yield takeLatest('EXPENSES_REQUEST', requestExpenses);
}

export default mySaga;
