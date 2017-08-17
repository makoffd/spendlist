import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { loginResponse, loginFailed } from '../actions'
import Api from '../api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* login(action) {
   try {
      const data = yield call(Api.login, action.payload);
      yield put(loginResponse(data));
   } catch (e) {
      yield put(loginFailed(e.message));
   }
}

function* mySaga() {
  yield takeLatest('LOGIN_REQUEST', login);
}

export default mySaga;
