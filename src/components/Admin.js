import React, { Component } from 'react';
import Navbar from './doctor/Navbar';
import Sidebar from './doctor/Sidebar';
import Main from './doctor/Main';
class Doctor extends Component {
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
        console.log(this.state.isOpen);
        return (
            <div className="container">
                <Navbar sidebarOpen={this.state.isOpen} openSidebar={this.openSidebar}/>
                <Sidebar sidebarOpen={this.state.isOpen} closeSidebar={this.closeSidebar}/>

            </div>
        );
    }
}

// export default Doctor;

// import React, {useState, useEffect} from 'react';
// import firebase from '../../Firebase.js';

// export default function Edit() {
//     const [doctors,setdoctors] = useState([]);

//     const ref = firebase.firestore().collection("doctors");

//     const getDoctor = async() => {
//         // ref.onSnapshot((querySnapshot) => {
//         //     const item = [];
//         //     querySnapshot.forEach((doc) => {
//         //         item.push(doc.data());
                
//         //     });
//         //     console.log(item[0].nic);
//         // })
//         const item = [];
//         const doctor = await ref.where('nic', '==', '956676543v').get();
//         if(doctor.empty){
//             console.log("not found");
//         }
//         doctor.forEach((doc) => {
//             item.push(doc.data());
//         });
//         console.log(item[0].name);
//     }
//     useEffect(() => {
//         getDoctor();
//     }, []);


//     return (
//         <main className="main-container">
//             <div className="register-card">
//                 <div className="form-container">
//                     <form className="form">
//                         <div className="form-input">
//                             <div className="form-label"><label>Doctor ID</label></div>
//                             <div><input type="text" name="id" onChange="" className="input" /></div>
//                             <div className="form-input-button"><input type="submit" value="Submit" /></div>
                                
//                         </div>
//                     </form>
                
//                 </div>
//                 <div className="form-container"></div>
            
//             </div>
//         </main>
//     )
// }
// export default Edit;
