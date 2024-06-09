import React, { useEffect } from "react"
import { NavBar } from '../Componentes/Nav.jsx'
// import { useLocation } from "react-router-dom"
// import { useState, useEffect } from "react";
// import  Axios  from "axios";
import { Tarjet } from "../Componentes/docente_tarjet.jsx";
import { Estudiante_list } from "../Componentes/estudiantes_list.jsx";
import { Horario } from "../Componentes/horario.jsx";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import LoadingScreen from '../Componentes/loanding.jsx';]
import { Barra_izq } from "../Componentes/barra_izq.jsx";
import iconStudents from '../img/school_students.svg'
import iconWeek from '../img/calendar-week.svg'
import iconTeacher from '../img/teacher.svg'



export function StudeInfo() {


  const toggleLista = () => {
    // if(isVisible){
    setIsVisible(!isVisible); // Cambiar el estado de isVisible al valor opuesto
    // }else{
    // setColor(!isColor);
    // }
  };
  const toggleColor = () => {
    // if(isColor){
    setColor(!isColor); // Cambiar el estado de isVisible al valor opuesto      
    // }

  };
  const [mostrarHorario, setMostrarHorario] = useState(true);
  const [mostrarList, setMostrarList] = useState(true);

  const location = useLocation()
  const materia = location.state;
  console.log(location)

  // console.log(id_materia)

  const [isVisible, setIsVisible] = useState(false);
  const [isColor, setColor] = useState(false);




  useEffect(() => {


  }, []);

  //  console.log(id_materia)
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container-if">
        <Barra_izq></Barra_izq>
        <div className="container-list">
          <div className="full-width if-materia" >
            {materia.nombre}
          </div>
          <div className="dv-container-week">
            <div className="dv-container-selec">
              <button className=""
              //  style={{borderBottom: isColor ? 'none' : '4px solid blueviolet',}} onClick={()=>{ 
              //   toggleColor() ,toggleLista()}}
              >
                <Link state={{materia: materia.materia, nombre: materia.nombre}} to='/materia/docente'>
                  <div className="container-icon">
                    <img className="imgStudents" src={iconTeacher} alt="" />
                  </div>
                </Link>
              </button>

              <button className=""
              //  style={{borderBottom: isColor ? '4px solid blueviolet' : '4px solid blueviolet',}} onClick={()=>{ 
              //   toggleColor() ,toggleLista()}}
              >
                <Link to='/materia/horario' state={materia.materia}>
                  <div className="container-icon">
                    <img className="" src={iconWeek} alt="" />
                  </div>
                </Link>
              </button>

              <button className="btn-icon"
              // style={{borderBottom: '4px solid blueviolet'}}
              >
                <Link to="/materia/estudiantes">
                  <div className="container-icon">
                    <img className="imgStudents" src={iconStudents} alt="" />
                  </div>
                </Link>
              </button>
            </div>
            <div className="tj-container">
            </div>
            <div className="dv-center dv-start alum-week-div" >
              {<Estudiante_list id_materia={materia.materia_id} />}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );


}

// export default Informacion;