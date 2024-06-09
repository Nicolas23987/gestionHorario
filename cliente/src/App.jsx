import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./screen/Home.jsx";
import GestionHorario from "./screen/GestionHorario.jsx";
import Login from "./screen/login.jsx";
import {StudeInfo} from './screen/studen-info.jsx'
import {NewDocente} from './screen/new_docente.jsx'
import { TeacherInfo } from "./screen/teacher-info.jsx";
import { WeekInfo } from "./screen/week-info.jsx";
// import Lista_alum_gestion from './screen/lista_alum_gestion.jsx'
function App(){
    return(
        <BrowserRouter>
            <Routes>
             <Route path="/inicio" element={<Login />} />  
             <Route index="/" element={<Home />} />  
             <Route path="/nuevo/docente" element={<NewDocente />} />    
             {/* <Route path="/GestionHorario" element={<GestionHorario />} />   */}
             <Route path="/materia/estudiantes/" element={<StudeInfo />} />  
             {/* <Route path="/participantes/gestion" element={ <Lista_alum_gestion/>} /> */}
             {/* <Route path="/materia/estudiantes" element={<StudeInfo/>}/> */}
             <Route path="/materia/horario" element={<WeekInfo/>}/>
             <Route path="/materia/docente" element={<TeacherInfo/>}/>
            </Routes>
        </BrowserRouter>
    )}

export default App;