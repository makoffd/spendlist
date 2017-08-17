import React from 'react';

import './styles.css';

const Button = props => (
    <button className={`button ${props.mods}`} onClick={props.onClick}>
        {props.children}
    </button>
);

Button.displayName = 'Button';

export default Button;
