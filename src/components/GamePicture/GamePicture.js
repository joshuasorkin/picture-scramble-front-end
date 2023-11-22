import React, {useState} from 'react';
import './GamePicture.css';

export default function GamePicture({imageUrl}){
    console.log("Image url:",imageUrl);
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