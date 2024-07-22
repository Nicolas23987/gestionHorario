import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import editIcon from '../img/pencil-square.svg'

export function SubjectCard() {

  const [materiaList, setMateriaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMaterias = async () => {
      try {
        const response = await Axios.get('http://localhost:3000/api/get/asignatura', {withCredentials: true});
        const materias = response.data.data;
        setMateriaList(materias);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getMaterias();
  }, []);

  return (
    <>
      <div className='w-3/4'>
        <table className="custom-table shadow-2xl w-full bottom-4 text-black">
          <thead className="">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">semestre</th>
              <th scope="col">Editar</th>
            </tr>
          </thead>
          <tbody>
            {materiaList.map((materia, index) => (
              <tr className=''>
                <th scope="row">{index + 1}</th>
                <td>{materia.nombre}</td>
                <td className=''><div className='flex items-center w-full justify-center'>{materia.semestre}</div></td>
                <td className='flex flex-row  items-center justify-center' ><Link to={`/materia/horario/${materia.id_materia}`} ><img className='' src={editIcon} /></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )

}