import React from 'react';

import './styles.css';

export default props => (
    <button className={`button ${props.mods}`}>
        {props.children}
    </button>
);
