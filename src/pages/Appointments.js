import React, { Component } from 'react';
import Navbar from '../components/doctor/Navbar';
import Sidebar from '../components/doctor/Sidebar';
import Main from '../components/doctor/Main';

export default class Appointments extends Component {
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
                <Main>Appointments</Main>

            </div>
        )
    }
}
