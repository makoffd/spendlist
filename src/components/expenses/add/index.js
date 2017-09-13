import { connect } from 'react-redux'
import { addExpense } from '../../../actions/expenses'
import Component from './component.jsx'

const mapStateToProps = ({ user }) => ({ categories: user.categories });

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmitForm: (event) => {
            console.log('hsf');
            event.preventDefault();
            const data = new FormData(event.target);

            dispatch(addExpense({
                amount: data.get('amount'),
                currency: data.get('currency'),
                category: data.get('category'),
                date: data.get('date'),
                comment: data.get('comment')
            }))
        }
    }
}

const Expenses = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default Expenses;
