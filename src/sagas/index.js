import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
    loginResponse,
    loginFailed,
    logout
} from '../actions/login';
import { expensesResponse, expensesRequestFailed } from '../actions/expenses';
import { showError } from '../actions/notifications';
import Api from '../api';

function* handleLoginRequest(action) {
    try {
        const data = yield call(Api.login, action.payload);

        const { token } = data;
        const user = JSON.parse(atob(token.split('.')[1]));

        localStorage.setItem('id_token', token)
        yield put(loginResponse({ ...user, token }));
    } catch (e) {
        yield put(loginFailed(e));
    }
}

function* handleLogoutRequest(action) {
    try {
        localStorage.removeItem('id_token');

        yield put(logout());
    } catch (e) {
        yield put(showErrorMessage(e));
    }
}

function* showErrorMessage({ payload }) {
    yield put(showError(payload.msg));
}

function* handleLoginFailed({ payload }) {
    if (payload.length > 0) {
        return yield all(payload.map(showErrorMessage));
    }

    return yield showErrorMessage({ payload })
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
    yield takeLatest('LOGIN_REQUEST', handleLoginRequest);
    yield takeLatest('LOGIN_FAILED', handleLoginFailed);
    yield takeLatest('LOGOUT_REQUEST', handleLogoutRequest);
    yield takeLatest('EXPENSES_REQUEST', requestExpenses);
    yield takeLatest('EXPENSES_REQUEST_FAILED', showErrorMessage);
}

export default mySaga;
