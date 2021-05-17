import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
    return (<>
        <Navbar/>
        <div className="header">
            <Link to="/doctor" className="select-button">Manage Doctors</Link>
            <Link to="/rooms" className="select-button">Manage Receptionalist</Link>
            
        </div>
        </>
    
    )
}
