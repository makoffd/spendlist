import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import notifications from './reducers/notifications';
import userReducer from './reducers/user';
import expensesReducer from './reducers/expenses';
import currenciesReducer from './reducers/currencies';
import mySaga from './sagas'

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [ routerMiddleware(history), sagaMiddleware ];

const token = localStorage.getItem('id_token');
let user = null;
if (token) {
    try {
        user = Object.assign(JSON.parse(atob(token.split('.')[1])), { token });
    } catch(e) {
        console.log('Error while reading id token')
    }
}

const store = createStore(
    combineReducers({
        router: routerReducer,
        user: userReducer,
        expenses: expensesReducer,
        currencies: currenciesReducer,
        notifications,
    }),
    { user },
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(mySaga);

export { store, history };
