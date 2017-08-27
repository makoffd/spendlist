import React from 'react';
import Item from './item';

import './styles.css';

export default class Notifications extends React.Component {
    render() {
        return (
            <div className="notifications">
                {this.props.notifications.map(
                    (item, index) =>
                        <Item
                            key={'nt' + index}
                            index={index}
                            text={item.text}
                            type={item.type}
                            />
                )}
            </div>
        );
    }
}
