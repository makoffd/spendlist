import Component from './component';
import { connect } from 'react-redux';
import { removeNotification } from '../../../actions/notifications';

const mapDispatchToProps = {
    removeNotification
};

const Notifications = connect(
    null,
    mapDispatchToProps
)(Component)

export default Notifications;
