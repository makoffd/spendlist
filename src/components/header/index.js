import { connect } from 'react-redux'
import { logoutRequest } from '../../actions/login'
import Component from './component.jsx'

const mapStateToProps = state => ({
        user: state.user
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logout: (event) => {
            dispatch(logoutRequest())
        }
    }
}

const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default Header;
