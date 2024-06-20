import React, { useEffect } from "react"
import { NavBar } from '../Componentes/Nav.jsx'
import { Docentes_list } from "../Componentes/docente_list.jsx";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Barra_izq } from "../Componentes/barra_izq.jsx";
import { BtnOption } from "../Componentes/btn_info.jsx";
import { Footer } from "../Componentes/footer.jsx";

export function Docentes() {

  const [mostrarHorario, setMostrarHorario] = useState(true);
  const [mostrarList, setMostrarList] = useState(true);

  const [isVisible, setIsVisible] = useState(false);
  const [isColor, setColor] = useState(false);


  const {id} = useParams()
  console.log(id)

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="mb-32">
        <Barra_izq></Barra_izq>
        {/* <BtnOption materia={id}></BtnOption> */}
          <div className="dv-center full-width alum-week-div" >
          <Docentes_list/>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );

}