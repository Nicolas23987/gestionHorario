import React from "react";
import Prueba from './screen/Prueba.jsx';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./screen/Home.jsx";
import GestionHorario from "./screen/GestionHorario.jsx";
import Login from "./screen/login.jsx";
import Informacion from './screen/informacionMateria.jsx'
import {Nuevo_Docente} from './screen/new_docente.jsx'
function App(){
    return(
        <BrowserRouter>
            <Routes>
             <Route index="/" element={<Login />} />  
             <Route path="/inicio" element={<Home />} />  
             <Route path="/nuevo/docente" element={<Nuevo_Docente />} />    
             {/* <Route path="/GestionHorario" element={<GestionHorario />} />   */}
             <Route path="/materia/horario/" element={<Informacion />} />  
            </Routes>
        </BrowserRouter>
    )}

export default App;