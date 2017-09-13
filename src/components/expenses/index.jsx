import React from 'react';
import ExpensesAdd from './add';
import ExpensesAll from './all';
import { Route } from 'react-router-dom';

const Expenses = ({ match }) => (
    <div className="mdl-layout__tab-panel">
        <Route path={`${match.url}/add`} component={ExpensesAdd}/>
        <Route exact path={match.url} component={ExpensesAll}/>
    </div>
);

export default Expenses;
