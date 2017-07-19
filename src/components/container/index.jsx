import React from 'react';
import './styles.css';

export default (props) => {
    return (
        <main className="mdl-layout--fixed-header has-tabs is-upgraded">
            { props.children }
        </main>
    )
}
