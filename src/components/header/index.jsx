import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export default () => {
    return (
        <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
            <div className="mdl-layout--large-screen-only mdl-layout__header-row">
            </div>
            <div className="mdl-layout--large-screen-only mdl-layout__header-row">
              <h3>SpendList</h3>
            </div>
            <div className="mdl-layout--large-screen-only mdl-layout__header-row">
            </div>
            <div className="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
                <NavLink exact to="/" className="mdl-layout__tab" activeClassName="is-active">Overview</NavLink>
                <NavLink to="/expenses" className="mdl-layout__tab" activeClassName="is-active">Expences</NavLink>
                <NavLink to="/contact" className="mdl-layout__tab" activeClassName="is-active">Contact</NavLink>
                <NavLink to="/login" className="mdl-layout__tab mdl-layout__tab--right" activeClassName="is-active">Login</NavLink>
                <NavLink to="/signup" className="mdl-layout__tab" activeClassName="is-active">Signup</NavLink>
            </div>
        </header>
    )
}
