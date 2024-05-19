import React from "react";
import Prueba from './screen/Prueba.jsx';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./screen/Home.jsx";
import GestionHorario from "./screen/GestionHorario.jsx";
import Login from "./screen/login.jsx";
import Informacion from './screen/informacionMateria.jsx'

function App(){
    return(
        <BrowserRouter>
            <Routes>
             <Route index="/" element={<Login />} />  
             <Route path="/home" element={<Home />} />  
             <Route path="/prueba" element={<Prueba />} />    
             <Route path="/GestionHorario" element={<GestionHorario />} />  
             <Route path="/GestionMateria" element={<Informacion />} />  
            </Routes>
        </BrowserRouter>
    )}

export default App;