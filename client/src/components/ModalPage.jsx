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
import { addDoc, doc, setDoc, collection } from "firebase/firestore";
import { firestore } from '../firebase/firebase';
import { useAuth } from './context/AuthContext';
import SelectedRolingList from './SelectedRolingList'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
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


var tableType;
export default function ModalPage(t) {
  tableType = t;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fnameRef = React.useRef ()
  const lNameRef = React.useRef()
  const IDRef = React.useRef()
  const emailRef = React.useRef()
  const phoneRef = React.useRef()
  const ageRef = React.useRef()
  const roleRef = React.useRef ()
  const addressRef = React.useRef()
  const gradeRef = React.useRef()
  const  childRef = React.useRef()
  const navigate = useNavigate()
  const { currentUser,  } = useAuth()


    const handleSubmitStudent = async () =>{
      console.log(currentUser)
        // e.preventDefault()
      await setDoc(doc(collection(firestore, "student")),{
        // name: newName,
        // lastName: newLName,
        // id: newId,
        // email: newEmail, 
        // phone: newPhone,
        // age: newAge,
        // address: newAddress,
        name: fnameRef.current.value,
        lastName: lNameRef.current.value,
        idUser: parseInt(IDRef.current.value, 10),
        grade: gradeRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,  
        age: parseInt(ageRef.current.value, 10),
       address: addressRef.current.value,
      });
      window.location.reload(false);
    }
    const handleSubmitStaff = async () =>{
      // e.preventDefault()
    await setDoc(doc(collection(firestore, "staff" )),{
      name: fnameRef.current.value,
      lastName: lNameRef.current.value,
      idUser: parseInt(IDRef.current.value, 10),
      grade: childRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,  
      role: roleRef.current.value,
     address: addressRef.current.value,
    });
    window.location.reload(false);
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

            {tableType.tableType == 'Staff' ? (<div><h2 className="text-center mb-4">הוספת איש צוות</h2></div>) : (<div><h2 className="text-center mb-4">הוספת תלמיד</h2></div>)}
                {tableType.tableType == 'Staff' ? (<Button className="w-100" type="submit" onClick={handleSubmitStaff}>הוספה</Button>) : (<Button className="w-100" type="submit" onClick={handleSubmitStudent}>הוספה</Button>)}
            <Form >
                <div style={{display: 'flex' , flexWrap : 'nowrap'}}>
                <div>
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
                <Form.Group id="idUser">
                {/* <RegularTextField t = "תעודת זהות"  value = {newId} onChange={(event) => setNewId(event.target.value)}></RegularTextField> */}
                <Form.Label>תעודת זהות</Form.Label>
                <Form.Control type="number" ref={IDRef} required />
                </Form.Group>
                </div>
                <div>
                <Form.Group id="grade">
                {/* <RegularTextField t = "כיתה"  value = {newGrade onChange={(event) => setNewAge(event.target.value)}></RegularTextField> */}
                {tableType.tableType == 'Staff' ? null: (<Form.Label>כיתה</Form.Label>)}
                {tableType.tableType == 'Staff' ? <SelectedRolingList ></SelectedRolingList> : (<Form.Control type="text" ref={gradeRef} required />)}
                </Form.Group>
                <Form.Group id="phone">
                {/* <RegularTextField t = "טלפון"  value = {newPhone} onChange={(event) => setNewPhone(event.target.value)}></RegularTextField> */}
                <Form.Label>מספר טלפון</Form.Label>
                <Form.Control type="number" ref={phoneRef} required />
                </Form.Group>
                <Form.Group id="ageAndRole">
                {/* <RegularTextField t = "גיל"  value = {newAge} onChange={(event) => setNewAge(event.target.value)}></RegularTextField> */}
                {tableType.tableType == 'Staff' ? (<Form.Label>תפקיד</Form.Label>) : (<Form.Label>גיל</Form.Label>)}
                {tableType.tableType == 'Staff' ? (<Form.Control type="text" ref={roleRef} required />) : (<Form.Control type="number" ref={ageRef} required />)}
                </Form.Group>
                <Form.Group id="address">
                {/* <RegularTextField t = "כתובת"  value = {newAddress} onChange={(event) => setNewAddress(event.target.value)}></RegularTextField> */}
                <Form.Label>כתובת</Form.Label>
                <Form.Control type="text" ref={addressRef} required />
                </Form.Group>
                </div>
                </div>
            </Form>
            {/* </Card.Body>  
        </Card> */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
