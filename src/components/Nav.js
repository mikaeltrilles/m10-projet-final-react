import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AjouterAbsence from './AjouterAbsence';
import ErrorPage from './ErrorPage';
import Gestion from './Gestion';
import ModifierAbsence from './ModifierAbsence';
import PlanningAbsences from './PlanningAbsences';
import axios from 'axios';

const Nav = () => {

    const backendUrl = 'http://127.0.0.1:3001/'

    const fetchData = () => {
        axios.get(backendUrl + 'absences')
            .then(res => {
                setAbsences(res.data)
            })
            .catch(err => console.log(err))
    }

    const [absences, setAbsences] = useState([])
    useEffect(() => fetchData(), [])

    const [congeModi, setCongeModi] = useState({})

    const deleteConge = (id) => {
        axios.delete(`http://127.0.0.1:3001/delete/${id}`)
            .then(() => {
                setAbsences(absences.filter(abs => abs._id !== id))
            })
            .catch(err => console.log(err))
    }

    // appeler renderNewAbsence dans component AjouterAbsence pour render new absence list une fois qu'on a ajouter une nouvelle absence dans DB
    const renderNewAbsence = () => {
        fetchData();
    }

    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/absences">Planning</Link>
                {/* <Link to="/congé">gestion congé</Link> */}
                <Routes>
                    <Route index element={<Gestion absences={absences} deleteConge={deleteConge} setCongeModi={setCongeModi} />} />
                    <Route path="/" element={<Gestion absences={absences} deleteConge={deleteConge} setCongeModi={setCongeModi} />} />
                    <Route path="absences" element={<PlanningAbsences />} />
                    <Route path="ajout" element={<AjouterAbsence renderNewAbsence={renderNewAbsence} />} />
                    <Route path="modify" element={<ModifierAbsence renderNewAbsence={renderNewAbsence} congeModi={congeModi} setCongeModi={setCongeModi} />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </nav>
        </div>
    );
};

export default Nav;