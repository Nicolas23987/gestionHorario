import '../index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import img from '../img/materiaUno.jpg'
// import { IMG } from '../../../servidor/img/img.js'
// const img = IMG()
// import 'bootstrap/js/dist/modal';
import editIcon from '../img/pencil-square.svg'

export function SubjectCard() {

  // const img = "https://firebasestorage.googleapis.com/v0/b/gestionhorario-f867e.appspot.com/o/alex.png?alt=media&token=4a1507cb-a709-4a77-abbd-103c0fdacd80"

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
  // console.log(materiaList)

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
          <td><Link to='/materia/horario' state={materia.id_materia}><img className='' src={editIcon} /></Link></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </>
  )

}