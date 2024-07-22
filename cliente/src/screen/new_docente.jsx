// import React, { useState } from "react";
// import { NavBar } from "../Componentes/Nav";
// import { useForm } from 'react-hook-form'
// import Axios from 'axios'
// import { LoadingScreen } from '../Componentes/loanding.jsx'
// import { useNavigate } from "react-router-dom";


// export function NewDocente() {
//   const { register, handleSubmit, formState: { errors } } = useForm()
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(""); // Estado para el mensaje de error

//   let navigate = useNavigate();

//   const [nombre, setNombre] = useState();
//   const [correo, setCorreo] = useState();
//   const [cedula, setCedula] = useState();

//   const data = {
//     nombre: nombre,
//     correo: correo,
//     cedula: cedula
//   }

//   const onSubmit = handleSubmit(async (data) => {
//     setError("");
//     setLoading(true);

//     try {

//       const response = await Axios.post('http://localhost:3000/api/create/alumno', {
//         nombre: data.nombre,
//         correo: data.correo,
//         contraseña: data.cedula,

//       });
//       if (response.status === 202) {
//         console.log(response)
//         console.log("Inicio de sesión exitoso");
//         alert('nuevo estudiante guardado con exito')

//       } else {
//         setError("Credenciales incorrectas");
//       }
//     } catch (error) {
//       console.error("Error al enviar los datos:", error);
//       setError('Credenciales incorrectas');
//     } finally {
//       setLoading(false);
//     }
//   });
//   return (
//     <React.Fragment>
//       {loading && <LoadingScreen />}

//       <NavBar />
//       <div className="container-form">
//         <div className="form-center">
//           <div className="form-login">
//             <form className="full-width" onSubmit={onSubmit}>
//               <div className="container-ob-form2">
//                 <h1 className='full-width'>Nuevo Estudiante</h1>
//                 {error && <div className="error-span"> <span className="error-span">{error}</span></div>} {/* Mostrar mensaje de error */}
//                 {errors.nombre && <div className="error-span"> <span className="error-span">Nombre es requerido</span> </div>}
//                 <input
//                   value={nombre}
//                   onChange={(e) => setNombre(e.target.value)}
//                   type="nombre"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   {...register("nombre", { required: true })}
//                   placeholder="nombre"
//                 />
//                 {error && <div className="error-span"> <span className="error-span">{error}</span></div>} {/* Mostrar mensaje de error */}
//                 {errors.correo && <div className="error-span"> <span className="error-span">Ingrese un correo</span> </div>}
//                 <input
//                   value={correo}
//                   onChange={(e) => setCorreo(e.target.value)}
//                   type="email"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   {...register("correo", { required: true })}
//                   placeholder="correo electronico"
//                 />
//                 {errors.cedula && <div className="error-span"> <span className="error-span">Ingrese una cedula</span></div>}
//                 <input
//                   value={cedula}
//                   onChange={(e) => setCedula(e.target.value)}
//                   type="cedula"
//                   className="form-control"
//                   id="exampleInputPassword1"
//                   placeholder="contraseña"
//                   {...register("password", { required: true })}
//                 />
//                 <button type="submit" className="btn dv-center btn-primary">Ingresar</button>
//               </div>
//             </form>
//             <div className="login-divide"></div>
//             <div className="btn-idm-cks">
//               <select name="" id="">
//                 <option className='' value="es">ESPAÑOL (INTERNACIONAL) (ES)</option>
//                 <option className='' value="es">English (en)</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   )
// }

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { NavBar } from '../Componentes/Nav';
import { FormularioDocente } from '../Componentes/formulario_docente';
import { Footer } from '../Componentes/footer';
import { Barra_izq } from '../Componentes/barra_izq';

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

export const NewDocente = () => {
 
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Barra_izq/>
    <div className='mt-20'>
    <FormularioDocente/>
    </div>
    <Footer/>
    </React.Fragment>
  );
};

