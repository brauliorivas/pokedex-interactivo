import React from 'react';
import '@styles/Button.scss';

const Button = ({onClick, value}) => {
    return (
        <button type="button">
            {value}
        </button>
    );
}

export default Button;