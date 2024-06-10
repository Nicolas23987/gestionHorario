import React, { useEffect } from "react"
import { NavBar } from '../Componentes/Nav.jsx'
import { Estudiante_list } from "../Componentes/estudiantes_list.jsx";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Barra_izq } from "../Componentes/barra_izq.jsx";
import { BtnOption } from "../Componentes/btn_info.jsx";

export function StudeInfo() {

  const [mostrarHorario, setMostrarHorario] = useState(true);
  const [mostrarList, setMostrarList] = useState(true);

  const location = useLocation()
  const materia = location.state;
  console.log(location)

  const [isVisible, setIsVisible] = useState(false);
  const [isColor, setColor] = useState(false);

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container-if">
        <Barra_izq></Barra_izq>
        <BtnOption></BtnOption>
          <div className="dv-center full-width alum-week-div" >
          <Estudiante_list id_materia={materia.materia_id} />
        </div>
      </div>
    </React.Fragment>
  );

}