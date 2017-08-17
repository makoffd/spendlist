import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

import mySaga from './sagas'
import reducers from './reducers'; // Or wherever you keep your reducers
import './index.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const sagaMiddleware = createSagaMiddleware();
const middleware = [ routerMiddleware(history), sagaMiddleware ];

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
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
