//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import  Signup  from './components/Signup'
import Login from './components/Login';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './components/context/AuthContext';

import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom"

function App() {
  return (
      <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Router>
              <AuthProvider>
                <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
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


export default App;
