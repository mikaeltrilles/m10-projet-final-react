import React from 'react';
import axios from "axios";

const AjouterFeriesRTT = ({setShowFerieForm, fetchData}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowFerieForm(false);

        const JourFerie = {
            date: e.target.date.value,
            type: e.target.type.value,
            jour: new Date(e.target.date.value).toLocaleDateString('fr-FR', { weekday: 'long' }),
            year:new Date(e.target.date.value).getFullYear(),
            commentaire: e.target.commentaire.value,
        }

        axios.post(`http://127.0.0.1:3001/api/feries`, JourFerie)
            .then( res => {
                fetchData()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="" >
            <form  onSubmit={handleSubmit} method="POST" id="form" className="m-auto w-50 ">
                <div className="mb-3 d-flex justify-content-center">
                    <label htmlFor="exampleFormControlInput1" className="form-label w-25">Date</label>
                    <input type="date" name="date" className="form-control w-50" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <label htmlFor="exampleFormControlInput1" className="form-label w-25">Type</label>
                    <select name="type" className="form-select w-50" aria-label="Default select example">
                        <option defaultValue>Type</option>
                        <option value="RTT">Jour Férie</option>
                        <option value="Congés Payés">RTT Employeur</option>
                    </select>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label w-25">Commentaire</label>
                    <textarea name="commentaire" className="form-control w-50" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="my-4 d-flex gap-5 justify-content-center">
                    <button type="button" className="btn btn-danger" onClick={()=>{setShowFerieForm(false)}}>
                        Annuler
                    </button>
                    <button type="submit" className="btn btn-success" >
                        Valider
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AjouterFeriesRTT;