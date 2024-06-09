
  const side = document.getElementById('sidebar');
  const btnSide = document.getElementById('btn-side');
  
//   btnSide.addEventListener('click', () => {
//     console.log('hizo click');
//   })
    // btnSide.addEventListener('click', () => {
      
    

    //   side.style.transform = 'translateX(250px)';  
       
      
      
      // console.log('hizo click')
    // })

    
    
    




export function Barra_izq() {



    return (

            <div id="sidebar" class="sidebar">
                <h2>Uleam</h2>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#servicios">Asignaturas</a></li>
                    <li><a href="#servicios">Asignaturas Virtules</a></li>
                    <li><a href="#servicios">Docentes</a></li>
                    <li><a href="#servicios">Estudiantes</a></li>
                    <li><a href="#servicios">Asignatura sin docentes</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#acerca">Acerca de</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </div>

    )
};

