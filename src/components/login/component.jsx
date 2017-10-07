import React from 'react';
import { Redirect } from 'react-router-dom';

import Section from '../section';
import Fieldgroup from '../fieldgroup';
import Button from '../button';

export default class Login extends React.Component {
    static displayName = 'Login';

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }

        if (this.props.user) {
          return <Redirect to={from}/>;
        }

        return (
            <div className="login mdl-layout__tab-panel">
                <Section>
                    <div className="mdl-card__supporting-text">
                        <h1>Login</h1>
                        <hr/>
                        <form onSubmit={this.props.handleSubmitForm}>
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
    }
}
