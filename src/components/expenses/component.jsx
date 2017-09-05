import React from 'react';
import Section from '../section';
import ReactTable from "react-table";

import "react-table/react-table.css";
import './styles.css';

export default class Expenses extends React.Component {
    static defaultProps = {
        expenses: [],
        requestExpenses: () => {}
    }

    componentDidMount() {
        if (this.props.expenses.length === 0) {
            this.props.requestExpenses()
        }
    }

    renderExpensesTable() {
        if (this.props.expenses.length === 0) {
            return (
                <div>
                    There's nothing to show yet.
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
                    }
                ]}
                defaultPageSize={20}
                className="-striped -highlight"
            />
        )
    }

    render() {
        return (
            <div className="mdl-layout__tab-panel">
                <Section>
                    <div className="mdl-card__supporting-text">
                        <h1>Expenses</h1>
                        <hr/>
                        {this.renderExpensesTable()}
                    </div>
                </Section>
            </div>
        );
    }
};
