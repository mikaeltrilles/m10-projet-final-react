import React, { useEffect, useState } from 'react';
import AffichageJourFerie from './AffichageJourFerie';
import AjouterFeriesRTT from './AjouterFeriesRTT';
import axios from 'axios'
// import { moment } from 'moment';

const JourFeries = () => {
    const [listJours, setListJours] = useState([])
    const utilisateur = JSON.parse(localStorage.getItem('user'));

    const [showFerieForm, setShowFerieForm] = useState(false);

    // Je recupere les jours feries de l'année selectionnée dans le select
    const [anneeSelectionnee, setAnneeSelectionnee] = useState(new Date().getFullYear());

    //  Je recupere les jours feries de l'année selectionnée dans le select
    const handleChange = (e) => {
        setAnneeSelectionnee(e.target.value)
    }

    const fetchData = () => {
        axios.get(`http://127.0.0.1:3001/api/feries/${anneeSelectionnee}`)
            // console.log(anneeSelectionnee);
            // axios.get('https://calendrier.api.gouv.fr/jours-feries/metropole/2023.json')
            .then( res => {
                setListJours(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [anneeSelectionnee])


    return (
        <div className="container">
            {/* Je cree un select pour choisir l'année */}
            <select className="form-select my-3 w-25 m-auto" aria-label="Default select example" onChange={handleChange}>
                <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
                {/* la plage de sélection va de -20ans a +5ans */}
                {[...Array(15).keys()].map((i) => {
                    const year = new Date().getFullYear() - 10 + i;
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
                    {listJours.map( jour => (
                        <AffichageJourFerie key={jour._id} jour={jour} />
                    ))}

                </tbody>
            </table>


            {showFerieForm ?
                <AjouterFeriesRTT setShowFerieForm = {setShowFerieForm} fetchData={fetchData}/>
                :

                <div className="my-4 d-flex gap-2 justify-content-center">
                    Ajouter un jour férie ou un RTT emp
                    <button type="button" className="btn btn-success" onClick={() => { setShowFerieForm(true) }}>
                        +
                    </button>
                </div>
            }


        </div >
    );
};

export default JourFeries;