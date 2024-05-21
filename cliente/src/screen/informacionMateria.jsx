import React from "react"
import { NavBar } from '../Componentes/Nav.jsx'
// import { useLocation } from "react-router-dom"
// import { useState, useEffect } from "react";
// import  Axios  from "axios";
import { Tarjet } from "../Componentes/docente_tarjet.jsx";
import { Estudiante_list } from "../Componentes/estudiantes_list.jsx";
import { Horario } from "../Componentes/horario.jsx";

function Informacion() {

  //   const [docenteList, setDocenteList] = useState([]);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const getMaterias = async () => {
  //       try {
  //         const response = await Axios.get('http://localhost:3000/api/get/docente');
  //         const docente = response.data.data;
  //         setDocenteList(docente)
  //           console.log(docenteList)
  //         // Assuming docente.data is an array
  //         setLoading(false);
  //       } catch (error) {
  //         setLoading(false);
  //         console.error('Error fetching data:', error);
  //       }
  //     };

  //     getMaterias();
  // }, []);
  // const [materiaList, setMateriaList] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getMaterias = async () => {
  //     try {
  //       const response = await Axios.get('http://localhost:3000/api/get/docente');
  //       // console.log('API response:', response.data); // Verifica la estructura de los datos
  //       const materias = response.data.data; 
  //       setMateriaList(materias);
  //       setLoading(false);
  //       console.log(materiaList)
  //     } catch (error) {
  //       setLoading(false);
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   getMaterias();
  // }, []);

  // const location = useLocation()
  // console.log(location.state)
  // var paralelo = location.state?.paralelo
  // var profesor = location.state?.profesor

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container-if">
        <div className="tj-container">
          <Tarjet></Tarjet>          
        </div>
        <div className="container-list">
          <div >
          <Estudiante_list/>
          </div>
         <div>
            <Horario></Horario>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Informacion;