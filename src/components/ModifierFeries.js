import React from 'react';
import moment from "moment";
import axios from "axios";


const ModifierFeries = ({ setShowModiFerieForm, jour, setJour, fetchData }) => {

    const date = moment(jour.date).format("YYYY-MM-DD");

    const handleChange = (e) => {
        if (e.target.name === "date") {
            setJour({ ...jour, date: e.target.value });
        }

        if (e.target.name === "type") {
            setJour({ ...jour, type: e.target.value });
        }

        if (e.target.name === "commentaire") {
            setJour({ ...jour, commentaire: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const JourFerie = {
            date: e.target.date.value,
            type: e.target.type.value,
            jour: new Date(e.target.date.value).toLocaleDateString('fr-FR', { weekday: 'long' }),
            year:new Date(e.target.date.value).getFullYear(),
            commentaire: e.target.commentaire.value,
        }

        console.log(JourFerie)

        axios.put(`http://127.0.0.1:3001/api/feries/${jour._id}`, JourFerie)
            .then( res => {
                console.log(res.data)
                setShowModiFerieForm(false)
                fetchData()
            })
            .catch(err => console.log(err))
      };   
    return (
        <div>
            <div className="" >
                <form onSubmit={handleSubmit} method="POST" id="form" className="m-auto w-50 ">
                    <div className="mb-3 d-flex justify-content-center">
                        <label htmlFor="exampleFormControlInput1" className="form-label w-25">Date</label>
                        <input type="date" name="date" className="form-control w-50" id="exampleFormControlInput1" value={date} onChange={handleChange} />
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <label htmlFor="exampleFormControlInput1" className="form-label w-25">Type</label>
                        <select name="type" className="form-select w-50" aria-label="Default select example" onChange={handleChange} >
                            {jour.type === 'RTT' ?
                                <>
                                    <option defaultValue>{jour.type}</option>
                                    <option value="Jour Férie">Jour Férie</option>

                                </>
                                :
                                <>
                                    <option defaultValue>{jour.type}</option>
                                    <option value="RTT">RTT</option>

                                </>

                            }
                        </select>
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label w-25">Commentaire</label>
                        <textarea name="commentaire" className="form-control w-50" id="exampleFormControlTextarea1" rows="3" value={jour.commentaire} onChange={handleChange}></textarea>
                    </div>
                    <div className="my-4 d-flex gap-5 justify-content-center">
                        <button type="button" className="btn btn-danger" onClick={() => { setShowModiFerieForm(false) }}>
                            Annuler
                        </button>
                        <button type="submit" className="btn btn-success" >
                            Modifier
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModifierFeries;
