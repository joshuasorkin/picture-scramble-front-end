import GamePicture from './components/GamePicture/GamePicture';
import CheckButton from './components/CheckButton/CheckButton';
import PlayerInput from './components/PlayerInput/PlayerInput';
import Scramble from './components/Scramble/Scramble';
import React, {useState} from 'react';

function App() {
  const [isLoading,setIsLoading] = useState(false);
  
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
