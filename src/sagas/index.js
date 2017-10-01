import { call, put, all, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
    loginResponse,
    loginFailed,
    logout,
    signupFailed
} from '../actions/login';
import {
    requestExpenses,
    expensesResponse,
    expensesRequestFailed,
    addExpenseRequestFailed,
    deleteExpenseRequestFailed,
    editExpenseRequestFailed
} from '../actions/expenses';
import { showError, showSuccess } from '../actions/notifications';
import Api from '../api';

const defaultErrorMsg = 'Connection error';

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

function* handleSignupRequest(action) {
    try {
        yield call(Api.signup, action.payload);
        yield put(showSuccess('User added'));
        yield put(push('/login'));
    } catch (e) {
        yield put(signupFailed(e));
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

function* showErrorMessage(payload) {
    yield put(showError(payload.msg || payload.message || defaultErrorMsg));
}

function* showErrors({ payload }) {
    if (payload.length > 0) {
        return yield all(payload.map(showErrorMessage));
    }

    return yield showErrorMessage(payload)
}

function* handleExpensesRequest({ payload }) {
    try {
        const data = yield call(Api.getExpenses, payload);
        yield put(expensesResponse(data));
    } catch (e) {
        yield put(expensesRequestFailed(e));
    }
}

function* addExpenseRequest({ payload }) {
    try {
        yield call(Api.addExpense, payload);
        yield put(showSuccess('Expense added'));

        yield put(requestExpenses());
        yield put(push('/expenses'));
    } catch (e) {
        yield put(addExpenseRequestFailed(e));
    }
}

function* handleDeleteExpenseRequest({ payload }) {
    try {
        yield call(Api.deleteExpense, payload);
        yield put(showSuccess('Expense deleted'));

        yield put(requestExpenses());
    } catch (e) {
        yield put(deleteExpenseRequestFailed(e));
    }
}

function* handleEditExpenseRequest({ payload }) {
    try {
        yield call(Api.editExpense, payload);
        yield put(showSuccess('Expense edited'));

        yield put(requestExpenses());
        yield put(push('/expenses'));
    } catch (e) {
        yield put(editExpenseRequestFailed(e));
    }
}

function* mySaga() {
    yield takeLatest('LOGIN_REQUEST', handleLoginRequest);
    yield takeLatest('LOGIN_FAILED', showErrors);
    yield takeLatest('SIGNUP_REQUEST', handleSignupRequest);
    yield takeLatest('SIGNUP_FAILED', showErrors);
    yield takeLatest('LOGOUT_REQUEST', handleLogoutRequest);
    yield takeLatest('EXPENSES_REQUEST', handleExpensesRequest);
    yield takeLatest('EXPENSES_REQUEST_FAILED', showErrorMessage);
    yield takeLatest('ADD_EXPENSE_REQUEST', addExpenseRequest);
    yield takeLatest('ADD_EXPENSE_REQUEST_FAILED', showErrors);
    yield takeLatest('DELETE_EXPENSE_REQUEST', handleDeleteExpenseRequest);
    yield takeLatest('DELETE_EXPENSE_REQUEST_FAILED', showErrors);
    yield takeLatest('EDIT_EXPENSE_REQUEST', handleEditExpenseRequest);
    yield takeLatest('EDIT_EXPENSE_REQUEST_FAILED', showErrors);
}

export default mySaga;
