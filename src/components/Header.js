import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext';

function Header() {
    const { theme } = useTheme()

    let activeStyle = theme === 'dark' ? {
        borderBottom: "2px solid white"
    } : {
        borderBottom: "2px solid black"
    };

    return (
        <div className={`container-fluid bg-${theme} header`}>
            <header className="d-flex justify-content-center py-3 ">

                <ul className="nav nav-pills">
                    <li className="nav-item ">
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className={"nav-link header-link"} to="/business" >
                            İşletme
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className={"nav-link header-link"} to="/entertainment" >
                            Eğlence
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className={"nav-link header-link"} to="/general" >
                            Genel
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className={"nav-link header-link"} to="/healty" >
                            Sağlık
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className={"nav-link header-link"} to="/science" >
                            Bilim
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className={"nav-link header-link"} to="/sports" >
                            Spor
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className={`nav-link header-link`} to="/tecnology" >
                            Teknoloji
                        </NavLink></li>
                </ul>
            </header>
        </div>
    )
}

export default Header
