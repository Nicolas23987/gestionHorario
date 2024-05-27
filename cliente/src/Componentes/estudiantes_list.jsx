// StudentList.jsx
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
// import { response } from '../../../servidor/App';
// import { useState } from 'react';


 export function Estudiante_list(id_materia){

    console.log(id_materia.id_materia);
    const [alumnos, alumnoSet] = useState([]);

    useEffect(()=>{



       const getAlumnos = async(res,req) => {
        try{
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
      <div className='list-std' >
        <h1>Lista de Estudiantes</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Nro</th>
              <th>Nombre</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((student, index) => (
              <tr key={student.id}>
                <td>{index+1}</td>
                <td>{student.nombre}</td>
                <td>{student.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

// export default Estudiante_list;
