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

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  return (

    <div className="App">
      { }

      {(isLog) ?
        <>
          <BrowserRouter>
            <div className="d-flex justify-content-around align-items-center mt-2">
              <h1 className=''>Bienvenue sur votre espace de gestion</h1>
              {/* Affichage du nom et prenom de l'utilisateur connecté avec un bouton "Se Déconnecter" */}
              <span className='d-flex '>
                <h3 className='mx-2'>{user.prenom} {user.nom}</h3>
                <button className='btn btn-danger mx-2' onClick={() => {
                  localStorage.removeItem('user');
                  setIsLog(false);
                }}>Se déconnecter</button>
              </span>
            </div>
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
