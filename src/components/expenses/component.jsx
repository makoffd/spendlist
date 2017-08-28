import React from 'react';
import Section from '../section';

import './styles.css';

export default class Expenses extends React.Component {
    static defaultProps = {
        expenses: null,
        requestExpenses: () => {}
    }

    componentDidMount() {
        if (!this.props.expenses) {
            this.props.requestExpenses()
        }
    }

    render() {
        return (
            <div className="mdl-layout__tab-panel">
                <Section>
                    <div className="mdl-card__supporting-text">
                        <h1>Expenses</h1>
                        <hr/>
                    </div>
                </Section>
            </div>
        );
    }
};
