

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
// import { NavBar } from '../Componentes/Nav';

// Definir el esquema de validación con Yup
const schema = yup.object().shape({
  nombre: yup.string().required('Nombre es requerido'),
  apellido: yup.string().required('Apellido es requerido'),
  correo: yup.string().email('Correo no es válido').required('Correo es requerido'),
  telefono: yup.string().matches(/^[0-9]+$/, 'El teléfono debe ser numérico').required('Teléfono es requerido'),
  edad: yup.number().positive('La edad debe ser positiva').integer('La edad debe ser un número entero').required('Edad es requerida'),
  oficina: yup.string().required('Oficina es requerida'),
  cedula: yup.string().required('Cédula es requerida'),
  img: yup.string().url('Debe ser una URL válida'),
  rol_docente: yup.string().required('Rol de docente es requerido')
});

export const FormularioDocente = () => {
  const [roles, setRoles] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    // Obtener roles de la API
    const fetchRoles = async () => {
      try {
        const response = await axios.get('/api/roles');
        setRoles(response.data);
      } catch (error) {
        console.error('Error al obtener los roles', error);
      }
    };
    
    fetchRoles();
  }, []);

  const onSubmit = data => {
    console.log(data);
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700">Nombre</label>
        <input {...register('nombre')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
        {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Apellido</label>
        <input {...register('apellido')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
        {errors.apellido && <p className="text-red-500 text-sm">{errors.apellido.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Correo</label>
        <input {...register('correo')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
        {errors.correo && <p className="text-red-500 text-sm">{errors.correo.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Teléfono</label>
        <input {...register('telefono')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
        {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Edad</label>
        <input {...register('edad')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
        {errors.edad && <p className="text-red-500 text-sm">{errors.edad.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Oficina</label>
        <input {...register('oficina')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
        {errors.oficina && <p className="text-red-500 text-sm">{errors.oficina.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Cédula</label>
        <input {...register('cedula')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
        {errors.cedula && <p className="text-red-500 text-sm">{errors.cedula.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Imagen (URL)</label>
        <input {...register('img')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
        {errors.img && <p className="text-red-500 text-sm">{errors.img.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Rol Docente</label>
        <select {...register('rol_docente')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300">

          {/* {roles.map(role => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))} */}
        </select>
        {errors.rol_docente && <p className="text-red-500 text-sm">{errors.rol_docente.message}</p>}
      </div>
      
      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Enviar</button>
    </form>
  );
};

