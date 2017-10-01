import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import { editExpense, requestExpenses } from '../../../actions/expenses'
import Component from '../form/component.jsx'

const mapStateToProps = ({ user, currencies, expenses }, { match }) => {
    let props = {
        actionTitle: 'Edit'
    }

    if (expenses.length === 0) {
        return props
    }

    const expense = expenses.find(el => el._id === match.params.id);
    const { _id: id, amount, date, category, currency, comment } = expense;

    props = {
        ...props,
        categories: user.categories,
        currencies,
        id,
        amount,
        date,
        category,
        currency: currency._id,
        comment
    };

    return props;
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmitForm: (event) => {
            event.preventDefault();
            const data = new FormData(event.target);

            dispatch(editExpense({
                id: data.get('id'),
                amount: parseFloat(data.get('amount')),
                currency: data.get('currency'),
                category: data.get('category'),
                date: data.get('date'),
                comment: data.get('comment')
            }))
        },
        requestExpenses: (event) => {
            dispatch(requestExpenses())
        },
        handleBackClick: (event) => {
            event.preventDefault();
            dispatch(goBack());
        }
    }
}

const Expenses = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

Expenses.displayName = 'ExpensesEdit';

export default Expenses;
