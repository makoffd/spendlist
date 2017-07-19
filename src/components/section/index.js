import React from 'react';

export default (props) => (
    <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
        <div className="mdl-card mdl-cell mdl-cell--12-col">
            {props.children}
        </div>
    </section>
)
