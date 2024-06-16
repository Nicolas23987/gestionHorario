import React from "react";
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import Axios from "axios";

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

    // docente.img = null
    return (
        <React.Fragment>
            <div className="dv-dc-tj">
                    <button className="full-width btn-add" >
                        <div className="dv-btn-add">
                            {/* <img className="svg-add" src={AddDocente} alt="" /> */}

                        </div>
                    </button> 
                    <div className="container-img-tj">
                        <img className="img-dc" src={docente.img} alt="" />
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
                    </div>
            </div>
        </React.Fragment>
    )

}