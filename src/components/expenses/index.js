import { connect } from 'react-redux'
import { requestExpenses } from '../../actions/expenses'
import Component from './component.jsx'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        requestExpenses: (event) => {
            dispatch(requestExpenses())
        }
    }
}

const Expenses = connect(
  null,
  mapDispatchToProps
)(Component)

export default Expenses;
