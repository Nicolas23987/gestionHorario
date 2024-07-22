import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AgregarEstudiante = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [cedula, setCedula] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/create/alumno', {
                nombre,
                correo,
                cedula
            }, { withCredentials: true });
            if (response.status === 200) {
                navigate(`/studeinfo/${response.data.id_alumno}`); // Redirigir al detalle del estudiante recién creado
            } else {
                setError('Error al agregar estudiante');
            }
        } catch (err) {
            setError('Error en la conexión');
            console.error(err);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
            <div className="p-4 sm:p-6">
                <h2 className="text-xl font-semibold mb-4">Agregar Estudiante</h2>
                <form onSubmit={handleSubmit}>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo</label>
                        <input
                            type="email"
                            id="correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cedula" className="block text-sm font-medium text-gray-700">Cédula</label>
                        <input
                            type="text"
                            id="cedula"
                            value={cedula}
                            onChange={(e) => setCedula(e.target.value)}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 bg-indigo-500 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Agregar Estudiante
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
