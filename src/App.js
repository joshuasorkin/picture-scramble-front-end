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
  const [message, setMessage] = useState('');

  const handleCheckButtonClick = async (inputValue) => {
    setIsLoading(true);

    try{
      const response = await checkInput(inputValue);
      console.log(response);
      setMessage(response.message);
    } catch (error) {
      console.error(error);
      setMessage('Error occured.');
    } finally{
      setIsLoading(false);
    }

  }

  return(
    <>
      <GamePicture />
      <Scramble />
      <PlayerInput />
      <CheckButton onClick={handleCheckButtonClick} disabled={isLoading} />
      <p>{message}</p>
    </>
  )
}  
export default App;
