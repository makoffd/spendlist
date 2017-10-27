import { connect } from 'react-redux';
import { requestExpenses } from '../../actions/expenses';
import Component from './component.jsx';

const mapStateToProps = ({ user, expenses }) => ({ user, expenses });

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        requestExpenses: (event) => {
            dispatch(requestExpenses())
        }
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default App;