import GamePicture from './components/GamePicture/GamePicture';
import CheckButton from './components/CheckButton/CheckButton';
import PlayerInput from './components/PlayerInput/PlayerInput';
import Scramble from './components/Scramble/Scramble';

function App() {
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
