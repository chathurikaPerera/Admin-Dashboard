import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <main className="main-container">
                <div className="register-card">
                   <div className="form-container">
                        <h2>Add Doctor </h2>
                        <form onSubmit="" className="form">
                            <div className="form-input">
                                <div><label className="form-label">Name</label></div>
                                <div><input type="text" value="" onChange="" className="input" /></div>
                                
                            </div>
                            <div className="form-input">
                                <div><label className="form-label">Hospital</label></div>
                                <div><input type="text" value="" onChange="" className="input" /></div>
                                
                            </div>
                            <div className="form-input">
                                <div><label className="form-label">Specialist</label></div>
                                <div><input type="text" value="" onChange="" className="input" /></div>
                                
                            </div>
                            <div className="form-input">
                                <div><label className="form-label">Address</label></div>
                                <div><input type="text" value="" onChange="" className="input" /></div>
                                
                            </div>
                            <div className="form-input">
                                <div><label className="form-label">Mobile Number </label></div>
                                <div><input type="text" value="" onChange="" className="input" /></div>
                                
                            </div> 
                            <div className="form-input"><input type="submit" value="Submit" /></div>
                        </form>
                   </div>
                   <div className="form-container"></div>
                
                </div>
                
            </main>
        );
    }
}

export default Register;
