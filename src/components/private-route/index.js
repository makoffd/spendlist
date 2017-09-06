import { connect } from 'react-redux'
import Component from './component'

const mapStateToProps = ({ user }) => ({ user });

const PrivateRoute = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(Component)

export default PrivateRoute;
