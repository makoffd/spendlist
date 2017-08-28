import { connect } from 'react-redux'
import { signupRequest } from '../../actions/login'
import Component from './component.jsx'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmitForm: (event) => {
            event.preventDefault();
            const data = new FormData(event.target);

            dispatch(signupRequest({
                email: data.get('email'),
                password: data.get('password')
            }))
        }
    }
}

const Login = connect(
  null,
  mapDispatchToProps
)(Component)

export default Login;
