// StudentList.jsx
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useLocation } from 'react-router-dom';
import icono from '../img/icono.jpg'

 export function Docentes_list(){

    const location = useLocation();
    const id_materia = location.state
    const [alumnos, alumnoSet] = useState([]);

    useEffect(()=>{

       const getAlumnos = async(res,req) => {
        try{
          console.log(id_materia)
          const response = await Axios.get(`http://localhost:3000/api/get/alumno`)
          const estudiantes = response.data.data
          console.log(estudiantes)
          alumnoSet(estudiantes)

        
        }catch(error){
        
        }
      }
      getAlumnos();
    },[]);
    return (
      <div className='w-full items-center justify-center'>
        <table className="custom-table">
          <thead className="custom-thead">
            <tr>
              <th scope="col">Nro</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Carrera</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((student, index) => (
              <tr key={student.id}>
                <th scope="row">{index+1}</th>
                <td>
                  <div className='imgStudent'>
                  <img  src={icono} alt="" />
                  {student.nombre}                    
                  </div>
                </td>
                <td>{student.correo}</td>
                <td>carrera</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
