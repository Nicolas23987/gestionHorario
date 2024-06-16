import React from "react";
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import Axios from "axios";

export function DocenteInfo(id_materia) {
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





                <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class=" p-6 text-black text-center">
                        <h1 class="text-3xl font-bold">Perfil del Docente</h1>
                    </div>
                    <div class="text-black max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex justify-center">
                        <div class="grid gap-6 items-center grid-cols-1  h-1/3 bg-white flex-col p-6 justify-center">
                            <img className="rounded-full" src="https://via.placeholder.com/150" alt="Foto del Docente" class="rounded-full m-6" />
                          
                            <div className=" h-56 p-4 w-full bg-gray-100 rounded-lg shadow">
                            <h2 className="font-semibold text-xl mb-2 ">Especialidades</h2>
                            </div>

                            <div className="h-44 p-4 bg-gray-100 w-full rounded-xl shadow">
                                <h2 className="font-semibold text-xl mb-2">Informacion adicional</h2>
                            </div>
                        </div>
                        <div class="w-2/3 p-6 grid grid-cols-2 gap-6">
                            {/* <!-- Información Personal --> */}
                            <div class="col-span-2 bg-gray-100 p-4 rounded-lg shadow">
                                <h2 class="text-xl font-semibold mb-2">Información Personal</h2>
                                <p><strong>Nombre:</strong> Juan Pérez</p>
                                <p><strong>Apellido:</strong> Sendon</p>
                                <p><strong>Edad:</strong> 45 años</p>
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
                                <p><strong>Email:</strong> juan.perez@universidadxyz.edu</p>
                                <p><strong>Teléfono:</strong> +34 123 456 789</p>
                                <p><strong>Oficina:</strong> Edificio A, Despacho 123</p>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )

}