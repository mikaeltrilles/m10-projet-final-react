import React from 'react';

const VueParDepartement = ({setShowVue, setShowSynthese}) => {
    
    const handleClick = () => {
        setShowVue(false); 
        setShowSynthese(true)
    }
    return (
        <div>
            <div>
            Super Vue par département par jour et par collaborateur
            </div>
           

            <button className='btn btn-primary btn-sm' onClick = {handleClick}> retour </button>
        </div>
    );
};

export default VueParDepartement;