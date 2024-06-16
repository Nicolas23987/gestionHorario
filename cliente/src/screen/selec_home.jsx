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

  const [asignaturas, setAsignaturas] = useState([])
  const [asignaturas_virt, setAsignaturas_virt] = useState([])


  useEffect(() => {
    const getAsignaturas = async () => {
      setLoade(true)
      try {
        const asignatura = await Axios.get('http://localhost:3000/api/get/asignaturas/');
        const asignatura_virt = await Axios.get('http://localhost:3000/api/get/asignaturas/virtuales');
        
        setAsignaturas(asignatura.data.data)
        setAsignaturas_virt(asignatura_virt.data.data)
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
          
            <AddDocenteAsignatura/>

        </section>

        <section class="p-8 bg-white shadow-md mt-4 mx-4 rounded-lg">
          <h2 className="text-black">Materias</h2>
          <AddDocenteAsignatura/>

        </section>
      </div>
      <Footer />
      
    </React.Fragment>


  )
}



