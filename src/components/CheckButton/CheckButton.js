import React from 'react';

export default function CheckButton({onClick, disabled}){
    return (
        <button onClick={onClick} disabled={disabled}>
            {disabled ? 'Checking...' : 'Check'}
        </button>
    )
}