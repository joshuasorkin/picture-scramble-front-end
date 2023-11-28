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
  const apiUrl = 'https://your-api-server.com/game-data'; // Replace with your actual API endpoint

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Assuming the response contains scrambledWord and imageUrl properties
      const { scrambledWord, imageUrl } = data;
      return { scrambledWord, imageUrl };
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
