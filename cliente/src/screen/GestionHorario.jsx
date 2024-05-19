import React from "react";
import { Horario } from "../Componentes/horario.jsx";
import { NavBar } from "../Componentes/Nav.jsx";

 function GestionHorario(){

    return (
        <React.Fragment>
            <NavBar></NavBar>
            <Horario></Horario>
        </React.Fragment>
    );

}

export default GestionHorario