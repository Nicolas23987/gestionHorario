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
      <div className='' >
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
                <td>{student.nombre}</td>
                <td>{student.correo}</td>
                <td>carrera</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

// export default Estudiante_list;
