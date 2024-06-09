

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



export function WeekInfo() {
    // console.log(id_materia)

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
    console.log(location.state)

 

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
                            <button className="">
                                <Link to='/materia/docente' state={materia.materia_id} >
                                    <div className="container-icon">
                                        <img className="imgStudents" src={iconTeacher} alt="" />
                                    </div>
                                </Link>
                            </button>

                            <button className="btn-icon">
                                <Link >
                                    <div className="container-icon">
                                        <img className="" src={iconWeek} alt="" />
                                    </div>
                                </Link>
                            </button>

                            <button>
                                <Link to="/materia/estudiantes" state={{materia: materia.materia_id , nombre: materia.nombre} }>
                                    <div className="container-icon">
                                        <img className="imgStudents" src={iconStudents} alt="" />
                                    </div>
                                </Link>
                            </button>

                        </div>

                        <div className="tj-container">
                        </div>

                        <div className="dv-center dv-start" style={{ display: isVisible ? 'none' : 'block' }}>
                            <div className="dv-center">
                                {<Horario id_materia={materia.materia_id} />}
                            </div>
                            

                        </div>
                        {/* <div className="div-center dv-start">
                            {<Estudiante_list id="listEstudiantes"/>}
                        </div> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}