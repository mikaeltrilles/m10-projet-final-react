import axios from "axios";
import { useNavigate } from "react-router-dom";

const AjouterAbsence = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = {
            dateDebut: e.target.date_debut.value,
            dateFin: e.target.date_fin.value,
            type: e.target.type_conges.value,
            motif: e.target.motif_conges.value,
            statut: "INITIALE",
            idEmploye: localStorage.getItem('user_id')
        }
        axios.post('http://127.0.0.1:3001/creationAbsence', form)
            .then((response) => {
                console.log('hnjgreiuorheqgmoùijnrehqjiù^rheq');
                console.log(response);
                navigate('/')
            })
    }

    return (
        <>
            <h1>Ajout</h1>

            <form onSubmit={handleSubmit} method="POST" id="form" className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Date de début</label>
                    <input type="date" name="date_debut" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Date de fin</label>
                    <input type="date" name="date_fin" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <select name="type_conges" className="form-select" aria-label="Default select example">
                        <option defaultValue>Type de congés</option>
                        <option value="RTT">RTT</option>
                        <option value="Congés Payés">Congés Payés</option>
                        <option value="Congés sans soldes">Congés sans soldes</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Motif</label>
                    <textarea name="motif_conges" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};

export default AjouterAbsence;