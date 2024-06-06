import React from "react";
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import Axios from "axios";
// import img from '../img/alex.png'
import timetable from '../img/calendar-week.svg'
import { bg } from "date-fns/locale";



export function Tarjet(id_materia) {
    console.log(id_materia)
    const [docente, setMateriaList] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getMaterias = async () => {
            try {
                const response = await Axios.get(`http://localhost:3000/api/get/docente/materia/${id_materia.id_materia}`);
                // console.log('API response:', response.data); // Verifica la estructura de los datos
                const materias = response.data.data;
                setMateriaList(materias);
                setLoading(false);
                console.log(docente)
            } catch (error) {
                setLoading(false);
                console.error('Error fetching data:', error);
            }
            console.log(docente)
        };

        getMaterias();
    }, []);


    return (
        <React.Fragment>

            {/* {materiaList.map(docente => ( */}
                <div className="dv-dc-tj  ">
                    <div className= "container-img-tj" key={docente.id_docente}>
                        <img className="img-dc" src={docente.img} alt="" />
                    </div>
                    <div className="dv-if-tj">
                        <div>
                        <p>
                            {docente.nombre}
                        </p>
                        
                        <p>
                           {docente.correo}
                        </p>
                        </div>
                    </div>
                    
                    <div className="container-ic-tj">
                        {/* <a href="#" > */}
                        {/* <button href="#"> */}
                            <img className="dc-ic-tj" src={timetable} alt="" />
                        {/* </button> */}
                        {/* </a> */}
                    </div>
                </div>
            {/* ))} */}
        </React.Fragment>
    )

}