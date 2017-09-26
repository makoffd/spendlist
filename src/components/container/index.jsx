import React from 'react';
import './styles.css';

export default (props) => {
    return (
        <div className="container">
            { props.children }
        </div>
    )
}
