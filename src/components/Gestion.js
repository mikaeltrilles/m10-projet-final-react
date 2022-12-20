import { Link } from 'react-router-dom';
import AffichageAbsences from './AffichageAbsences';
import { useState, useEffect } from 'react';

function Gestion({ absences, setCongeModi }) {
  // console.log(absences)

  // Calcul des jours de conges restants
  const [joursRestants, setJoursRestants] = useState(0);
  const [rttRestants, setRttRestants] = useState(0);

  useEffect(() => {
    const joursRestants = 25 - absences.filter(abs => abs.type === 'Congés Payés').length;
    const rttRestants = 6 - absences.filter(abs => abs.type === 'RTT').length;
    setJoursRestants(joursRestants);
    setRttRestants(rttRestants);
  }, [absences])

  // je recupere les absence de l'année en cours
  const absencesAnneeEnCours = absences.filter(abs => {
    const dateDebut = new Date(abs.dateDebut);
    const dateFin = new Date(abs.dateFin);
    const anneeEnCours = new Date().getFullYear();
    return dateDebut.getFullYear() === anneeEnCours || dateFin.getFullYear() === anneeEnCours;
  })


  // je comptabilise les jopuors de congés payés
  const congesAnneeEnCours = absencesAnneeEnCours.filter(abs => abs.type === 'Congés Payés' && abs.statut === 'VALIDEE');
  const joursCongesAnneeEnCours = congesAnneeEnCours.reduce((acc, abs) => {
    const dateDebut = new Date(abs.dateDebut);
    const dateFin = new Date(abs.dateFin);
    const nbJours = (dateFin - dateDebut) / (1000 * 3600 * 24) + 1;
    return acc + nbJours;
  }, 0)


  // je recupere les rtt de l'année en cours
  const rttAnneeEnCours = absencesAnneeEnCours.filter(abs => abs.type === 'RTT' && abs.statut === 'VALIDEE');
  const joursRttAnneeEnCours = rttAnneeEnCours.reduce((acc, abs) => {
    const dateDebut = new Date(abs.dateDebut);
    const dateFin = new Date(abs.dateFin);
    const nbJours = (dateFin - dateDebut) / (1000 * 3600 * 24) + 1;
    return acc + nbJours;
  }, 0)

  console.log("joursCongesAnneeEnCours", joursCongesAnneeEnCours)
  console.log("joursRttAnneeEnCours", joursRttAnneeEnCours)



  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Date de début</th>
            <th scope="col">Date de fin</th>
            <th scope="col">Type</th>
            <th scope="col">Statut</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {absences.map(abs => (
            <AffichageAbsences
              key={abs._id}
              absence={abs}
              deleteConge={() => {
                // quand clicquer le supprimer, actualise state congeModi pour le component Modal 
                setCongeModi(abs);
              }}
              handleSetCongeModi={() => {
                setCongeModi(abs)
              }}

            />
          ))}
        </tbody>
      </table>
      <Link to="/ajout"><button type="submit" className="btn btn-info">➕ Demande d'absence</button></Link>
      {/* Affichage des jours de congés restant et de RTT restant */}
      <div className="col-6">
        <h3 className="text-start">Jours de congés restant</h3>
        <p className="text-start">Il vous reste {25 - joursCongesAnneeEnCours} jours de congés</p>
      </div>
      <div className="col-6">
        <h3 className="text-start">RTT restant</h3>
        <p className="text-start">Il vous reste {6 -joursRttAnneeEnCours } jours de RTT</p>
      </div>
    </div >
  );
};
export default Gestion