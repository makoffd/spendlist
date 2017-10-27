import { connect } from 'react-redux';
import Component from './component.jsx';

const mapStateToProps = ({ user }) => ({ user })

const Home = connect(
  mapStateToProps,
  null,
)(Component)

export default Home;