import React, { Component } from 'react';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    state={
        isOpen:false
    };
    handleToggle=()=> {
        this.setState({isOpen: !this.state.isOpen});
    }



    render() {
        return (
            <nav className="navbar">
                
                <div className="navbar-center">
                    <button
                        type="button"
                        className="navbar-button"
                        onClick={this.handleToggle}>
                        <FaAlignRight className="navbar-icon" />
                    </button>        
                </div>
                <ul className={this.state.isOpen ? "nav-links navbar-show": "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                            
                    </li>
                    <li>
                        <Link to="/rooms">Log In</Link>
                            
                    </li>
                    <li>
                        <Link to="/rooms">About Us</Link>
                            
                    </li>
                    
                </ul>

            </nav>
            
        )
    }
}
