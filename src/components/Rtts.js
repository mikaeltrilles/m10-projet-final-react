import React from 'react';

const Rtts = () => {


  //TODO - Appel à l'api pour récupérer les jours Féries

  //TODO - Post pour ecriture en base de donnée

  //TODO - Get pour recuperer les jours feries de éventuellement modifiés par l'admin


  return (
    <div>
      <select className="form-select mx-5 text-center" aria-label="Default select example" onChange={{/* APPEL A LA FONCTION */ }} >
        <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
        {[...Array(26).keys()].map((i) => {
          const year = new Date().getFullYear() - 20 + i;
          return <option key={i} value={year}>{year}</option>
        })}
      </select>
    </div>
  );
};

export default Rtts;