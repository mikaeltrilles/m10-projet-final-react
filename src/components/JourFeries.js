import React, { useEffect, useState } from 'react';
import AffichageJourFerie from './AffichageJourFerie';
import axios from 'axios'
// import { moment } from 'moment';

const JourFeries = () => {
    const [listJours, setListJours] = useState([])
    const utilisateur = JSON.parse(localStorage.getItem('user'));

     // Je recupere les jours feries de l'année selectionnée dans le select
    const [anneeSelectionnee, setAnneeSelectionnee] = useState(new Date().getFullYear());
    
    //  Je recupere les jours feries de l'année selectionnée dans le select
    const handleChange = (e) => {
        setAnneeSelectionnee(e.target.value)
    }

    console.log(anneeSelectionnee);


    useEffect(() => {
        axios.get(`https://calendrier.api.gouv.fr/jours-feries/metropole/${anneeSelectionnee}.json`)
        // console.log(anneeSelectionnee);
        // axios.get('https://calendrier.api.gouv.fr/jours-feries/metropole/2023.json')
            .then(res => {
                const listTotal = [];
                for (const property in res.data) {
                    // list.push(<AffichageJourFerie />)
                    const obj = {
                        id: crypto.randomUUID(),
                        date: property,
                        // J'affiche le jour en fonction de la date
                        jour: new Date(property).toLocaleDateString('fr-FR', { weekday: 'long' }),
                        commentaire: res.data[property],
                        type: 'Féries',

                    }
                    listTotal.push(obj)
                    // console.log(`${property}: ${listJours[property]}`);
                }

                // listRTT sera crée par ADMIN
                const listRTT = [
                    {
                        id: crypto.randomUUID(),
                        date: 'date1',
                        type: 'RTT Employeur',
                        jour: 'lundi',
                        commentaire: ''
                    },

                    {
                        id: crypto.randomUUID(),
                        date: 'date2',
                        type: 'RTT Employeur',
                        jour: 'lundi',
                        commentaire: ''
                    },
                ];

                setListJours([...listRTT, ...listTotal])
            })
            .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [anneeSelectionnee])


    return (
        <div className="container">
            {/* Je cree un select pour choisir l'année */}
            <select className="form-select" aria-label="Default select example" action={(e)=>handleChange()}>
            <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
                {/* la plage de sélection va de -20ans a +5ans */}
                {[...Array(26).keys()].map((i) => {
                    const year = new Date().getFullYear() - 20 + i;
                    return <option key={i} value={year}>{year}</option>
                })}
            </select>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Type</th>
                        <th scope="col">Jour</th>
                        <th scope="col">Commentaire</th>
                        {utilisateur.role === 'ROLE_ADMIN' && <th scope="col">Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {listJours.map(jour => (
                        <AffichageJourFerie key={jour.id} jour={jour} />
                    ))}

                </tbody>
            </table>
        </div >
    );
};

export default JourFeries;