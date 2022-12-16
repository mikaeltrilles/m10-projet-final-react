import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const ModifierAbsence = ({ congeModi, renderNewAbsence, setCongeModi }) => {
  console.log(congeModi);
  const navigate = useNavigate();
  const dateDebut = moment(congeModi.dateDebut).format("YYYY-MM-DD");
  const dateFin = moment(congeModi.dateFin).format("YYYY-MM-DD");

  const handleChange = (e) => {
    if (e.target.name === "date_debut") {
      setCongeModi({ ...congeModi, dateDebut: e.target.value });
    }

    if (e.target.name === "date_fin") {
      setCongeModi({ ...congeModi, dateFin: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      dateDebut: e.target.date_debut.value,
      dateFin: e.target.date_fin.value,
      type: e.target.type_conges.value,
      motif: e.target.motif_conges.value,
      statut: "INITIALE",
      idEmploye: localStorage.getItem("user_id"),
    };

    axios
      .put(`http://127.0.0.1:3001/${congeModi._id}`, form)
      .then((response) => {
        renderNewAbsence();
        navigate("/");
      });
  };

  return (
    <>
      <h1>Ajout</h1>

      <form
        onSubmit={handleSubmit}
        method="POST"
        id="form"
        className="container"
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Date de début
          </label>
          <input
            type="date"
            name="date_debut"
            className="form-control"
            id="exampleFormControlInput1"
            value={dateDebut}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Date de fin
          </label>
          <input
            type="date"
            name="date_fin"
            className="form-control"
            id="exampleFormControlInput1"
            value={dateFin}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <select
            name="type_conges"
            className="form-select"
            aria-label="Default select example"
          >
            {congeModi.type === "RTT" && (
              <>
                <option defaultValue>{congeModi.type}</option>
                <option value="Congés Payés">Congés Payés</option>
                <option value="Congés sans soldes">Congés sans soldes</option>
              </>
            )}

            {congeModi.type === "Congés Payés" && (
              <>
                <option defaultValue>{congeModi.type}</option>
                <option value="RTT">RTT</option>
                <option value="Congés sans soldes">Congés sans soldes</option>
              </>
            )}

            {congeModi.type === "Congés sans soldes" && (
              <>
                <option defaultValue>{congeModi.type}</option>
                <option value="RTT">RTT</option>
                <option value="Congés Payés">Congés Payés</option>
              </>
            )}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Motif
          </label>
          <textarea
            name="motif_conges"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            defaultValue={congeModi.motif}
            onChange={() => {}}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ModifierAbsence;
