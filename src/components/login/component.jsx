import React from 'react';
import Section from '../section';
import Fieldgroup from '../fieldgroup';
import Button from '../button';

export default props => (
    <div className="mdl-layout__tab-panel">
        <Section>
            <div className="mdl-card__supporting-text">
                <h1>Login</h1>
                <hr/>
                <Fieldgroup>
                    <label htmlFor="name">Username</label>
                    <input id="name" placeholder="Username" />
                </Fieldgroup>
                <Fieldgroup>
                    <label htmlFor="pwd">Password</label>
                    <input type="password" id="pwd" placeholder="Password" />
                </Fieldgroup>
                <div className="fieldgroup">
                    <Button mods="button--primary">{'Login'}</Button>
                </div>
            </div>
        </Section>
    </div>
);
