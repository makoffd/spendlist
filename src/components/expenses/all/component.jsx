import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../section';
import ConfirmationPopup from '../../popups/confirmation';
import ReactTable from "react-table";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import EditButton from 'material-ui/svg-icons/editor/mode-edit';
import RemoveButton from 'material-ui/svg-icons/content/clear';
import { red500 } from 'material-ui/styles/colors';

import "react-table/react-table.css";
import './styles.css';

const iconStyles = {
    width: 30,
    height: 30,
    padding: 5
};

export default class Expenses extends React.Component {
    static defaultProps = {
        expenses: [],
        requestExpenses: () => {},
        deleteExpense: () => {},
        editExpense: () => {},
    }

    state = {
        deleteExpenseId: null,
        showDeleteConfirmPopup: false
    }

    componentDidMount() {
        if (this.props.expenses.length === 0) {
            this.props.requestExpenses()
        }
    }

    handleRemoveExpenseClick = (expenseId) => {
        this.setState({
            deleteExpenseId: expenseId,
            showDeleteConfirmPopup: true
        })
    }

    handleCancelDeleteExpense = () => {
        this.setState({
            deleteExpenseId: null,
            showDeleteConfirmPopup: false
        })
    }

    handleConfirmDeleteExpense = () => {
        if (this.state.deleteExpenseId) {
            this.props.deleteExpense(this.state.deleteExpenseId);

            this.setState({
                deleteExpenseId: null,
                showDeleteConfirmPopup: false
            })
        }
    }

    handleEditExpenseClick = (expenseId) => {
        this.props.editExpense(expenseId);
    }

    renderActionButtons = (expense) => {
        return (
            <div className={'expenses__actions'}>
                <IconButton style={iconStyles}>
                    <EditButton
                        onClick={this.handleEditExpenseClick.bind(this, expense._id)}
                        />
                </IconButton>
                <IconButton style={iconStyles}>
                    <RemoveButton
                        onClick={this.handleRemoveExpenseClick.bind(this, expense._id)}
                        color={red500}
                        />
                </IconButton>
            </div>
        )
    }

    renderExpensesTable() {
        if (this.props.expenses.length === 0) {
            return (
                <div>
                    There's nothing to show yet. Add some expenses.
                </div>
            )
        }

        return (
            <div>
                <ConfirmationPopup
                    open={this.state.showDeleteConfirmPopup}
                    onConfirm={this.handleConfirmDeleteExpense}
                    onClose={this.handleCancelDeleteExpense}
                    >
                    Are you sure you want to delete this expense?
                </ConfirmationPopup>
                <ReactTable
                    data={this.props.expenses}
                    columns={[
                        {
                            Header: "Amount",
                            accessor: "amount"
                        },
                        {
                            Header: "Currency",
                            accessor: "currency.shortcut"
                        },
                        {
                            Header: "Category",
                            accessor: "category"
                        },
                        {
                            Header: "Date",
                            accessor: "date"
                        },
                        {
                            Header: "User",
                            accessor: "user"
                        },
                        {
                            Header: "Actions",
                            accessor: "actions",
                            Cell: row => this.renderActionButtons(row.original)
                        }
                    ]}
                    defaultPageSize={20}
                    className="-striped -highlight"
                />
            </div>
        )
    }

    render() {
        return (
            <Section>
                <div className="mdl-card__supporting-text">
                    <h2>Expenses</h2>
                     <Link to={`${this.props.match.url}/add`}>
                        <FloatingActionButton
                            className={'expenses__add'}
                            secondary={true}
                            >
                            <ContentAdd />
                        </FloatingActionButton>
                    </Link>
                    <hr/>
                    {this.renderExpensesTable()}
                </div>
            </Section>
        );
    }
};
