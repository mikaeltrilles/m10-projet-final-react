import './App.css';
import Login from './components/Login';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  const [isLog, setIsLog] = useState(false)

  function handleSetIsLog() {
    setIsLog(true);
  }

  return (

    <div className="App">
      { }

      {(isLog) ?
        <>
          <BrowserRouter>
            <h1 className='m-5'>Bienvenue sur votre espace de gestion</h1>
            <Nav />
          </BrowserRouter>
        </>
        :
        <>
          <h1>Projet Final GDA</h1>
          <Login setIsLog={handleSetIsLog} />
        </>
      }

    </div>
  );
}

export default App;
