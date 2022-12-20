import React, { useEffect, useState } from 'react';
import AffichageJourFerie from './AffichageJourFerie';
import AjouterFeriesRTT from './AjouterFeriesRTT';
import axios from 'axios'
import ModifierFeries from './ModifierFeries';


const JourFeries = () => {
    const utilisateur = JSON.parse(localStorage.getItem('user'));
    
    const [listJours, setListJours] = useState([])
    const [showFerieForm, setShowFerieForm] = useState(false);
    const [showModiFerieForm, setShowModiFerieForm] = useState(false);
    const [jour, setJour] = useState({})

    // Je recupere les jours feries de l'année selectionnée dans le select
    const [anneeSelectionnee, setAnneeSelectionnee] = useState(new Date().getFullYear());

    //  Je recupere les jours feries de l'année selectionnée dans le select
    const handleChange = (e) => {
        setAnneeSelectionnee(e.target.value)
    }

    const fetchData = () => {
        axios.get(`http://127.0.0.1:3001/api/feries/${anneeSelectionnee}`)
            .then(res => setListJours(res.data) )
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [anneeSelectionnee])

    const deleteJour = (id) => {
        axios.delete(`http://127.0.0.1:3001/api/feries/${id}`)
        .then(res => {
            setListJours(listJours.filter( jour => jour._id !== id ))
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="container">
            {/* Je cree un select pour choisir l'année */}
            <select className="form-select my-3 w-25 m-auto" aria-label="Default select example" onChange={handleChange}>
                <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
                {/* la plage de sélection va de -10ans a +5ans */}
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
                    {listJours.map(jour => (
                        <AffichageJourFerie key={jour._id} jour={jour} setShowModiFerieForm={setShowModiFerieForm}  setJour = {setJour} deleteJour = {deleteJour }/>
                    ))}

                </tbody>
            </table>

            {
                utilisateur.role === 'ROLE_ADMIN' ?
                (
                    showModiFerieForm ?
                    <ModifierFeries setShowModiFerieForm= {setShowModiFerieForm} jour = {jour} setJour={setJour} fetchData = {fetchData}/>
                    :
                    (showFerieForm ?
                        <AjouterFeriesRTT setShowFerieForm={setShowFerieForm} fetchData={fetchData} />
                        :
                        <div className="my-4 d-flex gap-2 justify-content-center">
                            Ajouter un jour férie ou un RTT emp
                            <button type="button" className="btn btn-success" onClick={() => { setShowFerieForm(true) }}>
                                +
                            </button>
                        </div>)
                )
                :
                null
            }

        </div >
    );
};

export default JourFeries;