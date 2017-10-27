import { connect } from 'react-redux';
import Component from './component.jsx';

const mapStateToProps = ({ expenses }) => ({
    expenses
})

const Pulse = connect(
  mapStateToProps,
  null
)(Component)

export default Pulse;