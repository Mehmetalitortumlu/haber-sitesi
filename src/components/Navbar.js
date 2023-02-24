import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
    const { theme, setTheme } = useTheme()
    let activeStyle = theme === 'dark' ? {
        borderBottom: "2px solid white"
    } : {
        borderBottom: "2px solid black"
    };

    return (
        <div className='navbar-div '>
            <nav className={`navbar navbar-expand-lg mx-auto navbar-${theme} bg-${theme} `}>
                <div className="container">
                    <Link className="navbar-brand" to="/">Mehmet Ali Tortumlu</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarColor01">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink to="/" style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } className={`nav-link active `}>Anasayfa</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                } to="/about" className={"nav-link active "} >Hakkımda</NavLink>
                            </li>
                            <li onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='nav-item d-flex align-items-center'>
                                {theme === 'dark' && <i className="fa-regular fa-sun nav-link active "></i>}
                                {theme === 'light' && <i className="fa-regular fa-moon nav-link active "></i>}
                            </li>
                        </ul>

                    </div>
                    <ul className='d-flex my-auto'>
                        <li className='list'>
                            <i className="fa-brands fa-facebook"></i>
                        </li>
                        <li className='list'>
                            <i className="fa-brands fa-youtube"></i>
                        </li>
                        <li className='list'>
                            <i className="fa-brands fa-linkedin"></i>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    )
}

export default Navbar;
