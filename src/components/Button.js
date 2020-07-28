import React from 'react';

const Button = ({displayHandler, keyProps}) => {
    return (
        <button
            className={keyProps.type}
            onClick={() => displayHandler(keyProps.value)}
        >
            {keyProps.value}
        </button>
    )
}

export default Button;