import React, {useState} from 'react';

export default function PlayerInput({onSubmit}){
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="What is this?"
        />
    )
}