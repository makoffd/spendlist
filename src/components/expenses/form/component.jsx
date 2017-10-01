import React from 'react';
import Section from '../../section';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import IconDone from 'material-ui/svg-icons/action/done';

import "react-table/react-table.css";
import './styles.css';

const formatDate = d => {
    const date = ('0' + d.getDate()).slice(-2);
    const month = ('0' + (d.getMonth() + 1)).slice(-2);

    return `${date}-${month}-${d.getFullYear()}`;
};

// Parse date 02-10-2017 Mon to JS date
const parseDate = d => {
    const str = d.split(' ')[0];
    const [ DD, MM, YY ] = str.split('-');

    return new Date(`${YY}-${MM}-${DD}`);
}

export default class ExpensesAdd extends React.Component {
    static displayName = 'ExpensesForm';
    static defaultProps = {
        categories: [],
        currencies: [],
        actionTitle: 'Add',
        amount: '',
        requestExpenses: () => {},
        handleBackClick: () => {}
    }

    getDefaultCurrency = () => {
        return this.props.currencies[0] ? this.props.currencies[0]._id : ''
    }

    state = {
        amount: this.props.amount || '',
        currency: this.props.currency || this.getDefaultCurrency(),
        category: this.props.category || this.props.categories[0],
        date: this.props.date ? parseDate(this.props.date) : new Date(),
        comment: this.props.comment || '',
        currencies: this.props.currencies,
    };



    componentDidMount() {
        if (this.props.currencies.length === 0) {
            this.props.requestExpenses()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currencies.length !== this.state.currencies.length) {
            this.setState({
                amount: this.props.amount || '',
                currency: this.props.currency || this.getDefaultCurrency(),
                category: this.props.category || this.props.categories[0],
                date: this.props.date ? parseDate(this.props.date) : new Date(),
                comment: this.props.comment || '',
            });
        }
    }

    handleAmountChange = (event) => this.setState(
        { amount: event.target.value }
    );

    handleCurrencyChange = (event, index, value) => this.setState(
        { currency: value }
    );

    handleCategoryChange = (event, index, value) => this.setState(
        { category: value }
    );

    handleDateChange = (event, value) => this.setState(
        { date: value }
    );

    handleCommentChange = (event) => this.setState(
        { comment: event.target.value }
    );

    render() {
        return (
            <div className="mdl-layout__tab-panel">
                <Section>
                    <div className="mdl-card__supporting-text">
                        <h2>{`${this.props.actionTitle} expense`}</h2>
                        <hr/>
                        <form onSubmit={this.props.handleSubmitForm}>
                            <TextField
                                required
                                name="amount"
                                value={this.state.amount}
                                hintText="Amount"
                                onChange={this.handleAmountChange}
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
                                value={this.state.currency || this.getDefaultCurrency()}
                                />
                            <input
                                type="hidden"
                                name="id"
                                value={this.props.id}
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
                                value={this.state.comment}
                                hintText="Comment"
                                multiLine={true}
                                rows={1}
                                rowsMax={4}
                                onChange={this.handleCommentChange}
                                />
                            <br />
                            <br />
                             <RaisedButton
                                 style={{ marginBottom: 10 }}
                                 type="submit"
                                 label={this.props.actionTitle}
                                 labelPosition="before"
                                 primary={true}
                                 icon={<IconDone />}
                                />
                             <RaisedButton
                                 style={{ marginLeft: 10, marginBottom: 10 }}
                                 label="Back"
                                 onClick={this.props.handleBackClick}
                                 primary={false}
                                />
                        </form>
                    </div>
                </Section>
            </div>
        );
    }
};
