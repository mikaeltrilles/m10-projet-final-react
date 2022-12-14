import './App.css';
import Login from './components/Login';
import Gestion from './components/Gestion';
import { useState } from 'react';
import Navbar from './components/Navbar';

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
          <Navbar />
          <Gestion />
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
