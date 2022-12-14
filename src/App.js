import './App.css';
import Login from './components/Login';
import Gestion from './components/Gestion';
import { useState } from 'react';

function App() {
  const [isLog, setIsLog] = useState(false)

  function handleSetIsLog() {
    setIsLog(true);
    // console.log(isLog);
  }


  return (

    <div className="App">
      <h1>Welcome</h1>
      {/* Si le login est ok alors je renvoi vers la page de gestion */}


      {(isLog) ? <Gestion /> : <Login setIsLog={handleSetIsLog} />}
      {/* <Gestion /> */}
    </div>
  );
}

export default App;
