

import React, { useEffect } from "react"
import { NavBar } from '../Componentes/Nav.jsx'
// import { useLocation } from "react-router-dom"
// import { useState, useEffect } from "react";
// import  Axios  from "axios";
// import { Tarjet } from "../Componentes/docente_tarjet.jsx";
import { Estudiante_list } from "../Componentes/estudiantes_list.jsx";
import { Horario } from "../Componentes/horario.jsx";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
// import LoadingScreen from '../Componentes/loanding.jsx';]
import { Barra_izq } from "../Componentes/barra_izq.jsx";

import { BtnOption } from "../Componentes/btn_info.jsx";
import { Footer } from "../Componentes/footer.jsx";
// import { useParams } from "react-router-dom";


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

    const { id } = useParams()


    const [isVisible, setIsVisible] = useState(false);
    const [isColor, setColor] = useState(false);




    useEffect(() => {


    }, []);

    //  console.log(id_materia)
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <Barra_izq />
            <div className="">
                <BtnOption materia={id} ></BtnOption>

                <div className="flex mb-32 w-full px-20  rounded-xl flex-col items-center justify-center p-6 m-4 shadow-lg ">
                    <h2 className="text-3xl font-bold mb-2 text-black ">Horario</h2>
                    <Horario consulta={`http://localhost:3000/api/get/horario/materia/${id}`} />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );

}