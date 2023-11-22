import GamePicture from './components/GamePicture/GamePicture';
import CheckButton from './components/CheckButton/CheckButton';
import PlayerInput from './components/PlayerInput/PlayerInput';
import Scramble from './components/Scramble/Scramble';
import React, {useState, useEffect} from 'react';


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

function fetchGameData(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        scrambledWord:'xxyy',
        imageUrl:'test.jpg'
      });
    },2000);
  })
}

function App() {
  const [isLoading,setIsLoading] = useState(false);
  const [scrambledWord,setScrambledWord] = useState('');
  const [imageUrl,setImageUrl] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function startNewGame() {
      setIsLoading(true);
      try{
        const {scrambledWord, imageUrl} = await fetchGameData();
        setScrambledWord(scrambledWord);
        setImageUrl(imageUrl);
        setMessage('');
      }
      catch (error){
        console.error(error);
        setMessage('Error occured.');
      }
      finally{
        setIsLoading(false);
      }
    }
  })
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
      <GamePicture imageUrl={imageUrl} />
      <Scramble scrambledWord={scrambledWord} />
      <PlayerInput />
      <CheckButton onClick={handleCheckButtonClick} disabled={isLoading} />
      <p>{message}</p>
    </>
  )
}  
export default App;
