import Logo from '../img/logoUleam.png';
import '../index.css';


export function NavBar() {

    
    return(
        <div>
            <nav className="navbar">        
                {/* <a className="nav-link" >Pagina Principal</a>
                <a href="/" id="MateriasVirtuales" to="" className='nav-link' >Materias virtuales</a> 
                {/* <a href=''>ingresar estudiantes</a> */}
                {/* <a href=''>ingresar Docente</a> */}
                {/* {/* <Link to=''></Link> */}

             {/* */} 
            {/* <div className="container-logo"> */}
                  <div className='container-objet' > 
    
                    <a>
                      <img className='logo' src={ Logo }/>
                    </a>
                    <div class="image-select">
                    <img src="dropdown-icon.png" alt="Dropdown Icon" class="select-button"/>
                    <div class="dropdown-content">
                        <div class="dropdown-item" data-value="1">Option 1</div>
                        <div class="dropdown-item" data-value="2">Option 2</div>
                        <div class="dropdown-item" data-value="3">Option 3</div>
                    </div>
                  {/* </div>   */}
              </div>
              </div>
              </nav> 
        </div>

    )
} 