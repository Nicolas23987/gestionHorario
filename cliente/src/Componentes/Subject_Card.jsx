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
        const response = await Axios.get('http://localhost:3000/api/get/asignatura');
        // console.log('API response:', response.data); // Verifica la estructura de los datos
        const materias = response.data.data;
        // console.log(materias)
        setMateriaList(materias);
        setLoading(false);
      } catch (error) {
        //   setLoading(false);
        console.error('Error fetching data:', error);
      }
    };

    getMaterias();
  }, []);

  return (
    <>
      <div className='full-width'>
        <table className="custom-table">
          <thead className="custom-thead">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">semestre</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {materiaList.map((materia, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{materia.nombre}</td>
                <td>{materia.semestre}</td>
                <td><Link to='/materia/horario' state={{ materia_id: materia.id_materia, nombre: materia.nombre }}><img className='' src={editIcon} /></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )

}