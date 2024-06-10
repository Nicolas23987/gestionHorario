import React, { useState } from 'react'
import { SubjectCard } from '../Componentes/Subject_Card.jsx'
import {NavBar} from '../Componentes/Nav.jsx';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { Barra_izq } from "../Componentes/barra_izq.jsx";

function Home(){

  return(
    <React.Fragment>
      <NavBar></NavBar>   
      
      <div className='dv-containe-section' >
      <section className='section-subjet-card'>
              <div className='cdd'>
                <Barra_izq />  
              </div>            
             <SubjectCard  />  
      </section>
      </div>
    </React.Fragment>

  ) 
} 


export default Home;




