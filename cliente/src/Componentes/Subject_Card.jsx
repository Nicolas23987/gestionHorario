import '../index.css';
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import img from '../img/materiaUno.jpg'



export function SubjectCard(){

const [materiaList, setMateriaList] = useState([]);
// const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const getMaterias = async () => {
        try {
          const response = await Axios.get('http://localhost:3000/api/get/asignatura');
          // console.log('API response:', response.data); // Verifica la estructura de los datos
          const materias = response.data.data; 
          console.log(materias)
          setMateriaList(materias);
          setLoading(false);
        } catch (error) {
        //   setLoading(false);
          console.error('Error fetching data:', error);
        }
      };
  
      getMaterias();
    }, []);
  
    // if (loading) {
    //   return <LoadingScreen />; // Mostrar pantalla de carga mientras se están obteniendo los datos
    // }

    // console.log(id, paralelo,materia, carrera)
    return(
        <>
        {materiaList.map((materia) => (

       
            <div className='c-subject-card' >

                <article>

                    <div>
                    <Link to='/GestionMateria' state={materia.id} >
                        <img className='c-subject-img-card' src={ img } alt="" />
                    </Link>
                    </div>

                    <Link to='/GestionMateria' state={materia.id} className='c-subject-text-card' href="">
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