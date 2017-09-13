import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../section';
import ReactTable from "react-table";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
