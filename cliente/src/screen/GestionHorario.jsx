import React from "react";
import { Horario } from "../Componentes/horario.jsx";
import { NavBar } from "../Componentes/Nav.jsx";

function GestionHorario() {

    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="dv-container-week">
                <div className="fc-view-agendaWeek">
                    <Horario></Horario>
                </div>
            </div>
        </React.Fragment>
    );

}

export default GestionHorario