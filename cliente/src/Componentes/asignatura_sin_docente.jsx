import { Link, useLocation } from "react-router-dom";
import iconStudents from '../img/school_students.svg'
import { useState, useEffect } from "react";
import { LoadingScreen } from "./loanding";

export function AddDocenteAsignatura(data) {
    console.log(data)

    return (
        <Link to={`/materia/horario/${data.id}`}  state={data} href="">
            <section class="flex justify-between items-center p-8 bg-white shadow-md mt-4 mx-4 rounded-lg">
                <ul class="mt-4 list-disc list-inside">
                    <li className="text-black" >{data.data}</li>
                </ul>
                <div className="text-black flex justify-center items-center gap-2">
                    <p><img className="w-7" src={iconStudents}/></p>
                    <p>{data.cantidadAlumnos}</p>
                </div>
            </section>
        </Link>
    )
}