import { connect } from 'react-redux'
import { signupRequest } from '../../actions/login'
import Component from './component.jsx'

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmitForm: (event) => {
            event.preventDefault();
            const data = new FormData(event.target);

            dispatch(signupRequest({
                email: data.get('email'),
                password: data.get('password'),
                confirmPassword: data.get('confirmPassword'),
                recaptchaResponse: data.get('g-recaptcha-response')
            }))
        }
    }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default Login;
