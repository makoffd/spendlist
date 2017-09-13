import React from 'react';
import Section from '../../section';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

import "react-table/react-table.css";
import './styles.css';

export default class Expenses extends React.Component {
    static defaultProps = {
        categories: []
    }

    state = {
        currency: 1,
        category: this.props.categories[0],
        date: new Date()
    };

    handleCurrencyChange = (event, index, value) => this.setState(
        { currency: value }
    );

    handleCategoryChange = (event, index, value) => this.setState(
        { category: value }
    );

    handleDateChange = (event, value) => this.setState(
        { date: value }
    );

    render() {
        return (
            <div className="mdl-layout__tab-panel">
                <Section>
                    <div className="mdl-card__supporting-text">
                        <h2>Add Expenses</h2>
                        <hr/>
                        <form onSubmit={this.props.handleSubmitForm}>
                            <TextField
                                name="amount"
                                hintText="Amount"
                                />
                            <br />
                            <SelectField
                                name="currency"
                                floatingLabelText="Currency"
                                value={this.state.currency}
                                onChange={this.handleCurrencyChange}
                                >
                                <MenuItem value={1} primaryText="THB" />
                                <MenuItem value={2} primaryText="USD" />
                            </SelectField>
                            <input
                                type="hidden"
                                name="currency"
                                value={this.state.currency}
                                />
                            <br />
                            <SelectField
                                floatingLabelText="Category"
                                value={this.state.category}
                                onChange={this.handleCategoryChange}
                                >
                                {this.props.categories.map(
                                    category => (
                                        <MenuItem
                                            key={category}
                                            value={category}
                                            primaryText={category}
                                            />
                                    )
                                )}
                            </SelectField>
                            <input
                                type="hidden"
                                name="category"
                                value={this.state.category}
                                />
                            <br />
                            <DatePicker
                                name="date"
                                value={this.state.date}
                                hintText="Date"
                                onChange={this.handleDateChange}
                                />
                            <br />
                            <TextField
                                name="comment"
                                hintText="Comment"
                                multiLine={true}
                                rows={1}
                                rowsMax={4}
                                />
                            <br />
                            <br />
                             <RaisedButton
                                 type="submit"
                                 label="Add"
                                 primary={true}
                                />
                        </form>
                    </div>
                </Section>
            </div>
        );
    }
};
