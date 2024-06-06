import Logo from '../img/logoUleam.png';
import '../index.css';


export function NavBar() {
    
    return(
        <div>
            <nav className="navbar">        
                <a className="nav-link" >Pagina Principal</a>
                <a href="/" id="MateriasVirtuales" to="" className='nav-link' >Materias virtuales</a> 
                {/* <a href=''>ingresar estudiantes</a> */}
                {/* <a href=''>ingresar Docente</a> */}
                {/* <Link to=''></Link> */}

            </nav>

            <div className="container-logo">
                  <div className='container-objet' > 
    
                    <a>
                      <img className='logo' src={ Logo }/>
                    </a>
                    <li className='dropdown-idioma'>
                      <a className='Idioma'>
                        <select className="selec-idiom">
                          <option className='' value="es">ESPAÑOL (INTERNACIONAL) (ES)</option>
                          <option className='' value="es">English (en)</option>
                        </select>
                      </a> 
                     </li>
                  </div>  
              </div>
        </div>
    )
} 