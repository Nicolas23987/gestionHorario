import Logo from '../img/logoUleam.png';
import '../index.css';
import icono from '../img/icono.jpg'
import { useState } from 'react';


export function NavBar(data) {
    console.log(data)
    // const [display, setState] = useState(false)
    const dataUser = data.data
    // if (dataUser.img) {
    //     setState(true)
    //     console.log(display)
    // }

    return (
        <div>
            <nav className="navbar">
                <div className='container-objet' >
                    <a>
                        <img className='logo' src={Logo} />
                    </a>
                    {dataUser ? (
                        <div class="image-select">
                            <img className='iconLogin' src={dataUser.img} alt="Dropdown Icon" />
                            <div class="dropdown-content">
                                <div class="dropdown-item" data-value="1">Option 1</div>
                                <div class="dropdown-item" data-value="2">Option 2</div>
                                <div class="dropdown-item" data-value="3">Option 3</div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </nav>
        </div>

    )
} 