import React, { useEffect } from "react"
import { NavBar } from '../Componentes/Nav.jsx'
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Barra_izq } from "../Componentes/barra_izq.jsx";
import { BtnOption } from "../Componentes/btn_info.jsx";
import { Tarjet } from "../Componentes/docente_tarjet.jsx";

export function TeacherInfo() {

    const [mostrarHorario, setMostrarHorario] = useState(true);
    const [mostrarList, setMostrarList] = useState(true);

    // const location = useLocation()
    // const id_materia = location.state;
    // console.log(location)

    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="container-if">
                <Barra_izq></Barra_izq>
                <BtnOption
                // state={{materia: materia.materia_id, nombre: materia.nombre}}
                ></BtnOption>
                <h1 style={{ color: 'black' }} >Informacion del docente</h1>
                <Tarjet  id_materia={'2'} /> 
            </div>
        </React.Fragment>
    );

}