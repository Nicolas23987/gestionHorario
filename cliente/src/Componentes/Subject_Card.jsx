import '../index.css';
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import img from '../img/materiaUno.jpg'
// import { IMG } from '../../../servidor/img/img.js'
// const img = IMG()


export function SubjectCard(){

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
      console.log(materiaList)
  
    return(
        <>
        {materiaList.map((materia) => (

       
            <div className='c-subject-card' >

                <article>

                    <div>
                    <Link to='/materia/horario/' state={materia.id_materia} >
                        <img className='c-subject-img-card' src={ img } alt="" />
                    </Link>
                    </div>

                    <Link to='/materia/horario/' state={materia.id_materia} className='c-subject-text-card' href="">
                        {materia.paralelo} -- {materia.nombre}
                    </Link>  
                    <div>
                        {materia.semestre}
                    </div>

                    <div className='c-subject-text-card'>
                        {/* {carrera} */}
                    </div>    

                </article>
            </div>
          ))}
        </>
    )
    
}