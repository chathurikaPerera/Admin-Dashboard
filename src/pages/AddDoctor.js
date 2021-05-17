import React, { Component } from 'react';
import Navbar from '../components/doctor/Navbar';
import Sidebar from '../components/doctor/Sidebar';
import Register from '../components/doctor/Register';

export default class AddDoctor extends Component {
    state={
        isOpen:false
    };
    openSidebar=()=> {
        this.setState({isOpen: true});
        console.log("open");
    };
    closeSidebar = () =>{
        this.setState({isOpen: false});
    };
    render() {
        return (
            <div className="container">
                <Navbar sidebarOpen={this.state.isOpen} openSidebar={this.openSidebar}/>
                <Sidebar sidebarOpen={this.state.isOpen} closeSidebar={this.closeSidebar}/>
                <Register />

            </div>
        )
    }
}
