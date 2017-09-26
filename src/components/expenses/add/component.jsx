import React from 'react';
import Section from '../../section';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

import "react-table/react-table.css";
import './styles.css';

const formatDate = d => {
    const date = ('0' + d.getDate()).slice(-2);
    const month = ('0' + (d.getMonth() + 1)).slice(-2);

    return `${date}-${month}-${d.getFullYear()}`;
};

export default class ExpensesAdd extends React.Component {
    static DisplayName = 'ExpensesAdd';
    static defaultProps = {
        categories: [],
        currencies: [],
        requestExpenses: () => {}
    }

    getDefaultCurrency = () => {
        return this.props.currencies[0] ? this.props.currencies[0]._id : ''
    }

    state = {
        currency: this.getDefaultCurrency(),
        category: this.props.categories[0],
        date: new Date()
    };



    componentDidMount() {
        if (this.props.currencies.length === 0) {
            this.props.requestExpenses()
        }
    }

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
                                required
                                name="amount"
                                hintText="Amount"
                                />
                            <br />
                            <SelectField
                                name="currency"
                                floatingLabelText="Currency"
                                value={this.state.currency || this.getDefaultCurrency()}
                                onChange={this.handleCurrencyChange}
                                >
                                {this.props.currencies.map(currency => (
                                    <MenuItem
                                        value={currency._id}
                                        key={currency._id}
                                        primaryText={
                                            currency.shortcut + ' ' + currency.symbol
                                        }
                                        />
                                ))}
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
                                formatDate={formatDate}
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
