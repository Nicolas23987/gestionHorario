import Logo from '../img/logoUleam.png';
import '../index.css';
import icono from '../img/icono.jpg'


export function NavBar() {

    
    return(
        <div>
            <nav className="navbar">        
                  <div className='container-objet' > 
                    <a>
                      <img className='logo' src={ Logo }/>
                    </a>
                    <div class="image-select">
                    <img className='iconLogin' src={icono} alt="Dropdown Icon" />
                    <div class="dropdown-content">
                        <div class="dropdown-item" data-value="1">Option 1</div>
                        <div class="dropdown-item" data-value="2">Option 2</div>
                        <div class="dropdown-item" data-value="3">Option 3</div>
                    </div>
              </div>
              </div>
              </nav> 
        </div>

    )
} 