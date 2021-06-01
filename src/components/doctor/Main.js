import React from 'react';
import {FaBookMedical, FaUserMd, FaUserEdit} from 'react-icons/fa';
import LineChart from './LineChart';
import PieChart from './PieChart';

export default function Main() {
    return (
        <main className="main-container">
          <div className="main-card">
                <div className="card">
                    <FaUserMd class="main-icon"/>
                    <div className="card-inner">
                        <p className="card-text">Number of Doctors</p>
                        <span className="card-numer">60</span>
                    </div>
                </div>
                <div className="card">
                    <FaUserEdit class="main-icon"/>
                    <div className="card-inner">
                        <p className="card-text">Number of Receptionalists</p>
                        <span className="card-numer">60</span>
                    </div>
                </div>
                <div className="card">
                    <FaBookMedical class="main-icon"/>
                    <div className="card-inner">
                        <p className="card-text">Number of appointments</p>
                        <span className="card-numer">60</span>
                    </div>
                </div>
          
        </div>
        <div className="main-card2">
            <div className="card2">
                <LineChart /> 
            </div>
            <div className="card2">
            <div className="graph">
               <PieChart/>
            </div>
            </div>
        </div>
            
        </main>
    )
}
