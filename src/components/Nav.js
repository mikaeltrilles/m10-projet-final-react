import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AjouterAbsence from './AjouterAbsence';
import ErrorPage from './ErrorPage';
import Gestion from './Gestion';
import ModifierAbsence from './ModifierAbsence';
import PlanningAbsences from './PlanningAbsences';
import Modal from './Modal';
import axios from 'axios';
import Validation from './Validation';
import JourFeries from './JourFeries';
import Synthese from './Synthese';


const Nav = () => {

    const utilisateur = JSON.parse(localStorage.getItem('user'));

    const backendUrl = 'http://127.0.0.1:3001/api/';

    const fetchData = () => {
        axios.get(backendUrl + 'absences', {
            headers: {
                'Authorization': `Basic ${utilisateur.token}`
            }
        })
            .then(res => setAbsences(res.data))
            .catch(err => console.log(err))
    }

    const [absences, setAbsences] = useState([]);

    const [congeModi, setCongeModi] = useState({});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => fetchData(), []);

    const deleteConge = (id) => {
        axios.delete(`http://127.0.0.1:3001/api/absences/${id}`)
            .then(() => { setAbsences(absences.filter(abs => abs._id !== id)) })
            .catch(err => console.log(err))
    }

    // appeler renderNewAbsence dans component AjouterAbsence pour render new absence list une fois qu'on a ajouter une nouvelle absence dans DB
    const renderNewAbsence = () => {
        fetchData();
    }

    return (
        <div>
            <nav className="navbar bg-light justify-content-center gap-5 m-5">
                <Link className="nav-link" to="/">Gestion des absences</Link>
                <Link className="nav-link" to="/absences">Planning des absences</Link>
                {/* ROLE_MANAGER */}
                {utilisateur.role === 'ROLE_MANAGER' &&
                    <>
                        <Link className="nav-link" to="/validation">Validation demandes</Link>
                        <Link className="nav-link" to="/synthese">Vues synthétique</Link>
                    </>

                }
                <Link className="nav-link" to="/jourferies">Fériés/RTT</Link>
 
            </nav>
            <Routes>
                <Route index element={<Gestion absences={absences} setCongeModi={setCongeModi} />} />
                <Route path="/" element={<Gestion absences={absences} setCongeModi={setCongeModi} />} />
                <Route path="absences" element={<PlanningAbsences />} />
                <Route path="ajout" element={<AjouterAbsence renderNewAbsence={renderNewAbsence} />} />
                <Route path="modify" element={<ModifierAbsence renderNewAbsence={renderNewAbsence} congeModi={congeModi} setCongeModi={setCongeModi} />} />
                <Route path="validation" element={<Validation setCongeModi={setCongeModi} />} />
                <Route path="jourferies" element={<JourFeries />} />
                <Route path="synthese" element={<Synthese />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Modal congeModi={congeModi} deleteConge={deleteConge} />
        </div>
    );
};

export default Nav;