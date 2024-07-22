import React, { useState, useEffect } from 'react';
import { Footer } from '../Componentes/footer';
import { Barra_izq } from '../Componentes/barra_izq';
import axios from 'axios';
import { NavBar } from '../Componentes/Nav';

export const AgregarAsignatura = () => {
    const [nombre, setNombre] = useState('');
    const [paralelo, setParalelo] = useState('');
    const [semestre, setSemestre] = useState('');
    const [tipo, setTipo] = useState('virtual');
    const [especialidades, setEspecialidades] = useState([]);
    const [carreras, setCarreras] = useState([]);
    const [selectedEspecialidad, setSelectedEspecialidad] = useState('');
    const [selectedCarrera, setSelectedCarrera] = useState('');

    useEffect(() => {
        // Obtener especialidades de la API
        const fetchEspecialidades = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/get/especialidades', { withCredentials: true });
                setEspecialidades(response.data.data);
            } catch (error) {
                console.error('Error al obtener las especialidades', error);
            }
        };

        fetchEspecialidades();
    }, []);

    useEffect(() => {
        // Obtener carreras de la API
        const fetchCarreras = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/get/carreras', { withCredentials: true });
                setCarreras(response.data.data);
            } catch (error) {
                console.error('Error al obtener las carreras', error);
            }
        };

        fetchCarreras();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = tipo === 'normal'
            ? 'http://localhost:3000/api/create/asignatura'
            : 'http://localhost:3000/api/create/asignatura/virtual';
        const body = {
            nombre,
            paralelo,
            semestre,
            idEspecialidad: tipo === 'normal' ? selectedEspecialidad : undefined,
            ...(tipo === 'normal' && { idCarrera: selectedCarrera }) // Asegúrate de que `selectedCarrera` contiene el ID
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
                credentials: 'include' // Esto reemplaza el uso de `withCredentials` en fetch
            });
            if (response.ok) {
                console.log('Asignatura agregada correctamente');
                // Limpiar los campos después de enviar si es necesario
                setNombre('');
                setParalelo('');
                setSemestre('');
                setTipo('virtual');
                setSelectedEspecialidad('');
                setSelectedCarrera('');
            } else {
                console.error('Error al agregar asignatura');
            }
        } catch (error) {
            console.error('Error en la conexión:', error);
        }
    };

    return (
        <>
            <NavBar/>
            <Barra_izq />
            <div className='w-full'></div>
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
                <div className="p-4 sm:p-6">
                    <h2 className="text-xl font-semibold mb-4">Agregar Asignatura</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="paralelo" className="block text-sm font-medium text-gray-700">Paralelo</label>
                            <input
                                type="text"
                                id="paralelo"
                                name="paralelo"
                                value={paralelo}
                                onChange={(e) => setParalelo(e.target.value)}
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="semestre" className="block text-sm font-medium text-gray-700">Semestre</label>
                            <input
                                type="text"
                                id="semestre"
                                name="semestre"
                                value={semestre}
                                onChange={(e) => setSemestre(e.target.value)}
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">Tipo</label>
                            <select
                                id="tipo"
                                name="tipo"
                                value={tipo}
                                onChange={(e) => {
                                    setTipo(e.target.value);
                                    // Limpiar la especialidad y carrera si el tipo cambia
                                    if (e.target.value === 'virtual') {
                                        setSelectedEspecialidad('');
                                        setSelectedCarrera('');
                                    }
                                }}
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            >
                                <option value="virtual">Virtual</option>
                                <option value="normal">Normal</option>
                            </select>
                        </div>
                        {tipo === 'normal' && (
                            <>
                                <div className="mb-4">
                                    <label htmlFor="especialidad" className="block text-sm font-medium text-gray-700">Especialidad</label>
                                    <select
                                        id="especialidad"
                                        name="especialidad"
                                        value={selectedEspecialidad}
                                        onChange={(e) => setSelectedEspecialidad(e.target.value)}
                                        required
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option value="">Seleccione una especialidad</option>
                                        {especialidades.map((especialidad) => (
                                            <option key={especialidad.id_especialidad} value={especialidad.id_especialidad}>
                                                {especialidad.nombre}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="carrera" className="block text-sm font-medium text-gray-700">Carrera</label>
                                    <select
                                        id="carrera"
                                        name="carrera"
                                        value={selectedCarrera}
                                        onChange={(e) => setSelectedCarrera(e.target.value)}
                                        required
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    >
                                        <option value="">Seleccione una carrera</option>
                                        {carreras.map((carrera) => (
                                            <option key={carrera.id_carrera} value={carrera.id_carrera}>
                                                {carrera.descripcion}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </>
                        )}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 bg-indigo-500 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Agregar Asignatura
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};
