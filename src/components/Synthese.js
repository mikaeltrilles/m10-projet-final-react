import React from 'react';
import { useState } from 'react';
import VueParDepartement from './VueParDepartement';
import Histogram from './Histogram';

const Synthese = () => {

    const [showVue, setShowVue] = useState(false);
    const [showHistogram, setShowHistogram] = useState(false);
    const [showSynthese, setShowSynthese] = useState(true);

    const handleShowVue = () => {
        setShowVue(true);
        setShowSynthese(false)
    }

    const handleShowHistogram = () => {
        setShowHistogram(true);
        setShowSynthese(false);
    }

    return (
        <div className='container'>

            {showVue && <VueParDepartement setShowVue={setShowVue} setShowSynthese = {setShowSynthese}/>}
            {showHistogram && <Histogram setShowHistogram = {setShowHistogram} setShowSynthese = {setShowSynthese}/>}
            {showSynthese &&
                <>
                    <h1 className='fs-3 mb-5'>Vue synthétique</h1>
                    <table className="table table-bordered w-50 m-auto">
                        <thead>
                            <tr>
                                <th scope="col">list des rapport</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Vue par département par jour et par collaborateur</td>
                                <td> <button className='btn btn-outline-secondary btn-sm ' onClick={handleShowVue}>👁️</button> </td>
                            </tr>
                            <tr>
                                <td>Histogramme par département et par jour</td>
                                <td> <button className='btn btn-outline-secondary btn-sm ' onClick={handleShowHistogram}>👁️</button> </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            }
        </div>

    );
};

export default Synthese;