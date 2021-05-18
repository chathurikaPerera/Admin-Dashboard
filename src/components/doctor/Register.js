import React, { Component } from 'react';
import firebase from '../../Firebase.js';
import Doctorlist from '../Doctorlist';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {name:'', hospital:'', specialist:'', docId:'', age:'', gender:'', address:'', mobile:'', email:'', list:[]};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    
    // getDoctor = () => {
    //     const item=[];
    //     const ref = firebase.firestore().collection("doctors");
    //     ref.onSnapshot((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             item.push(doc.data());
    //         });
    //     })
    //     this.setState({list:item});
    //     console.log(this.list);
    // }

    handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // componentDidMount(){
    //     this.getDoctor();
    // }

    handleSubmit = (event) =>{
        event.preventDefault();
        alert(this.state.name);
        const ad = firebase.firestore();
        const user = ad.collection("doctors").add({
            address: this.state.address,
            age: this.state.age,
            doctorID: this.state.docId,
            gender: this.state.gender,
            hospital: this.state.hospital,
            mobile: this.state.mobile,
            name: this.state.name,
            specialist: this.state.specialist,
            email: this.state.email,
        })
  }
    render() {
        return (
            <main className="main-container">
                <div className="register-card">
                   <div className="form-container">
                        <h2>Add Doctor </h2>
                        <form onSubmit={this.handleSubmit} className="form">
                            <div className="form-input">
                                <div className="form-label"><label>Name</label></div>
                                <div><input type="text" name="name" onChange={this.handleChange} className="input" /></div>
                                
                            </div>
                            <div className="form-input">
                                <div className="form-label"><label>Hospital</label></div>
                                <div><input type="text"  name="hospital" onChange={this.handleChange} className="input"/></div>
                                
                            </div>
                            <div className="form-input">
                                <div className="form-label"><label>Specialist</label></div>
                                <div><input type="text" name="specialist" onChange={this.handleChange} className="input" /></div>
                                
                            </div>
                            <div className="form-input">
                                <div className="form-label"><label>Doctor ID</label></div>
                                <div><input type="text" name="docId" onChange={this.handleChange} className="input"/></div>
                                
                            </div>
                            <div className="form-input">
                                <div className="form-label"><label>Age</label></div>
                                <div><input type="text" name="age" onChange={this.handleChange} className="input"/></div>
                                
                            </div>
                            <div className="form-input">
                                <div className="form-label"><label>Gender </label></div>
                                <div><input type="text" name="gender" onChange={this.handleChange} className="input"/></div>
                                
                            </div> 
                            <div className="form-input">
                                <div className="form-label"><label>Address</label></div>
                                <div><input type="text" name="address" onChange={this.handleChange} className="input"/></div>
                                
                            </div>                       
                            <div className="form-input">
                                <div className="form-label"><label>Mobile Number</label></div>
                                <div><input type="text" name="mobile" onChange={this.handleChange} className="input"/></div>
                                
                            </div>
                            <div className="form-input">
                                <div className="form-label"><label>Email Address</label></div>
                                <div><input type="text" name="email" onChange={this.handleChange} className="input"/></div>
                                
                            </div>
                            <div className="form-input-button"><input type="submit" value="Submit" /></div>
                        </form>
                   </div>
                   <div className="doctor-container">
                        <h2>Specialist list </h2>
                        <Doctorlist/>

                   </div>
                
                </div>
                
            </main>
        );
    }
}

export default Register;
