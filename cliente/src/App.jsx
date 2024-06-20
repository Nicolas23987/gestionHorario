import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Materias } from "./screen/materias.jsx";
import { Materias_virt } from "./screen/materias_virtuales.jsx";
import { Login } from "./screen/login.jsx";
import { StudeInfo } from './screen/studen-info.jsx'
import { NewDocente } from './screen/new_docente.jsx'
import { TeacherInfo } from "./screen/teacher-info.jsx";
import { WeekInfo } from "./screen/week-info.jsx";
import { Selec_Home } from "./screen/selec_home.jsx";
import { Docentes } from './screen/teacher.jsx'
import PrivateRoute from "./auth/private.jsx";
function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route index="/" element={<PrivateRoute Element={Selec_Home}/>} />

                <Route path="/inicio" element={<PrivateRoute Element={Selec_Home}/>} />

                {/* <Route path="/inicio" element={PrivateRoute(Selec_Home)} /> */}

                <Route path="/materias" element={
                    <PrivateRoute Element={Materias}/>

                } />
                <Route path="/materias/virtuales" element={
                    // <PrivateRoute>
                    <Materias_virt />
                    // </PrivateRoute>
                } />
                <Route path="/agregar/docente" element={
                    // <PrivateRoute>
                    <NewDocente />
                    // </PrivateRoute>
                } />
                <Route path="/materia/estudiantes/:id" element={
                    // <PrivateRoute>
                    <StudeInfo />
                    // </PrivateRoute>
                } />
                <Route path="/materia/horario/:id" element={
                    // <PrivateRoute>
                    <WeekInfo />
                    // </PrivateRoute>
                } />
                <Route path="/materia/docente/:id" element={
                    // <PrivateRoute>
                    <TeacherInfo />
                    // </PrivateRoute>
                } />

                <Route path="docentes/lista" element={
                    // <PrivateRoute>
                    <Docentes />
                    // </PrivateRoute>
                } />

                <Route path="//docente" element={
                    <Docentes/>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;