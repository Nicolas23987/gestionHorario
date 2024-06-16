

import React, { useEffect } from "react"
import { NavBar } from '../Componentes/Nav.jsx'
// import { useLocation } from "react-router-dom"
// import { useState, useEffect } from "react";
// import  Axios  from "axios";
// import { Tarjet } from "../Componentes/docente_tarjet.jsx";
import { Estudiante_list } from "../Componentes/estudiantes_list.jsx";
import { Horario } from "../Componentes/horario.jsx";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import LoadingScreen from '../Componentes/loanding.jsx';]
import { Barra_izq } from "../Componentes/barra_izq.jsx";

import { BtnOption } from "../Componentes/btn_info.jsx";
import { Footer } from "../Componentes/footer.jsx";



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
                 <Barra_izq/>
            <div className="">
                <BtnOption state={{ materia: materia.materia_id, nombre: materia.nombre }} ></BtnOption>
   
                <div className="flex w-full items-center justify-center mb-16">
                    <div className="dv-start">
                    {<Horario id_materia={materia.materia_id} />}

                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );

}