import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Materias } from "./screen/materias.jsx";
import { Materias_virt } from "./screen/materias_virtuales.jsx";
import Login from "./screen/login.jsx";
import { StudeInfo } from './screen/studen-info.jsx'
import { NewDocente } from './screen/new_docente.jsx'
import { TeacherInfo } from "./screen/teacher-info.jsx";
import { WeekInfo } from "./screen/week-info.jsx";
import { Selec_Home } from "./screen/selec_home.jsx";
import { Docentes } from './screen/teacher.jsx'
import PrivateRoute from "./auth/private.jsx";
function App() {
    console.log(<Login />)
    return (
        <BrowserRouter>
            <Routes>

                <Route index="/" element={<Login />} />

                <Route path="/inicio" element={<Selec_Home />} />

                {/* <Route path="/inicio" element={PrivateRoute(Selec_Home)} /> */}

                <Route path="/materias" element={
                    // <PrivateRoute>
                    <Materias />
                    // </PrivateRoute>
                } />
                <Route path="/materias/virtuales" element={
                    // <PrivateRoute>
                    <Materias_virt />
                    // </PrivateRoute>
                } />
                <Route path="/nuevo/docente" element={
                    // <PrivateRoute>
                    <NewDocente />
                    // </PrivateRoute>
                } />
                <Route path="/materia/estudiantes/" element={
                    // <PrivateRoute>
                    <StudeInfo />
                    // </PrivateRoute>
                } />
                <Route path="/materia/horario" element={
                    // <PrivateRoute>
                    <WeekInfo />
                    // </PrivateRoute>
                } />
                <Route path="/materia/docente" element={
                    // <PrivateRoute>
                    <TeacherInfo />
                    // </PrivateRoute>
                } />
                <Route path="/docente/materia/info" element={
                    // <PrivateRoute>
                    <TeacherInfo />
                    // </PrivateRoute>
                } />
                <Route path="docentes/lista" element={
                    // <PrivateRoute>
                    <Docentes />
                    // </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;