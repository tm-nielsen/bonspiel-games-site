import React from "react";
import { Link } from "react-router-dom";
import '../styling/navbar.css'
import logo from '../images/favicon.ico'

const Navbar = () => {
    return <div className="navbar">
        <div className="width-container">
            <Link to='/' className="nav-main">
                <img src={logo} alt="logo" className="nav-logo" />
                <h1 className="nav-main">Bonspiel Games</h1>
            </Link>
            <nav className="nav-menu">
                <Link to='/#team' className="nav-link">
                    Team
                </Link>
                <Link to='/#news' className="nav-link">
                    News
                </Link>
                <Link to='bci' className="nav-link">
                    About BCI
                </Link>
            </nav>
        </div>
    </div>
}

export default Navbar