import React from 'react';
import {FaAlignRight, FaHome, FaAngleDoubleLeft, FaUserCheck,FaBookMedical,FaEdit,FaUserAlt,FaListUl} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export default function Sidebar({sidebarOpen, closeSidebar}) {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar-title">
               <h2>Care Me</h2>
               <button
                type="button"
                className="sidebar-button"
                id="sidebar-icon"
                onClick={() => closeSidebar()}>
                <FaAngleDoubleLeft className="sidebar-icon" />
                </button>
            </div>
            <div className="sidebar-menu">
               <div className="sidebar-link active-menu-link">
                  <FaHome className="sidebar-icon" />
                  <Link to="/">Dashboard</Link> 
               </div>
               <h2>Doctors Management</h2>
               <div className="sidebar-link">
                  <FaUserAlt className="sidebar-icon" />
                  <Link to="/doctor/add-doctor">Add Doctor</Link> 
               </div>
               <div className="sidebar-link">
                  <FaEdit className="sidebar-icon" />
                  <Link to="/">Edit/Delete Doctor</Link> 
               </div>
               <div className="sidebar-link">
                  <FaBookMedical className="sidebar-icon" />
                  <Link to="/">View Doctors</Link> 
               </div>
               <h2>Receptionalist Management</h2>
               <div className="sidebar-link">
                  <FaUserAlt className="sidebar-icon" />
                  <Link to="/">Add Receptionalist</Link> 
               </div>
               <div className="sidebar-link">
                  <FaEdit className="sidebar-icon" />
                  <Link to="/">Edit/Delete Receptionalist</Link> 
               </div>
               <div className="sidebar-link">
                  <FaListUl className="sidebar-icon" />
                  <Link to="/">View Receptionalist</Link> 
               </div>
               
               <div className="sidebar-logout">
                  <FaAlignRight className="sidebar-logout-icon" />
                  <Link to="/">Log Out</Link> 
               </div>
            
            
            </div>
        </div>
    )
}
