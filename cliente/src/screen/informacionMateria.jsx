import React from "react"
import { NavBar } from '../Componentes/Nav.jsx'
// import { useLocation } from "react-router-dom"
// import { useState, useEffect } from "react";
// import  Axios  from "axios";
import { Tarjet } from "../Componentes/docente_tarjet.jsx";
import { Estudiante_list } from "../Componentes/estudiantes_list.jsx";
import { Horario } from "../Componentes/horario.jsx";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Informacion() {

  const location = useLocation()
  const id_materia = location.state && location.state.materiaId;

  const [mostrarHorario, setMostrarHorario] = useState(true);
  const [mostrarList, setMostrarList] = useState(true);

  const toggleHorario = () => {
    setMostrarHorario(!mostrarHorario);
    // setMostrarList(!mostrarList)
  };
  const toggleList =() => {
    // setMostrarHorario(!mostrarHorario);
    setMostrarList(!mostrarList)
  };
//  console.log(id_materia)
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container-if">
        <div className="dv-container-selec">
          <button onClick={toggleHorario}>
            Horario
          </button>
          <a href="#">
            <button onClick={toggleList}>
              Participantes
            </button>
          </a>
        </div>

        <div className="container-list">
          <div className="tj-container">
            <Tarjet id_materia={id_materia} />
          </div>
          <div className="dv-container-week">
            {mostrarHorario && <Horario id_materia={id_materia} />}
            {!mostrarList && <Estudiante_list id_materia={id_materia}/>}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
     
    
}

    export default Informacion;