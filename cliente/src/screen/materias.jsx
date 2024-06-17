import React, { useState } from 'react'
import { SubjectCard } from '../Componentes/materia_list.jsx'
import {NavBar} from '../Componentes/Nav.jsx';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { Barra_izq } from "../Componentes/barra_izq.jsx";
import { Footer } from '../Componentes/footer.jsx';

export function Materias(){

  return(
    <React.Fragment>
      <Barra_izq />
      <NavBar></NavBar>   
      <div className='w-full flex justify-center mt-16 mb-16'>
             <SubjectCard  />  
      </div>
      <Footer/>

    </React.Fragment>

  ) 
} 






