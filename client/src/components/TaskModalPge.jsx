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
import { doc, setDoc } from "firebase/firestore";
import { firestore } from '../firebase/firebase';
import PopingMenu from './PopingMenu';
import SelectAdateInTheCalendar from './SelectAdateInTheCalendar';
import ListOfTeachers from './ListOfTeachers';
import SearchIcon from '@mui/icons-material/Search';
import ListOfTasksForTeacher from './ListOfTasksForTeacher';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EventNoteIcon from '@mui/icons-material/EventNote';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ListItemButton from '@mui/material/ListItemButton'; 
import ListAltIcon from '@mui/icons-material/ListAlt';
import ModeIcon from '@mui/icons-material/Mode';
import ListOfTasks from './ListOfTasks';
import TimeDateClock from './TimeDateClock';

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



export default function TaskModalPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fnameRef = React.useRef ()
  const lNameRef = React.useRef()
  const IDRef = React.useRef()
  const emailRef = React.useRef()
  const phonelRef = React.useRef()
  const ageRef = React.useRef()
  const addressRef = React.useRef()
  const navigate = useNavigate()


  async function handleSubmit(e){
    e.preventDefault()
            //console.log(fnameRef.current.value)
           // await add(fnameRef.current.value, lNameRef.current.value,IDRef.current.value, emailRef.current.value, phonelRef.current.value, ageRef.current.value, addressRef.current.value)
            navigate("/students ")
          }
  return (
    <div>
        <PopingMenu/>
      <Button onClick={handleOpen}>
          <AddIcon/>
          משימה חדשה
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
            <div className="text-center mb-4">הוספת משימה</div>
            <Form onSubmit={handleSubmit}>
                <Button className="w-100" type="submit">
                    הוספה
                </Button>
                <Form.Group id="first-name">
                    {/* <RegularTextField  t = "תאריך" ref={fnameRef} required></RegularTextField> */}
                    <EventNoteIcon/>
                <Form.Label size = "small">תאריך</Form.Label>
                <SelectAdateInTheCalendar/>
                </Form.Group>
                <Form.Group id="last-name">
                {/* <RegularTextField  t = "שעה" ref={lName} required></RegularTextField> */}
              
                <Form.Label>שעה</Form.Label>
              <TimeDateClock/>
                </Form.Group>
                <Form.Group id="email">
                {/* <RegularTextField t = "סוג משימה"></RegularTextField> */}
                <ListAltIcon/>
                <Form.Label>סוג משימה</Form.Label>
                
{/* <ListItemButton></ListItemButton> */}
                <ListOfTasks/>
                {/* <RolingList/> */}
                </Form.Group>
                <Form.Group id="ID">
                {/* <RegularTextField t = "משתתפים" ref={IDRef} required></RegularTextField> */}
                {/* <Form.Label>משתתפים</Form.Label>
                <SearchIcon /> */}
                <ListOfTasksForTeacher/>
                {/* <Form.Control ref={IDRef} required /> */}
                
                </Form.Group>
                <Form.Group id="phone">
                {/* <RegularTextField t = "מיקום"></RegularTextField> */}
                <FmdGoodIcon/>
                <Form.Label>מיקום</Form.Label>
                <Form.Control ref={phonelRef} required />
                </Form.Group>
                <Form.Group id="age">
                {/* <RegularTextField t = "תאור משימה"></RegularTextField> */}
                <ModeIcon/>
                <Form.Label>תאור המשימה</Form.Label>
               
                <Form.Control ref={ageRef} required />
                </Form.Group>
                <Form.Group id="address">
                {/* <RegularTextField t = "כתובת"></RegularTextField>
                <Form.Label>כתובת</Form.Label>
                <Form.Control ref={addressRef} required /> */}
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
