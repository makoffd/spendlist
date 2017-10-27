import React from 'react';
import {
    BarChart,
    Legend,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from 'recharts';

import './styles.css';

const prepareData = expenses => {
     const expensesByDate = expenses.reduce((hash, expense) => {
        hash[expense.date] = hash[expense.date] ? hash[expense.date] + expense.amount : 
            expense.amount

        return hash;
    }, {})

    return Object.keys(expensesByDate).slice(0, 8).map(date => ({
        date: date.split(' ')[1],
        amount: expensesByDate[date]
    }))
}

export default class Pulse extends React.Component {
    render() {
        return (
            <div className="pulse">
                <h4 className="pulse__heading">Pulse</h4>
                <BarChart
                    width={750}
                    height={400}
                    data={prepareData(this.props.expenses)}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={item => item.date} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#8884d8" />
                </BarChart>
            </div>
        )
    }
}
