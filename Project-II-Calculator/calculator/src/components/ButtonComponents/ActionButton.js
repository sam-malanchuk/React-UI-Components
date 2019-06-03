import React from 'react';
import './Button.css';

function ActionButton(props) {
    return (
        <div className="btn btn-large">{props.text}</div>
    );
};

export default ActionButton;