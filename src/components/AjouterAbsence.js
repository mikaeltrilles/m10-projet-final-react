import axios from "axios";
import { useNavigate } from "react-router-dom";

const AjouterAbsence = ({ renderNewAbsence }) => {
    const navigate = useNavigate();

    const utilisateur = JSON.parse(localStorage.getItem('user'));

    const handleSubmit = (e) => {
        e.preventDefault()

        // transformer la périod d'Absence en list de jour d'absence
        let arr = [];
        for (let dt = new Date(e.target.date_debut.value); dt <= new Date(e.target.date_fin.value); dt.setDate(dt.getDate() + 1)) {
            arr.push(new Date(dt));
        }

        const form = {
            dateDebut: e.target.date_debut.value,
            dateFin: e.target.date_fin.value,
            type: e.target.type_conges.value,
            motif: e.target.motif_conges.value,
            statut: "INITIALE",
            idEmploye: utilisateur.userId,
            departement: utilisateur.departement,
            nom: utilisateur.nom,
            prenom: utilisateur.prenom,
            jours: arr,
            createdAt: new Date()
        }

        axios.post('http://127.0.0.1:3001/api/absences', form)
            .then(response => {
                navigate('/')
                renderNewAbsence();
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1 className="fs-3 mb-5">Demande D'absence</h1>

            <form onSubmit={handleSubmit} method="POST" id="form" className="m-auto w-50 ">
                <div className="mb-3 d-flex justify-content-center">
                    <label htmlFor="exampleFormControlInput1" className="form-label w-25">Date de début</label>
                    <input type="date" name="date_debut" className="form-control w-50" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <label htmlFor="exampleFormControlInput1" className="form-label w-25">Date de fin</label>
                    <input type="date" name="date_fin" className="form-control w-50" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <label htmlFor="exampleFormControlInput1" className="form-label w-25">Type de congés</label>
                    <select name="type_conges" className="form-select w-50" aria-label="Default select example">
                        <option defaultValue>Type de congés</option>
                        <option value="RTT">RTT</option>
                        <option value="Congés Payés">Congés Payés</option>
                        <option value="Congé sans solde">Congé sans solde</option>
                    </select>
                </div>
                {/* TODO Si le type de conges est "conges sans solde" le motif est obligatoire */}
                <div className="mb-3 d-flex justify-content-center">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label w-25">Motif</label>
                    <textarea name="motif_conges" className="form-control w-50" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="my-4 d-flex gap-5 justify-content-center">
                    <button type="button" className="btn btn-danger" onClick={() => navigate("/")}>
                        Annuler
                    </button>
                    <button type="submit" className="btn btn-success">
                        Valider
                    </button>
                </div>
            </form>
        </>
    );
};

export default AjouterAbsence;