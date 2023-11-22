import Header from './components/Header/Header';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Chat from './components/Chat/Chat';
import Home from './components/Home/Home';
import DataDisplay from './components/DataDisplay/DataDisplay';
import {Route,Routes} from 'react-router-dom';

function App() {
  return(
    <>
        <SocketContext.Provider value={socket}>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<RegistrationForm />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/display" element={<DataDisplay />} />
            </Routes>
          </div>
        </SocketContext.Provider>
    </>
  )
}  
export default App;
