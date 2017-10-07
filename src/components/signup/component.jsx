import React from 'react';
import { Redirect } from 'react-router-dom';

import Section from '../section';
import Fieldgroup from '../fieldgroup';
import Button from '../button';
import Recaptcha from '../recaptcha';
import CircularProgress from 'material-ui/CircularProgress';

import './styles.css';

export default class Signup extends React.Component {
    static displayName = 'Signup';

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }

        if (this.props.user) {
          return <Redirect to={from}/>;
        }

        return (
            <div className="signup mdl-layout__tab-panel">
                <Section>
                    <div className="mdl-card__supporting-text">
                        <h1>Sign up</h1>
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
                                <label htmlFor="confirm">Confirm Password</label>
                                <input name="confirmPassword" type="password" id="confirm" placeholder="Confirm Password" />
                            </Fieldgroup>
                            <Fieldgroup>
                                <div className="signup__recaptcha-loader">
                                    <CircularProgress />
                                </div>
                                <Recaptcha />
                            </Fieldgroup>
                            <div className="fieldgroup">
                                <Button mods="button--primary">{'Signup'}</Button>
                            </div>
                        </form>
                    </div>
                </Section>
            </div>
        );
    }
}
