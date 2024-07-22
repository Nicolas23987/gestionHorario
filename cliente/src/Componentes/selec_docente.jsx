import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { LoadingScreen } from './loanding';
import { useParams } from 'react-router-dom';

const DocenteSelector = ({ onSelect, onsubmit }) => {
    const [docentes, setDocentes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [materias, setMateria] = useState([]);
    const [especialidad, setEspecialidad] = useState([]);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchDocentes = async () => {
            setLoading(true);
            try {
                const response = await Axios.get('http://localhost:3000/api/get/docentes');
                setDocentes(response.data.data);
            } catch (error) {
                console.error('Error fetching docentes:', error);
            } finally {
                setLoading(false);
            }
        };

        const getMateria = async () => {
            setLoading(true);
            try {
                const response = await Axios.get(`http://localhost:3000/api/get/asignatura/${id}`, {withCredentials: true});
                const asig = response.data.data;
                const { especialidads } = asig;
                setEspecialidad(especialidads);
                setMateria(asig);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error('Error fetching data:', error);
            }
        };

        getMateria();
        fetchDocentes();
    }, [id]);

    console.log(especialidad);
    console.log(docentes);

    const click = () => {
        onsubmit();
    };

    const handleChange = (event) => {
        const selectedId = event.target.value;
        const selectedDocente = docentes.find(docente => docente.id_docente === parseInt(selectedId)); // Asegúrate de comparar números
        console.log('Selected Docente:', selectedDocente);
        onSelect(selectedDocente);
    };

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <div className=" w-10/12 p-4 text-black bg-gray-100 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Seleccionar Docente</h2>
            <select
                className="bg-white border border-gray-300 rounded-lg p-2 w-full"
                onChange={handleChange}
                defaultValue=""
            >
                <option className='text-black' value="" disabled>Seleccione un docente</option>
                {docentes.map(docente => (
                    especialidad[0] && docente.especialidads.some(espec => espec.id_especialidad === especialidad[0].id_especialidad) ? (
                        <option key={docente.id_docente} value={docente.id_docente}>
                            {docente.nombre} {docente.apellido}
                        </option>
                    ) : null
                ))}
            </select>
            <div className='flex w-11/12 items-end justify-end m-5'>
                <button className='p-4 bg-green-700' onClick={click} >Aceptar</button>
            </div>
        </div>
    );
};
export default DocenteSelector;
