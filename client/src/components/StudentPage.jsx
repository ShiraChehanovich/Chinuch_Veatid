import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useRef, useState } from 'react'
import { firestore } from '../firebase/firebase';
import PlusButton from './PlusButton'
import PopingMenu from './PopingMenu'
import RegularTextField from './RegularTextField'
import './ClassStyle.css'
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { height } from '@mui/system';

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
        var q  = query(studentRef, where("idUser", "==", parseInt(studentId,10)));
        
        const snapshot = await getDocs(q)
        // const  results = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
        snapshot.forEach( async doc =>
           {  
            //  console.log(result)
             setStudentObjects(prev => [...prev, doc.data()])
            }
          
        )        
      }
    //   React.useEffect(()=>{getData()}, []);    
    //   React.useEffect(()=>{getData()});
    // React.useEffect(()=>{console.log(studentObjects)}, [studentObjects])

    //   const setData = async () =>{
    //     studentObjects.map((s)=>{
    //     fnameRef.current.value = s.name;
    //     lNameRef.current.value = s.lastName;
    //     emailRef.current.value = s.email;
    //     IDRef.current.value = s.id;
    //     phoneRef.current.value = s.phone;
    //     addressRef.current.value = s.address;
    //     })
    // }
    React.useEffect(()=>{getData()},[]);    
    // React.useEffect(()=>{setData()});    

  return (
    <div style={{width:"100%"}}>
      <PopingMenu/>
      <div className="flex" style={{width:"100%", height:"10%"}}>
          <h6>{studentObjects.map((n) => n.name)}</h6>
      <div style={{width:"100%", height:"90%"}}>
      <h2>הוספת מסמכים</h2>
         <PlusButton />
      </div>
      </div>
    </div>
  )
}
