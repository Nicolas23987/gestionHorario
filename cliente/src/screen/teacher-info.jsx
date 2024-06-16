import React, { useEffect } from "react"
import { NavBar } from '../Componentes/Nav.jsx'
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Barra_izq } from "../Componentes/barra_izq.jsx";
import { BtnOption } from "../Componentes/btn_info.jsx";
import { Tarjet } from "../Componentes/docente_tarjet.jsx";
import { Footer } from "../Componentes/footer.jsx";

export function TeacherInfo() {

    const [mostrarHorario, setMostrarHorario] = useState(true);
    const [mostrarList, setMostrarList] = useState(true);

    // const location = useLocation()
    // const id_materia = location.state;
    // console.log(location)

    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="mb-16">
                <Barra_izq></Barra_izq>
                {/* <BtnOption/> */}
                <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class=" p-6 text-black text-center">
                        <h1 class="text-3xl font-bold">Perfil del Docente</h1>
                    </div>



                    <div class="text-black max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex">
                        <div class="w-1/3 bg-white flex items-center justify-center">
                            <img className="rounded-full" src="https://via.placeholder.com/150" alt="Foto del Docente" class="rounded-full m-6" />
                        </div>
                        <div class="w-2/3 p-6 grid grid-cols-2 gap-6">
                            {/* <!-- Información Personal --> */}
                            <div class="col-span-2 bg-gray-100 p-4 rounded-lg shadow">
                                <h2 class="text-xl font-semibold mb-2">Información Personal</h2>
                                <p><strong>Nombre:</strong> Juan Pérez</p>
                                <p><strong>Edad:</strong> 45 años</p>
                                <p><strong>Especialidad:</strong> Ciencias de la Computación</p>
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
            </div>
            <Footer/>
        </React.Fragment>
    );

}