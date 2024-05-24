import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import { SubjectCard } from '../Componentes/Subject_Card.jsx'
import {NavBar} from '../Componentes/Nav.jsx';
import materiaUno from '../img/materiaUno.jpg';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Axios from 'axios'
import LoadingScreen from '../Componentes/loanding.jsx';
 
function Home(){

  // const [materiaList, setMateriaList] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getMaterias = async () => {
  //     try {
  //       const response = await Axios.get('http://localhost:3000/api/get/asignatura');
  //       // console.log('API response:', response.data); // Verifica la estructura de los datos
  //       const materias = response.data.data; 
  //       console.log(materias)
  //       setMateriaList(materias);
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false);
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   getMaterias();
  // }, []);

  // if (loading) {
  //   return <LoadingScreen />; // Mostrar pantalla de carga mientras se están obteniendo los datos
  // }
  return(
    <React.Fragment>
      <NavBar></NavBar>  
      <div className='dv-containe-section' >
      <section className='section-subjet-card'>
        {/* {materiaList.map((materia) => ( */}
            <React.Fragment>
             <SubjectCard  />  
            </React.Fragment>            
        {/* ))} */}
      </section>
      </div>
    </React.Fragment>

  ) 
} 


export default Home;




