import GamePicture from './components/GamePicture/GamePicture';
import CheckButton from './components/CheckButton/CheckButton';
import PlayerInput from './components/PlayerInput/PlayerInput';
import Scramble from './components/Scramble/Scramble';
import React, {useState, useEffect} from 'react';
import './App.css';


function checkInput(inputValue){
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve({
          status:'success',
          message: `Input value '${inputValue}' checked.`
        });
      },2000
    )
  });
}

/*
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
*/

function fetchGameData() {
  console.log("constructing url...");
  const apiUrl = process.env.REACT_APP_SERVER_URI + "/new-game";
  console.log({ apiUrl });
  return fetch(apiUrl, {
    method: 'GET',
    mode: 'cors'
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Convert to JSON first
  })
  .then((data) => {
    console.log("response:", data); // Log the JSON response
    console.log({ data });
    return data;
  })
  .catch((error) => {
    console.error('Error fetching game data:', error);
    throw error;
  });
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
        console.log("fetching game data...");
        const gameData = await fetchGameData();
        setScrambledWord(gameData.scramble);
        setImageUrl(gameData.picture);
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
    startNewGame();
  },[]);

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
      <div className='input-section'>
        <GamePicture imageUrl={imageUrl} />
        <Scramble word={scrambledWord} />
        <PlayerInput />
        <CheckButton onClick={handleCheckButtonClick} disabled={isLoading} />
      </div>
      <p>{message}</p>
    </>
  )
}  
export default App;
