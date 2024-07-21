import { NavBar } from "../Componentes/Nav.jsx";
import React, { useState } from "react";
import { Footer } from "../Componentes/footer.jsx";
import { Barra_izq } from "../Componentes/barra_izq.jsx";
import { useLocation } from "react-router-dom";
import { AddDocenteAsignatura } from "../Componentes/asignatura_sin_docente.jsx";
import { LoadingScreen } from '../Componentes/loanding.jsx'
import axios from 'axios'
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";




export function Home() {

  const location = useLocation()
  const [loading, setLoading] = useState(false);
  const [asignaturas, setAsignaturas] = useState([])
  const [asignaturas_virt, setAsignaturas_virt] = useState([])

  // const use = jwtDecode(documen)
  // console.log(use)




  useEffect(() => {

    // axios.get('http://tu_api_endpoint', {
    //   withCredentials: true // Asegúrate de incluir cookies en la solicitud
    // })
    //   .then(response => {
    //     if (response.data.status) {
    //       console.log('Sesión activa');
    //     } else {
    //       console.log('Sesión expirada o inválida');
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Error en la solicitud', error);
    //   });



    const getAsignaturas = async () => {
      setLoading(true)
      try {
        const asignatura = await axios.get('http://localhost:3000/api/get/asignatura/sin/docente');
        // const asignatura_virt = await Axios.get('http://localhost:3000/api/get/asignaturas/virtuales');
        // console.log(asignatura)
        setAsignaturas(asignatura.data.data)

        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    const getAsignaturas_virt = async () => {
      setLoading(true)
      try {
        const asignatura = await axios.get('http://localhost:3000/api/get/asignatura/virtuales/sin/docente',{
          withCredentials: true // Asegúrate de incluir cookies en la solicitud
      });
        // const asignatura_virt = await Axios.get('http://localhost:3000/api/get/asignaturas/virtuales');
        // console.log(asignatura)
        setAsignaturas_virt(asignatura.data.data)

        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getAsignaturas()
    getAsignaturas_virt()
  }, [])


  console.log(asignaturas)
  console.log(asignaturas_virt)


  return (
    <React.Fragment>
      {loading && < LoadingScreen></LoadingScreen>}
      {/* <NavBar data={use} /> */}
      <Barra_izq />
      <div className="mb-16">

        <section class="p-8 bg-white shadow-md mt-4 mx-4 rounded-lg">
          <h3 class="text-xl text-black font-bold">Asignaturas sin docente</h3>
        </section>
        <section class="p-8 bg-white shadow-md mt-4 mx-4 rounded-lg">
          <h2 className="text-black text-xl font-bold ">Materia Virtuales</h2>
          {asignaturas.map((asignatura, index) => (
            // console.log(asignatura)
            <AddDocenteAsignatura key={asignatura.id_materia} data={asignatura.nombre} id={asignatura.id_materia} />

          ))}

        </section>

        {/* <section class="p-8 bg-white shadow-md mt-4 mx-4 rounded-lg">
          <h2 className="text-black font-bold text-xl ">Materias</h2>
          {asignaturas_virt.map((asignatura, index) =>(
            // console.log(asignatura)
            <AddDocenteAsignatura key={asignatura.id_materia} data={asignatura.nombre} id={asignatura.id_materia} />
         
         ))}
        </section> */}
      </div>
      <Footer />

    </React.Fragment>


  )
}



