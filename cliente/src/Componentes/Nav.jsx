import Logo from '../img/logoUleam.png';
import '../index.css';
import { useState } from 'react';
import { jwtDecode  } from 'jwt-decode'; // Importación correcta


export function NavBar(data) {
    console.log(data);
    
    const [display, setDisplay] = useState(false);
    const authCookie = localStorage.getItem('auth-cookie');
    const isAuthenticated = !!localStorage.getItem('auth-cookie');
    console.log(isAuthenticated)
    let dataUser = {};

    if (isAuthenticated) {
        dataUser = jwtDecode(authCookie);
        console.log(dataUser);
    }

    return (
        <div>
            <nav className="flex h-20 bg-green-800 ">
                <div className='w-full flex justify-between items-center' >
                    <a className='container'>
                        <img className='w-52 ml-4' src={Logo} />
                    </a>
                    {isAuthenticated ? (
                        <div class="mr-7">
                            <img className='w-12 rounded-full' src={dataUser.img} alt="Dropdown Icon" />
                            <div class="dropdown-content">
                            </div>
                        </div>
                    ) : null}
                </div>
            </nav>
        </div>

    )
} 