import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../section';
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
        removeExpense: () => {}
    }

    componentDidMount() {
        if (this.props.expenses.length === 0) {
            this.props.requestExpenses()
        }
    }

    renderActionButtons = (expense) => {
        return (
            <div className={'expenses__actions'}>
                <IconButton style={iconStyles}>
                    <EditButton />
                </IconButton>
                <IconButton style={iconStyles}>
                    <RemoveButton
                        onClick={this.props.removeExpense.bind(this, expense._id)}
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
