import '../index.css';
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';

export function SubjectCard({id, paralelo,materia, carrera, img}){
    return( 
        <div className='c-subject-card' >

            <article>

                <div>
                <Link to='/GestionHorario' state={id} >
                    <img className='c-subject-img-card' src={ img } alt="" />
                </Link>
                </div>

                <Link to='/GestionHorario' state={id} className='c-subject-text-card' href="">
                    {paralelo} -- {materia}
                </Link>  

                <div className='c-subject-text-card'>
                    {carrera}
                </div>    

            </article>
        </div>
    )
    
}