
import iconStudents from '../img/school_students.svg'
import iconWeek from '../img/calendar-week.svg'
import iconTeacher from '../img/teacher.svg'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


export function BtnOption(){

    const location = useLocation()
    const materia = location.state
    console.log(location)
    const h = '>'

    return(

        <div className="container-list">
        <div className="full-width if-materia h1-materias" >
            
            <a href="/inicio">
                MATERIAS VIRTUALES                 
            </a>                
            <div>{h}</div>            
            <a href="">
                {materia.nombre}                
            </a>      

            </div>
            <div className="dv-container-week">
                <div className="dv-container-selec">
                    <button className="">
                        <Link to='/materia/docente' state={materia.materia_id} >
                            <div className="container-icon">
                                <img className="imgStudents" src={iconTeacher} alt="" />
                            </div>
                        </Link>
                    </button>

                    <button className="btn-icon">
                        <Link >
                            <div className="container-icon">
                                <img className="" src={iconWeek} alt="" />
                            </div>
                        </Link>
                    </button>

                    <button>
                        <Link to="/materia/estudiantes" state={{materia: materia.materia_id , nombre: materia.nombre} }>
                            <div className="container-icon">
                                <img className="imgStudents" src={iconStudents} alt="" />
                            </div>
                        </Link>
                    </button>

                </div>
                </div>
                </div>


    )


}