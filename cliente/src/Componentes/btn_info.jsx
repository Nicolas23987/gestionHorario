
import iconStudents from '../img/school_students.svg'
import iconWeek from '../img/calendar-week.svg'
import iconTeacher from '../img/teacher.svg'
import { useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../index.css';


export function BtnOption(data){
    console.log(data)

    const {id} = useParams()
    // console.log(id)
    // const location = useLocation()
    // const materia = location.state
    // console.log(location)
    const h = '>'

    return(
        <>
<div className="flex flex-col   w-full  mb-16">
    {/* Contenido principal */}
    <div className="w-full  md:w-auto mb-4 md:mb-0 md:mr-4">
        <a href="/inicio" className=" block text-left text-black py-2 px-4 rounded-lg mb-2">
            MATERIAS VIRTUALES
        </a>
        <div>{h}</div>
        <a href="" className="block text-center text-blue-500"></a>
    </div>

    {/* Botones de navegación */}
    <div className="flex w-full justify-center gap-20 md:w-auto md:space-x-4">
        <button className="w-16 h-16 bg-white border border-gray-300 rounded-lg flex items-center justify-center shadow hover:bg-gray-100">
            <Link to={`/materia/docente/${id}`} className="block">
                <img className="w-8 h-8 mx-auto" src={iconTeacher} alt="Ícono Profesor" />
                <p className='text-xs text-gray-700 mt-1'>Profesor</p>
            </Link>
        </button>

        <button className="w-16 h-16 bg-white border border-gray-300 rounded-lg flex items-center justify-center shadow hover:bg-gray-100">
            <Link to={`/materia/horario/${id}`} className="block">
                <img className="w-8 h-8 mx-auto" src={iconWeek} alt="Ícono Horario" />
                <p className='text-xs text-gray-700 mt-1'>Horario</p>
            </Link>
        </button>

        <button className="w-16 h-16 bg-white border border-gray-300 rounded-lg flex items-center justify-center shadow hover:bg-gray-100">
            <Link to={`/materia/estudiantes/${id}`} className="block">
                <img className="w-8 h-8 mx-auto" src={iconStudents} alt="Ícono Estudiantes" />
                <p className='text-xs text-gray-700 mt-1'>Estudiantes</p>
            </Link>
        </button>
    </div>
</div>

</>

    )


}