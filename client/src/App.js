//import logo from './logo.svg';
//import './App.css';
import React from 'react';
<<<<<<< Updated upstream
import  Signup  from './components/Signup'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import StudentFile from './components/StudentFile';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './components/context/AuthContext';
=======
// import  Signup  from './components/Signup'
// import { Container } from 'react-bootstrap';
// import { AuthProvider } from './components/context/AuthContext';
// import { Student_table } from './components/context/AuthContext';
import { ReactFirebaseFileUpload } from './components/ReactFirebaseFileUpload';
>>>>>>> Stashed changes

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ForgotPassword from './components/ForgotPassword';

import Main from './components/Main';
import StudentTable from './components/StudentTable';
import StaffTable from './components/StaffTable';

function App() {
  return (
<<<<<<< Updated upstream
      <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" ,alignContent: 'center'}}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Router>
              <AuthProvider>
                <Routes>
                <Route exact path="/" element={<Login />}/>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/students" element={<StudentTable />} />
                <Route path="/staff" element={<StaffTable />} />
                <Route path="/main" element={<Main />} />
                <Route path="/studentFile" element={<StudentFile />} />
                </Routes>
              </AuthProvider>
            </Router>
          </div>
      </Container>
  );
}
// function App() {
//   return (
//     <Student_table>
//     <Container className="d-flex align-items-center justify-content-center"
//     style={{ minHeight: "100vh" }}>
//         <div className="w-100" style={{ maxWidth: "400px" }}>
//             <Signup /> 
//         </div>
//     </Container>
//     </Student_table>
//   );
// }
=======
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
>>>>>>> Stashed changes


export default App;

