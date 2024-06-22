import React, { useEffect } from "react"
import { NavBar } from '../Componentes/Nav.jsx'
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Barra_izq } from "../Componentes/barra_izq.jsx";
import { BtnOption } from "../Componentes/btn_info.jsx";
import { DocenteInfo } from "../Componentes/docente_info.jsx";
import { Footer } from "../Componentes/footer.jsx";
import { Horario } from "../Componentes/horario.jsx";

export function TeacherInfo() {

    const [mostrarHorario, setMostrarHorario] = useState(true);
    const [mostrarList, setMostrarList] = useState(true);

    const location = useLocation()
    const id_materia = location.state;
    console.log(location.state)


    const {id} = useParams()
    console.log(id)

    return (
        <React.Fragment>
            <NavBar></NavBar>
            <BtnOption materia={id} />
            {/* {id_materia === null ? ( */}
            {/* <div><h1 className="text-black w-screen h-screen flex items-center justify-center text-4xl font-bold" >Sin docente</h1></div> */}
            {/* // ) : ( */}
            <div>

                <div className="mb-16">
                    <Barra_izq></Barra_izq>
                    {/* <BtnOption/> */}
                    <DocenteInfo id={id} />
                </div>
                <div className="w-full flex justify-center">
                    {/* <div className="flex mb-32 w-11/12 max-w-4xl rounded-xl flex-col items-center justify-center p-6 m-4 shadow-lg ">
                        <h2 className="text-3xl font-bold mb-2 text-black ">Horario</h2>
                        <Horario consulta={`http://localhost:3000/api/get/docente/materia/${id}`} />
                    </div> */}
                </div>
            </div>
            {/* )} */}
            < Footer />

        </React.Fragment>
    );

}