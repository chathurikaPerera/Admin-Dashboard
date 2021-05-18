import React, {Component } from 'react';
import firebase from '../../Firebase.js';

class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {id:'', list:[], name:'', hospital:'', specialist:'', docId:'', nic:'', age:'', gender:'', address:'', mobile:'', email:''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }
   //956676543v

    getDoctor = async(name) => {
        const ref = firebase.firestore().collection("doctors");
        const item = [];
        const doctor = await ref.where('nic', '==', name).get();
        if(doctor.empty){
            console.log("not found");
        }
        doctor.forEach((doc) => {
            item.push(doc.data());
        });
        console.log(item[0].name);
        this.setState({list:item});
        console.log(this.state.list);
        console.log(this.state.list[0].nic);
        this.state.list.map((data) => (
            this.setState({address: data.address}),
            this.setState({age: data.age}),
            this.setState({docId: data.doctorID}),
            this.setState({gender: data.gender}),
            this.setState({hospital: data.hospital}),
            this.setState({mobile: data.mobile}),
            this.setState({name: data.name}),
            this.setState({specialist: data.specialist}),
            this.setState({email: data.email}),
            console.log(this.state.gender)
        ))
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
        console.log(event.target.value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.id);
        this.getDoctor(this.state.id);

    }

    handleEditSubmit = (event) => {
        event.preventDefault();
        const ref = firebase.firestore().collection("doctors");
        console.log("edit");
        ref.doc(this.state.list[0].nic).update({
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
            <div className="edit-card">
                <div className="form-container">
                    <h2>Enter the Doctor NIC</h2>
                    <form onSubmit={this.handleSubmit} className="form-edit">
                        <div className="form-input">
                            <div className="form-edit-label"><label>Doctor ID</label></div>
                            <div><input type="text" name="id" onChange={this.handleChange} className="edit-input" /></div>     
                        </div>
                        <div className="form-input-button"><input type="submit" value="Submit" /></div>
                    </form>
                </div>
                <div className="edit-container">
                    <form onSubmit={this.handleSubmit} className="form">
                        <div className="form-input">
                            <div className="form-label-edit"><label>Name</label></div>
                            <div><input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="input-edit" /></div>
                                
                        </div>
                        <div className="form-input">
                            <div className="form-label-edit"><label>Hospital</label></div>
                            <div><input type="text"  name="hospital" value={this.state.hospital} onChange={this.handleChange} className="input-edit"/></div>
                                
                        </div>
                        <div className="form-input">
                            <div className="form-label-edit"><label>Specialist</label></div>
                            <div><input type="text" name="specialist" value={this.state.specialist} onChange={this.handleChange} className="input-edit" /></div>
                                
                        </div>
                        <div className="form-input">
                            <div className="form-label-edit"><label>Doctor ID</label></div>
                            <div><input type="text" name="docId" value={this.state.docId} onChange={this.handleChange} className="input-edit"/></div>
                                
                        </div>
                        <div className="form-input">
                            <div className="form-label-edit"><label>Age</label></div>
                            <div><input type="text" name="age" value={this.state.age} onChange={this.handleChange} className="input-edit"/></div>
                                
                        </div>
                        <div className="form-input">
                            <div className="form-label-edit"><label>Gender </label></div>
                            <div><input type="text" name="gender" value={this.state.gender} onChange={this.handleChange} className="input-edit"/></div>
                                
                        </div> 
                        <div className="form-input">
                            <div className="form-label-edit"><label>Address</label></div>
                            <div><input type="text" name="address" value={this.state.address} onChange={this.handleChange} className="input-edit"/></div>
                                
                        </div>                       
                        <div className="form-input">
                            <div className="form-label-edit"><label>Mobile Number</label></div>
                            <div><input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} className="input-edit"/></div>
                                
                        </div>
                        <div className="form-input">
                            <div className="form-label-edit"><label>Email Address</label></div>
                            <div><input type="text" name="email" value={this.state.email} onChange={this.handleChange} className="input-edit"/></div>        
                        </div>
                        <div className="form-input-button"><input type="submit" value="Submit" /></div>
                        </form>
                
                </div>
            </div>
        </main>
    );
  }
}
export default Edit;
