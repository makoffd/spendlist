import { connect } from 'react-redux'
import { requestExpenses } from '../../actions/expenses'
import Component from './component.jsx'

const mapStateToProps = ({ expenses }) => ({
    expenses
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        requestExpenses: (event) => {
            dispatch(requestExpenses())
        }
    }
}

const Expenses = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Expenses;
