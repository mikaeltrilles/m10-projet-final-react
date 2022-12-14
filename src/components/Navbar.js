import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="nav nav-pills nav-justified">
        <a className="nav-link active" aria-current="page" href="">Accueil</a>
        <a className="nav-link" href="">Gestion des Absences</a>
        <a className="nav-link" href="">Planning des absences</a>
        <a className="nav-link ">Jours Feriés</a>
      </nav>
    </div>
  );
};

export default Navbar;