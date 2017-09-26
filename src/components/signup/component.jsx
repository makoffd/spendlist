import React from 'react';
import Section from '../section';
import Fieldgroup from '../fieldgroup';
import Button from '../button';

export default props => (
    <div className="mdl-layout__tab-panel">
        <Section>
            <div className="mdl-card__supporting-text">
                <h1>Sign up</h1>
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
                        <label htmlFor="confirm">Confirm Password</label>
                        <input name="confirmPassword" type="password" id="confirm" placeholder="Confirm Password" />
                    </Fieldgroup>
                    <div className="fieldgroup">
                        <Button mods="button--primary">{'Signup'}</Button>
                    </div>
                </form>
            </div>
        </Section>
    </div>
);
