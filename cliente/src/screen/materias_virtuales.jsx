import React, { useState } from 'react'
import { SubjectCard } from '../Componentes/materia_list.jsx'
import {NavBar} from '../Componentes/Nav.jsx';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { Barra_izq } from "../Componentes/barra_izq.jsx";
import { Footer } from '../Componentes/footer.jsx';

export function Materias_virt(){


  return(
  <React.Fragment>
      <NavBar></NavBar>   
       <Barra_izq />  
      <div className='dv-containe-section ' >
      <section className='section-subjet-card'>
              <div className='cdd'>
              </div>            
             <SubjectCard  />  
      </section>
      </div>
      <Footer/>
    </React.Fragment>

  ) 
} 






