import GamePicture from './components/GamePicture/GamePicture';
import CheckButton from './components/CheckButton/CheckButton';
import PlayerInput from './components/PlayerInput/PlayerInput';
import Scramble from './components/Scramble/Scramble';
import React, {useState} from 'react';


function checkInput(inputValue){
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve({
          status:'success',
          message: `Input value '${inputValue}' checked.`
        },2000);
      }
    )
  });
}

function App() {
  const [isLoading,setIsLoading] = useState(false);
  const handleCheckButtonClick = (inputValue) => {
    setIsLoading(true);

  }

  return(
    <>
      <GamePicture />
      <Scramble />
      <PlayerInput />
      <CheckButton />
    </>
  )
}  
export default App;
