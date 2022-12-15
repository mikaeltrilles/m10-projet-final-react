import { Routes, Route, Link } from 'react-router-dom';
import AjouterAbsence from './AjouterAbsence';
import ErrorPage from './ErrorPage';
import Gestion from './Gestion';
import PlanningAbsences from './PlanningAbsences';

const Nav = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/absences">Planning</Link>
                {/* <Link to="/congé">gestion congé</Link> */}
                <Routes>
                    <Route index element={<Gestion />} />
                    <Route path="/" element={<Gestion />} />
                    <Route path="absences" element={<PlanningAbsences />} />
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="ajout" element={<AjouterAbsence />} />
                </Routes>
            </nav>
        </div>
    );
};

export default Nav;