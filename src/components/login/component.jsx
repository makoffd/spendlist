import React from 'react';
import Section from '../section';
import Fieldgroup from '../fieldgroup';
import Button from '../button';

const Login = props => (
    <div className="mdl-layout__tab-panel">
        <Section>
            <div className="mdl-card__supporting-text">
                <h1>Login</h1>
                <hr/>
                <form onSubmit={props.handleSubmitForm}>
                    <Fieldgroup>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="E-mail" />
                    </Fieldgroup>
                    <Fieldgroup>
                        <label htmlFor="pwd">Password</label>
                        <input name="password" type="password" id="pwd" placeholder="Password" />
                    </Fieldgroup>
                    <Fieldgroup>
                        <Button mods="button--primary">
                            {'Login'}
                        </Button>
                    </Fieldgroup>
                </form>
            </div>
        </Section>
    </div>
);

Login.displayName = 'Login';

export default Login;
