

import React from 'react';
import { AgregarEstudiante } from '../Componentes/AgregarEstudiante';
import { Barra_izq } from '../Componentes/barra_izq';
import { NavBar } from '../Componentes/Nav';
import { Footer } from '../Componentes/footer';

export const AgregarEstudiantePage = () => {
  return (
    <React.Fragment>
    <NavBar/>
    <Barra_izq/>
    <div className="container mx-auto p-4">
      <AgregarEstudiante/>
    </div>
    <Footer/>
    </React.Fragment>
  );
};
