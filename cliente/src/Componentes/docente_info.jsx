import React from "react";
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import Axios from "axios";
import { is } from "date-fns/locale";
import { LoadingScreen } from '../Componentes/loanding'
import { Horario } from "./horario";
export function DocenteInfo(materia) {
    const id = materia.id
    const [docente, setDocente] = useState([]);
    const [especialidad, setEspecialidad] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMaterias = async () => {
            setLoading(true)
            try {
                const response = await Axios.get(`http://localhost:3000/api/get/docente/materia/${id}`);
                const {docentes} = response.data.data
                const {especialidads} = docentes
                setEspecialidad(especialidads);
                setDocente(docentes);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error('Error fetching data:', error);
            }
        };

        getMaterias();
    }, []);
    console.log(docente)

    return (
        <React.Fragment>
            {loading && <LoadingScreen/>}
            <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div class=" p-6 text-black text-center">
                    <h1 class="text-3xl font-bold">Perfil del Docente</h1>
                </div>
                <div class="text-black max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex justify-center">
                    <div class="grid  gap-6 items-center grid-cols-1  h-1/3 bg-white flex-col p-6 justify-center">
                        <div className="w-full h-full flex justify-center">
                            <img className="rounded-full w-40" src={docente.img} alt="Foto del Docente" class="rounded-full m-6" />
                        </div>

                        <div className=" h-56 p-4 w-full bg-gray-100 rounded-lg shadow">
                            <h2 className="font-semibold text-xl mb-2 ">Especialidades</h2>
                            {/* {docente.especialidad.map((especialidad) => ( */}

                                  {especialidad.map((data) => (
                                     <li>{data.nombre}</li>
                                   ))}

                            {/* ))} */}
                        </div>

                        <div className="h-44 p-4 bg-gray-100 w-full rounded-xl shadow">
                            <h2 className="font-semibold text-xl mb-2">Informacion adicional</h2>
                        </div>
                    </div>
                    <div class="w-2/3 p-6 grid grid-cols-2 gap-6">
                        {/* <!-- Información Personal --> */}
                        <div class="col-span-2 bg-gray-100 p-4 rounded-lg shadow">
                            <h2 class="text-xl font-semibold mb-2">Información Personal</h2>
                            <p><strong>Nombre:</strong> {docente.nombre}</p>
                            <p><strong>Apellido:</strong> {docente.apellido}</p>
                            <p><strong>Edad:</strong> {docente.edad}</p>
                        </div>

                        <div class="bg-gray-100 p-4 rounded-lg shadow">
                            <h2 class="text-xl font-semibold mb-2">Experiencia Profesional</h2>
                            <ul class="list-disc list-inside">
                                <li><strong>Profesor Titular</strong> en la Universidad XYZ (2010 - Presente)</li>
                                <li><strong>Investigador</strong> en el Instituto de Tecnología ABC (2005 - 2010)</li>
                                <li><strong>Desarrollador de Software</strong> en la Empresa DEF (2000 - 2005)</li>
                            </ul>
                        </div>

                        <div class="bg-gray-100 p-4 rounded-lg shadow">
                            <h2 class="text-xl font-semibold mb-2">Publicaciones</h2>
                            <ul class="list-disc list-inside">
                                <li>"Título de la Publicación 1" - Revista Científica 123 (2020)</li>
                                <li>"Título de la Publicación 2" - Conferencia Internacional ABC (2018)</li>
                                <li>"Título de la Publicación 3" - Journal of XYZ (2015)</li>
                            </ul>
                        </div>

                        <div class="col-span-2 bg-gray-100 p-4 rounded-lg shadow">
                            <h2 class="text-xl font-semibold mb-2">Contacto</h2>
                            <p><strong>Email:</strong> {docente.correo}</p>
                            <p><strong>Teléfono:</strong> {docente.telefono}</p>
                            <p><strong>Oficina:</strong> {docente.oficina}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mb-32 w-11/12 max-w-4xl rounded-xl flex-col items-center justify-center p-6 m-4 shadow-lg ">
                        <h2 className="text-3xl font-bold mb-2 text-black ">Horario</h2>
                        <Horario consulta={`http://localhost:3000/api/get/horario/docente/${docente.id_docente}`} />
                    </div>
        </React.Fragment>
    )

}