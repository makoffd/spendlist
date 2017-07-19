import { connect } from 'react-redux'
import { login } from '../../actions'
import Component from './component.jsx'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmitClick: () => {
      dispatch(login(ownProps.filter))
    }
  }
}

const Login = connect(
  null,
  mapDispatchToProps
)(Component)

export default Login;
