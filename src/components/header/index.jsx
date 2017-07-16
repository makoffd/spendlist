import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import Container from '../container';

export default () => {
    return (
        <div className="header">
            <Container>
                <div className="logo">
                    <Link to="/">spendlist</Link>
                </div>

                <div className="leftmenu">
                    <a href="/expenses">expenses</a>
                    <a href="/expenses">contact</a>
                </div>

                <div className="rightmenu">
                    <Link to="/login">login</Link>
                    <a href="/expenses">create account</a>
                </div>

                <div className="accmanagement">
                    {
                    //  user.profile.picture
                    //  img(src=user.gravatar(60))
                    //  user.profile.name || user.email || user.id
                    }
                    <a href="/expenses">My Account</a>
                    <a href='/logout'> Logout</a>
                </div>
            </Container>
        </div>
    )
}
