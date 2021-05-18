import React from 'react';
import {FaBookMedical, FaUserMd, FaUserEdit} from 'react-icons/fa';

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
            
        </main>
    )
}
