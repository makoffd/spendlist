import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import App from './components/app';
import Home from './components/home';
import Login from './components/login';
import Contact from './components/contact';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers' // Or wherever you keep your reducers
import './index.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

ReactDOM.render(
    <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <App>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/contact" component={Contact}/>
            </App>
        </ConnectedRouter>
      </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
