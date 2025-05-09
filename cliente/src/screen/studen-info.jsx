import React, { useEffect } from "react"
import { NavBar } from '../Componentes/Nav.jsx'
import { Estudiante_list } from "../Componentes/estudiantes_list.jsx";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Barra_izq } from "../Componentes/barra_izq.jsx";
import { BtnOption } from "../Componentes/btn_nav.jsx";
import { Footer } from "../Componentes/footer.jsx";

export function StudeInfo() {

  const {id} = useParams()

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="mb-32">
        <Barra_izq></Barra_izq>
        <BtnOption materia={id} ></BtnOption>
          <div className="dv-center full-width alum-week-div" >
          <Estudiante_list consulta={`http://localhost:3000/api/get/asignatura/alumnos/${id}`} />
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );

}