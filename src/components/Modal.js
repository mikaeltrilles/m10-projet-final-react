import React from "react";
import moment from "moment";

const Modal = ({congeModi,deleteConge}) => {

  return (
    <div className="modal fade" id="exampleModal" tabIndex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmation de suppression</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Confirmez-vous la suppression de la demande suivante ?</p>
            <p>Date de début : {moment(congeModi.dateDebut).format("YYYY-MM-DD")}</p>
            <p>Date de fin : {moment(congeModi.dateFin).format("YYYY-MM-DD")}</p>
            <p>Type de congé : {congeModi.type}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Annuler
            </button>
            <button 
            type="button" 
            className="btn btn-primary" 
            data-bs-dismiss="modal"
            onClick = {() => { deleteConge(congeModi._id) }}
            >
              Valider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
