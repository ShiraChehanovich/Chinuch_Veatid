import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import RegularTextField from './RegularTextField';
import { Form, Card , Alert} from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { addDoc, doc, setDoc } from "firebase/firestore";
import { collection, query } from 'firebase/firestore/lite';
import { firestore } from '../firebase/firebase';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
// async function add(fname, lname, id, email, phone, age, address) {
//   const studentRef = collection(firestore, "student");
//   const staffRef = collection(firestore, "staff");
//   await setDoc(doc(firestore, {
//     name: fname,
//     lastName: lname,
//     id: id,
//     email: email,
//     phone: phone,
//     age: age,
//     address: address,
//   }));

  
//  }



export default function ModalPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fnameRef = React.useRef ()
  const lNameRef = React.useRef()
  const IDRef = React.useRef()
  const emailRef = React.useRef()
  const phoneRef = React.useRef()
  const ageRef = React.useRef()
  const addressRef = React.useRef()
  const navigate = useNavigate()


  // async function handleSubmit(e){
  //   e.preventDefault()
  //           //console.log(fnameRef.current.value)
  //           //await add(fnameRef.current.value, lNameRef.current.value,IDRef.current.value, emailRef.current.value, phoneRef.current.value, ageRef.current.value, addressRef.current.value)
  //           //firestore.collection("student").add({fnameRef, lNameRef,IDRef, emailRef, phoneRef, ageRef, addressRef})
  //           // const DocRef = await setDoc(collection(firestore, "student"), {
  //           //   name: fnameRef.current.value,
  //           //   lastName: lNameRef.current.value,
  //           //   id: IDRef.current.value,
  //           //   email: emailRef.current.value,
  //           //   phone: phoneRef.current.value,
  //           //   age: ageRef.current.value,
  //           //   address: addressRef.current.value,
  //           // });
  //           // console.log("Document written with ID: ", DocRef.id);

  //         //   useEffect (() => {
  //         //     if(collection) { 
  //         //       var q;
  //         //       //const newcoll = col(projectFirestore, collection);
  //               const studentRef = collection(firestore, "student");
  //         //       // const q = query(studentRef, orderBy('createdAt', 'desc'));
  //         //       // const unsub = onSnapshot(q, (snapshot) => {
  //         //         q = query(studentRef);
  //         //         const snapshot = await setDoc(q)
  //         //         let documents = [];
  //         //         snapshot.forEach(doc => {
  //         //            documents.push({...doc.data(), id: doc.id})
  //         //         // })
  //         //         //setDocs(documents);
  //         //       });
           
  //         //       return unsub;
  //         //    }
  //         //  },[collection]);
  //         //const docRef = firestore.collection(firestore, "student").doc();
  //         //const newId = docRef.id;
  //         const newId = firestore.newId;
  //         firestore.studentRef.doc(newId).set({
  //           name: fnameRef.current.value,
  //             lastName: lNameRef.current.value,
  //             id: IDRef.current.value,
  //             email: emailRef.current.value,
  //             phone: phoneRef.current.value,
  //             age: ageRef.current.value,
  //             address: addressRef.current.value,
  //         })

  //           navigate("/students")
  //         }
    const studentRef = collection(firestore,"student");
    const [newName,setNewName] = React.useState("")
    const [newLName,setNewLName] = React.useState("")
    const [newId,setNewId] = React.useState(0)
    const [newEmail,setNewEmail] = React.useState("")
    const [newPhone,setNewPhone] = React.useState(0)
    const [newAge,setNewAge] = React.useState(0)
    const [newAddress,setNewAddress] = React.useState("")
    const handleSubmit = async (e) =>{
        e.preventDefault()
      await setDoc(doc(studentRef),{
        name: newName,
        lastName: newLName,
        id: newId,
        email: newEmail, 
        phone: newPhone,
        age: newAge,
        address: newAddress,
      });
      navigate("/students ");
    }
  return (
    <div>
      <Button onClick={handleOpen}>
          <AddIcon/>
          חדש
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {/* <Card>
            <Card.Body> */}
            <h2 className="text-center mb-4">הוספת תלמיד</h2>
            <Form onSubmit={handleSubmit}>
                <Button className="w-100" type="submit">
                    הוספה
                </Button>
                <Form.Group id="first-name">
                    <input  t = "שם פרטי"  value = {newName} onChange={(event) => setNewName(event.target.value)}></input>
                {/* <Form.Label>שם פרטי</Form.Label>
                <Form.Control ref={fnameRef}  required /> */}
                </Form.Group>
                <Form.Group id="last-name">
                <RegularTextField  t = "שם משפחה"  value = {newLName} onChange={(event) => setNewLName(event.target.value)}></RegularTextField>
                {/* <Form.Label>שם משפחה</Form.Label> */}
                {/* <Form.Control ref={lNameRef} required /> */}
                </Form.Group>
                <Form.Group id="email">
                <RegularTextField t = "מייל"  value = {newEmail} onChange={(event) => setNewEmail(event.target.value)}></RegularTextField>
                {/* <Form.Label>מייל</Form.Label> */}
                {/* <Form.Control type="email" ref={emailRef} required /> */}
                </Form.Group>
                <Form.Group id="ID">
                <RegularTextField t = "תעודת זהות"  value = {newId} onChange={(event) => setNewId(event.target.value)}></RegularTextField>
                {/* <Form.Label>תעודת זהות</Form.Label> */}
                {/* <Form.Control ref={IDRef} required /> */}
                </Form.Group>
                <Form.Group id="phone">
                <RegularTextField t = "טלפון"  value = {newPhone} onChange={(event) => setNewPhone(event.target.value)}></RegularTextField>
                {/* <Form.Label>מספר טלפון</Form.Label> */}
                {/* <Form.Control ref={phoneRef} required /> */}
                </Form.Group>
                <Form.Group id="age">
                <RegularTextField t = "גיל"  value = {newAge} onChange={(event) => setNewAge(event.target.value)}></RegularTextField>
                {/* <Form.Label>גיל</Form.Label> */}
                {/* <Form.Control ref={ageRef} required /> */}
                </Form.Group>
                <Form.Group id="address">
                <RegularTextField t = "כתובת"  value = {newAddress} onChange={(event) => setNewAddress(event.target.value)}></RegularTextField>
                {/* <Form.Label>כתובת</Form.Label> */}
                {/* <Form.Control ref={addressRef} required /> */}
                </Form.Group>
            </Form>
            {/* </Card.Body>  
        </Card> */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
