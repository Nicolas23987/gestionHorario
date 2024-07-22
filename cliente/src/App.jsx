import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Materias } from "./screen/materias.jsx";
import { Materias_virt } from "./screen/materias_virtuales.jsx";
import { Login } from "./screen/login.jsx";
import { StudeInfo } from './screen/studen-info.jsx'
import { NewDocente } from './screen/new_docente.jsx'
import { TeacherInfo } from "./screen/teacher-info.jsx";
import { WeekInfo } from "./screen/week-info.jsx";
import { Home } from "./screen/home.jsx";
import { Docentes } from './screen/teacher.jsx'
import PrivateRoute from "./auth/private.jsx";
import {  AgregarAsignatura } from "./screen/addAsignatura.jsx";
import { AgregarEstudiantePage } from "./screen/agregar_estudiante.jsx";
function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route index="/" element={<PrivateRoute Element={Home}/>} />

                <Route path="/inicio" element={<PrivateRoute Element={Home}/>} />

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

                <Route path="/docente" element={
                    <Docentes/>
                } />

                <Route path="/agregar/asignatura" element={
                    <AgregarAsignatura/>
                } />
                <Route path="/agregar/estudiante" element={
                    <AgregarEstudiantePage/>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;