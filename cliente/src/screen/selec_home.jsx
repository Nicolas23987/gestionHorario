import { NavBar } from "../Componentes/Nav";
import React, { useState } from "react";
import { Selec_Tarjet } from "../Componentes/select_tarjet";
import iconTeacher from '../img/teacher.svg'
import { Footer } from "../Componentes/footer.jsx";
import { Barra_izq } from "../Componentes/barra_izq.jsx";
import { useLocation } from "react-router-dom";
import { AddDocenteAsignatura } from "../Componentes/asignatura_sin_docente.jsx";
import { LoadingScreen } from '../Componentes/loanding.jsx'
import Axios from 'axios'
import {  useEffect } from "react";
import { Asig_virt_sin_doce } from "../Componentes/asig_virt_sin_doce.jsx";

export function Selec_Home() {
  const location = useLocation()
  console.log(location.state)
  
  const [loading, setLoading] = useState(false);


  const [loanding, setLoade] = useState(true)
  const [asignaturas, setAsignaturas] = useState([])


  useEffect(() => {
    const getAsignaturas = async () => {
      setLoade(true)
      try {
        const asignatura_sin_docente = await Axios.get('http://localhost:3000/api/get/horario/');
        
        setAsignaturas(asignatura_sin_docente.data.data)
        // console.log(asignaturas)
        setLoade(false)

      } catch (error) {
        console.log(error)
        setLoade(false)
      }
    } 
    getAsignaturas()
  }, [])


 console.log(asignaturas)


  return (
    <React.Fragment>
      {loading && < LoadingScreen></LoadingScreen>}
      <NavBar data={location.state.data} />
      <Barra_izq />
      <div className="mb-16">
        <section class="p-8 bg-white shadow-md mt-4 mx-4 rounded-lg">
          <h3 class="text-xl text-black font-bold">Asignaturas sin docente</h3>
        </section>
        <section class="p-8 bg-white shadow-md mt-4 mx-4 rounded-lg">
          <h2 className="text-black">Materia Virtuales</h2>
          {/* { asignaturas.map((asignaturas, index )=> ( */}
            <AddDocenteAsignatura
            //  key={index} data={asignaturas} 
             />
          {/* ))} */}
        </section>
        <section class="p-8 bg-white shadow-md mt-4 mx-4 rounded-lg">
          <h2 className="text-black">Materias</h2>
          {/* { asignaturas.map((asignaturas, index )=> ( */}
            <Asig_virt_sin_doce
            //  key={index} data={asignaturas} 
             />
          {/* ))} */}
        </section>
      </div>
      <Footer />
      
    </React.Fragment>


  )
}



