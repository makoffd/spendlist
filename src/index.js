import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

import mySaga from './sagas'
import notifications from './reducers/notifications';
import './index.css';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [ routerMiddleware(history), sagaMiddleware ];

const store = createStore(
  combineReducers({
    router: routerReducer,
    notifications,
  }),
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

)

sagaMiddleware.run(mySaga)

ReactDOM.render(
    <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
      </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
