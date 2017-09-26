import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import { addExpense, requestExpenses } from '../../../actions/expenses'
import Component from './component.jsx'

const mapStateToProps = ({ user, currencies }) => ({
    categories: user.categories,
    currencies
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmitForm: (event) => {
            event.preventDefault();
            const data = new FormData(event.target);

            dispatch(addExpense({
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

export default Expenses;
