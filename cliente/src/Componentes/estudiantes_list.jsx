// StudentList.jsx
import React from 'react';

const students = [
    { id: 1, nombre: 'Juan Perez', correo: 'juan.perez@example.com' },
    { id: 2, nombre: 'Maria Garcia', correo: 'maria.garcia@example.com' },
    { id: 3, nombre: 'Carlos Lopez', correo: 'carlos.lopez@example.com' }
  ];
  
 export const Estudiante_list = () => {
    return (
      <div className='list-std' >
        <h1>Lista de Estudiantes</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Nro</th>
              <th>Nombre</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index+1}</td>
                <td>{student.nombre}</td>
                <td>{student.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

// export default Estudiante_list;
