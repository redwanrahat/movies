import React from 'react'
import logo from '../Assets/Logo.svg'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="nav-content">
                <div className="brand">
                    <img src={logo} alt="logo" height="35px"/>
                </div>
                <div className="searchBar">
                    <input className="search" placeholder="Search Movies" type="text" />
                </div>
                <div className="nav">
                    <ul className="menu">
                        <li>Popular</li>
                        <li>Most Viewed</li>
                        <li>IMDB Hit</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar