import Component from './component';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        notifications: state.notifications
    }
}

const Notifications = connect(
    mapStateToProps,
    null
)(Component)

export default Notifications;
