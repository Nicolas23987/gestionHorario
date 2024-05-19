import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import { SubjectCard } from '../Componentes/Subject_Card.jsx'
import {NavBar} from '../Componentes/Nav.jsx';
import materiaUno from '../img/materiaUno.jpg';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Axios from 'axios'

function Home(){

  const [materiaList,setMaterias]= useState([])

  const getMaterias = () => { 
    Axios.get('http://localhost:3000/asignaturas').then(response => {
    setMaterias(response.data);
  })
    console.log(materiaList)
  }

  useEffect(() =>{
    getMaterias();
  },[])
  

  return(
    <React.Fragment>
      <NavBar></NavBar>  
      <section className='section-subjet-card'>
        {materiaList.map((materia) => (
            <React.Fragment key={materia.id_Materia} >
             <SubjectCard id={materia.id} paralelo={materia.paralelo} materia= {materia.nombre} img={materiaUno} />  
            </React.Fragment>            
        ))}
      </section>   
    </React.Fragment>

  ) 
} 


export default Home;




