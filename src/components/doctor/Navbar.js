import React from 'react';
import {FaAlignRight, FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function Navbar({ sidebarOpen, openSidebar}) {
    console.log(sidebarOpen);
    return (
        <nav className="dash-navbar"> 
            <button
                type="button"
                className="dash-nav-button"
                onClick={openSidebar}>
                <FaAlignRight className="navbar-icon" />
            </button>
            
            <div className="navbar-left">
                <Link to="/" className="link">Home</Link>
                <Link to="/" className="link">About Us</Link>
                <Link to="/" className="active-link">Admin</Link>
            </div>
               
            
        </nav>
    )
}
