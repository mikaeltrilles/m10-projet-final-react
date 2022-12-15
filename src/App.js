import './App.css';
import Login from './components/Login';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  const [isLog, setIsLog] = useState(false)

  function handleSetIsLog() {
    setIsLog(true);
    // console.log(isLog);
  }


  return (

    <div className="App">
      { }

      {(isLog) ?
        <>
          <h1>Bienvenue sur votre espace de gestion</h1>
          <BrowserRouter>
            <Nav />
          </BrowserRouter>
        </>
        :
        <>
          <h1>Projet Final GDA</h1>
          <Login setIsLog={handleSetIsLog} />
        </>
      }
      {/* <Gestion /> */}

    </div>
  );
}

export default App;
