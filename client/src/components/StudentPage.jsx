import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useRef, useState } from 'react'
import { firestore } from '../firebase/firebase';
import PlusButton from './PlusButton'
import PopingMenu from './PopingMenu'
import RegularTextField from './RegularTextField'
import './ClassStyle.css'
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

var idS;
var s;
export default function StudentPage() {
    const {studentId} = useParams();
    // console.log(studentId)
    // idS = props.id;
    const studentRef = collection(firestore, "student");
    const [studentObjects, setStudentObjects] = useState([]);
    const fnameRef = useRef()
    const lNameRef = useRef()
    const emailRef = useRef()
    const IDRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef()

    function handleSubmit(){

    }
    //paramps
    // id = props.id;
    const getData = async () => {
        var q  = query(studentRef, where("idUser", "==", studentId));
        
        const snapshot = await getDocs(q)
        // const  result = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
        snapshot.forEach(doc =>
           {
             //console.log(doc.data())  
             setStudentObjects(prev => [...prev, doc.data()])
            }
          
        )
        
      }
    //   React.useEffect(()=>{getData()}, []);    
    //   React.useEffect(()=>{getData()});
    // React.useEffect(()=>{console.log(studentObjects)}, [studentObjects])

      const setData = async () =>{
        studentObjects.map((s)=>{
        fnameRef.current.value = s.name;
        lNameRef.current.value = s.lastName;
        emailRef.current.value = s.email;
        IDRef.current.value = s.id;
        phoneRef.current.value = s.phone;
        addressRef.current.value = s.address;
        })
    }
    React.useEffect(()=>{getData()},[]);    
    React.useEffect(()=>{setData()});    

  return (
    <div style={{width:"100%"}}>
      <PopingMenu/>
      <div className="flex" style={{width:"100%"}}>
      <h2>עריכת סטודנט</h2>
      {/* {studentObjects.map((s)=>{ */}
          {/* return( */}
      <div>
      <Form  width = "50%" onSubmit={handleSubmit}>
      <Form.Group id="first-name">
                    {/* <RegularTextField  t = "שם פרטי"  value = {newName} onChange={(event) => {console.log(event.target.value); setNewName(event.target.value)}}></RegularTextField> */}
                 <Form.Label>שם פרטי</Form.Label>
                <Form.Control type="text" ref={fnameRef}  required /> 
                </Form.Group>
                <Form.Group id="last-name">
                {/* <RegularTextField  t = "שם משפחה"  value = {newLName} onChange={(event) => setNewLName(event.target.value)}></RegularTextField> */}
                <Form.Label>שם משפחה</Form.Label>
                <Form.Control type="text" ref={lNameRef} required />
                </Form.Group>
                <Form.Group id="email">
                {/* <RegularTextField t = "מייל"  value = {newEmail} onChange={(event) => setNewEmail(event.target.value)}></RegularTextField> */}
                <Form.Label>מייל</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="ID">
                {/* <RegularTextField t = "תעודת זהות"  value = {newId} onChange={(event) => setNewId(event.target.value)}></RegularTextField> */}
                <Form.Label>תעודת זהות</Form.Label>
                <Form.Control type="number" ref={IDRef} required />
                </Form.Group>
                {/* </div>
                <div> */}
                {/* <Form.Group id="grade"> */}
                {/* <RegularTextField t = "כיתה"  value = {newGrade onChange={(event) => setNewAge(event.target.value)}></RegularTextField> */}
                {/* {tableType.tableType == 'Staff' ? null : (<Form.Label>כיתה</Form.Label>)} */}
                {/* {tableType.tableType == 'Staff' ? null : (<Form.Control type="text" ref={gradeRef} required />)} */}
                {/* </Form.Group> */}
                <Form.Group id="phone">
                {/* <RegularTextField t = "טלפון"  value = {newPhone} onChange={(event) => setNewPhone(event.target.value)}></RegularTextField> */}
                <Form.Label>מספר טלפון</Form.Label>
                <Form.Control type="number" ref={phoneRef} required />
                </Form.Group>
                {/* <Form.Group id="ageAndRole"> */}
                {/* <RegularTextField t = "גיל"  value = {newAge} onChange={(event) => setNewAge(event.target.value)}></RegularTextField> */}
                {/* {tableType.tableType == 'Staff' ? (<Form.Label>תפקיד</Form.Label>) : (<Form.Label>גיל</Form.Label>)} */}
                {/* {tableType.tableType == 'Staff' ? (<Form.Control type="text" ref={roleRef} required />) : (<Form.Control type="number" ref={ageRef} required />)} */}
                {/* </Form.Group> */}
                <Form.Group id="address">
                {/* <RegularTextField t = "כתובת"  value = {newAddress} onChange={(event) => setNewAddress(event.target.value)}></RegularTextField> */}
                <Form.Label>כתובת</Form.Label>
                <Form.Control type="text" ref={addressRef} required />
                </Form.Group>
                <Button  className="w-100" type="submit">
                    כניסה
                </Button>
            </Form>
      <PlusButton />
      </div>
          {/* )
          })}  */}
      </div>
      <div style={{width:"40%"}}>
      <h4>מסמכים</h4>
      </div>
    </div>
  )
}
