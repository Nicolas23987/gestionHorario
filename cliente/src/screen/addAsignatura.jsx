import React, { useState } from 'react';
import { Footer } from '../Componentes/footer';
import { Barra_izq } from '../Componentes/barra_izq';

export const AgregarAsignatura = () => {
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('virtual');
    const [aula, setAula] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('URL_DE_TU_API_PARA_AGREGAR_ASIGNATURA', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, tipo, aula }),
            });
            if (response.ok) {
                console.log('Asignatura agregada correctamente');
            } else {
                console.error('Error al agregar asignatura');
            }
        } catch (error) {
            console.error('Error en la conexión:', error);
        }
    };

    return (
        <>
        <Barra_izq/>
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
                        <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">Tipo</label>
                        <select
                            id="tipo"
                            name="tipo"
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        >
                            <option value="virtual">Virtual</option>
                            <option value="normal">Normal</option>
                        </select>
                    </div>
                    {tipo === 'normal' && (
                        <div className="mb-4">
                            <label htmlFor="aula" className="block text-sm font-medium text-gray-700">Aula</label>
                            <input
                                type="text"
                                id="aula"
                                name="aula"
                                value={aula}
                                onChange={(e) => setAula(e.target.value)}
                                required
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
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
            <Footer/>
    

   </>
    );
};

// export default AgregarAsignatura;
