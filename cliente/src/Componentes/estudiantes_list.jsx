// StudentList.jsx
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import icono from '../img/icono.jpg'

 export function Estudiante_list({consulta}){
    console.log(consulta)
    const {id} = useParams()
    console.log(id)
    const [alumnos, alumnoSet] = useState([]);

    useEffect(()=>{

       const getAlumnos = async(res,req) => {
        try{
          const response = await Axios.get(consulta)
          const data = response.data
          alumnoSet(data.data[0].alumnos)
        
        }catch(error){
        
        }
      }
      getAlumnos();
    },[]);

    console.log(alumnos)

    return (
      <div className='w-full items-center justify-center'>
        <table className="text-black w-full">
          <thead className="border border-black text-white bg-gray-900">
            <tr>
              <th className='border-t border-b border-gray-400' scope="col">Nro</th>
              <th className='border-t border-b border-gray-400' scope="col"><div className='flex pl-5'>Nombre</div></th>
              <th className='border-t border-b border-gray-400' scope="col">Correo</th>
              <th className='border-t border-b border-gray-400' scope="col">Carrera</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((student, index) => (
              <tr className='hover:bg-gray-100' key={student.id}>
                <th className='border-t border-b p-2 border-gray-400' scope="row">{index+1}</th>
                <td className='border-t border-b  p-2 border-gray-400'>
                  <div className='pl-5 w-full flex gap-5 items-center'>
                  <img className='rounded-full h-10 w-10' src={student.img} alt="" />
                  {student.nombre}                    
                  </div>
                </td>
                <td className='border-t border-b border-gray-400'><div className='flex w-full justify-center'>{student.correo}</div></td>
                <td className='border-t border-b border-gray-400'><div className='flex w-full justify-center items-center'>carrera</div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

// export default Estudiante_list;
