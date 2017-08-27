import React from 'react';
import PropTypes from 'prop-types';

const hideTimeout = 5000;

export default class Item extends React.Component {
    static DisplayName = 'NotificationsItem';
    static PropTypes = {
        text: PropTypes.string,
        index: PropTypes.number,
        removeNotification: PropTypes.func
    }

    state = {
        visible: true
    }

    componentDidMount() {
        setTimeout(this.hide, hideTimeout)
    }

    hide = () => {
        this.setState({ visible: false });
    }

    render() {
        return this.state.visible ? (
            <div className={`notification notification_type_${this.props.type}`}>
                <div className="notification__text">
                  {this.props.text}
                </div>
            </div>
        ) : null;
    }
}
