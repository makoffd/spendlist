import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { requestExpenses, deleteExpense } from '../../../actions/expenses';
import Component from './component.jsx';

const mapStateToProps = ({ expenses }) => ({
    expenses
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        requestExpenses: (event) => {
            dispatch(requestExpenses())
        },
        deleteExpense: (id) => {
            dispatch(deleteExpense({ id }))
        },
        editExpense: (id) => {
            dispatch(push('/expenses/edit/' + id))
        }
    }
}

const Expenses = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(Component)

export default Expenses;
