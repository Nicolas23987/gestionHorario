import React, { useEffect } from "react"
import { NavBar } from '../Componentes/Nav.jsx'
// import { useLocation } from "react-router-dom"
// import { useState, useEffect } from "react";
// import  Axios  from "axios";
import { Tarjet } from "../Componentes/docente_tarjet.jsx";
import { Estudiante_list } from "../Componentes/estudiantes_list.jsx";
import { Horario } from "../Componentes/horario.jsx";
import { useState } from "react";
import { useLocation } from "react-router-dom";
// import LoadingScreen from '../Componentes/loanding.jsx';





function Informacion() {

     const toggleLista = () => {
      setIsVisible(!isVisible); // Cambiar el estado de isVisible al valor opuesto
    }; 
  const [mostrarHorario, setMostrarHorario] = useState(true);
  const [mostrarList, setMostrarList] = useState(true);

  const location = useLocation()
  const id_materia = location.state;
  console.log(location.state)

    console.log(id_materia)
    const [isVisible, setIsVisible] = useState(false);
  



  useEffect(() => {


  }, []);

//  console.log(id_materia)
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container-if">


        <div className="container-list">
          <div className="tj-container">
            <Tarjet id_materia={id_materia} />
          </div>
          <div className="dv-container-week">
        <div className="dv-container-selec">
          <button className="" onClick={toggleLista}>
            Horario
          </button>
          <a href="#">
            <button onClick={toggleLista}>
              Participantes
            </button>
          </a>
          
        </div>   
        <div className="contenedor-he">         
               <div className="horario" style={{ display: isVisible ? 'none' : 'block' }}>
                 {<Horario  id_materia={id_materia} />}
               </div>
               <div className="horario" style={{ display: isVisible ? 'block' : 'none' }}>
                {<Estudiante_list id="listEstudiantes" id_materia={id_materia}/>}
               </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
     
    
}

    export default Informacion;