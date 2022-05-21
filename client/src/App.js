//import logo from './logo.svg';
//import './App.css';
import React from 'react';
// import  Signup  from './components/Signup'
// import { Container } from 'react-bootstrap';
// import { AuthProvider } from './components/context/AuthContext';
// import { Student_table } from './components/context/AuthContext';
import { ReactFirebaseFileUpload } from './components/ReactFirebaseFileUpload';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ForgotPassword from './components/ForgotPassword';

import Main from './components/Main';
import StudentTable from './components/StudentTable';
import StaffTable from './components/StaffTable';

function App() {
  return (
    <ReactFirebaseFileUpload />
    // <AuthProvider>
    // <Container className="d-flex align-items-center justify-content-center"
    // style={{ minHeight: "100vh" }}>
    //     <div className="w-100" style={{ maxWidth: "400px" }}>
    //         <Signup /> 
    //     </div>
    // </Container>
    // </AuthProvider>
  );
}
//function App() {
  //return (
    //<Student_table>
    //</Student_table>/<Container className="d-flex align-items-center justify-content-center"
    //style={{ minHeight: "100vh" }}>
        //<div className="w-100" style={{ maxWidth: "400px" }}>
        //    <Signup /> 
      //  </div>
    //</Container>
   // </Student_table>
 // );
//}


export default App;

