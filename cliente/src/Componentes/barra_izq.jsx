import React, { useState, useEffect, useRef } from 'react';

export function Barra_izq() {
  const [btn_ltr, setBtn] = useState(false);
  const sideRef = useRef(null);

  const handleButtonClick = () => {
    setBtn(!btn_ltr); // Cambiar el estado del botón al hacer clic
  };

  useEffect(() => {
    const side = sideRef.current;

    const handleClickOutside = (event) => {
      if (side && !side.contains(event.target)) {
        if (btn_ltr) {
          setBtn(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [btn_ltr]); // Escuchar cambios en btn_ltr para actualizar la transformación y el event listener

  useEffect(() => {
    const side = sideRef.current;
    if (side) {
      side.style.transition = 'transform 0.5s ease-in-out';
      if (btn_ltr) {
        side.style.transform = 'translateX(0px)';
      } else {
        side.style.transform = 'translateX(-257px)';
      }
    }
  }, [btn_ltr]); // Escuchar cambios en btn_ltr para actualizar la transformación

  return (
    <div ref={sideRef} id="sidebar" className="sidebar w-80 translate-y-56 h-screen text-white pt-5 fixed top-0">

      <div className="pb-9 translate-y-56 overflow-y-auto flex h-screen w-64 flex-col items-center bg-white text-black fixed top-0 left-0">
        
        <div className='items-center sm:container flex bg-green-800 h-24 mb-10 rounded-br-full '>
        <img className='mt-2 ml-2 w-3/5' src="https://aulavirtualmoodle.uleam.edu.ec/pluginfile.php/1/theme_klass/logo/1717190707/logo_ULEAM_2017_horizontal_blanco.png" alt="" />
        </div>
        <ul className="list-none p-0">
          <li className="p-3 text-center hover:opacity-5"><a className="text-black text-center hover:text-gray-900" href="/inicio">Inicio</a></li>
          <li className="p-3 text-center hover:opacity-5"><a className="text-black text-center hover:text-gray-900" href="/materias">Asignaturas</a></li>
          <li className="p-3 text-center hover:opacity-5"><a className="text-black text-center hover:text-gray-900" href="/materias/virtuales">Asignaturas Virtules</a></li>
          <li className="p-3 text-center hover:opacity-5"><a className="text-black text-center hover:text-gray-900" href="/docentes">Docentes</a></li>
          <li className="p-3 text-center hover:opacity-5"><a className="text-black text-center hover:text-gray-900" href="/lista/estudiantes">Estudiantes</a></li>
          <li className="p-3 text-center hover:opacity-5"><a className="text-black text-center hover:text-gray-900" href="/inicio">Asignatura sin docentes</a></li>
          
          <li className="p-3 text-center hover:opacity-5"><a className="text-black text-center hover:text-gray-900" href="/agregar/docente">Agregar Docente</a></li>
          <li className="p-3 text-center hover:opacity-5"><a className="text-black text-center hover:text-gray-900" href="/agregar/alumno">Agregar Alumno</a></li>
          <li className="p-3 text-center hover:opacity-5"><a className="text-black text-center hover:text-gray-900" href="/agregar/asignatura">Agregar Asignatura</a></li>
        </ul>
        <button className='bg-green-800 w-10/12 mt-6 text-white rounded-lg h-14'>Cerrar session</button>
      </div>

        <button onClick={handleButtonClick} className="w-12">
      <div className=" opacity-20 hover:opacity-100 cursor-pointer flex absolute mt-28 bg-blue-500 p-2 rounded-br-2xl rounded-tr-2xl right-0">
          {btn_ltr ? 'Cerrar' : 'Abrir'}
      </div>
        </button>
    </div>
  );
}
