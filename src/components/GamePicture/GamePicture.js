import React, {useState} from 'react';

export default function GamePicture({imageUrl}){
    const [isSpinning,setIsSpinning] = useState(false);

    const handleSpinClick = () => {
        setIsSpinning(!isSpinning);
    }

    return (
        <>
            <button onClick={handleSpinClick}>
                {isSpinning ? 'Stop spinning' : 'Spin 360°'}
            </button>
            <div
                className={`game-picture ${isSpinning ? 'spin' : ''}`}
                style={{backgroundImage: `url(${imageUrl})`}}
            ></div>
        </>
    )
}