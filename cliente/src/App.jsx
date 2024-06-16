import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { Materias } from "./screen/materias.jsx";
import { Materias_virt } from "./screen/materias_virtuales.jsx";
import Login from "./screen/login.jsx";
import {StudeInfo} from './screen/studen-info.jsx'
import {NewDocente} from './screen/new_docente.jsx'
import { TeacherInfo } from "./screen/teacher-info.jsx";
import { WeekInfo } from "./screen/week-info.jsx";
import { Selec_Home } from "./screen/selec_home.jsx";
import { Docentes } from './screen/teacher.jsx'
import { PrivateRoute } from "./auth/private.jsx";
function App(){
    return(
        <BrowserRouter>
            <Routes>
             <Route index="/" element={<Login />} />  
             <Route path="/materias" element={ 
                <PrivateRoute>
                    < Materias />  
                </PrivateRoute>}/>
             <Route path="/materias/virtuales" element={< Materias_virt />} />  
             <Route path="/nuevo/docente" element={<NewDocente />} />    
             <Route path="/materia/estudiantes/" element={<StudeInfo />}/>
             <Route path="/inicio" element={ <Selec_Home/> }/>  
             <Route path="/materia/horario" element={<WeekInfo/>}/>
             <Route path="/materia/docente" element={<TeacherInfo/>}/>
             <Route path="/docente/materia/info" element={<TeacherInfo/>}/>
             <Route path="docentes/lista" element={ <Docentes/>} />
             </Routes>
        </BrowserRouter>
    )}

export default App;