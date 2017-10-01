import React from 'react';
import ExpensesAdd from './add';
import ExpensesAll from './all';
import { Route } from 'react-router-dom';
import PrivateRoute from '../private-route';

const Expenses = ({ match }) => (
    <div className="mdl-layout__tab-panel">
        <PrivateRoute path={`${match.url}/add`} component={ExpensesAdd}/>
        <Route exact path={match.url} component={ExpensesAll}/>
    </div>
);

export default Expenses;
