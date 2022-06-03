import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import RegularTextField from './RegularTextField';
import { Form, Card , Alert} from "react-bootstrap"
import { Link } from 'react-router-dom'

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

export default function ModalPage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fnameRef = React.useRef ()
    const lName = React.useRef()
    const IDRef = React.useRef()

  async function handleSubmit(e){

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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {/* <Card>
            <Card.Body> */}
            <h2 className="text-center mb-4">הוספת תלמיד</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group id="first-name">
                    <RegularTextField/>
                {/* <Form.Label>שם פרטי</Form.Label> */}
                {/* <Form.Control type="email"  ref={fnameRef}  required /> */}
                </Form.Group>
                <Form.Group id="last-name">
                <RegularTextField />
                {/* <Form.Label>שם משפחה</Form.Label> */}
                {/* <Form.Control type="password"  required /> */}
                </Form.Group>
                <Form.Group id="first-name">
                {/* <Form.Label>כתובת</Form.Label> */}
                <RegularTextField />
                {/* <Form.Control type="email"  required /> */}
                </Form.Group>
                <Form.Group id="first-name">
                <RegularTextField />
                {/* <Form.Label>תאריך לידה</Form.Label> */}
                {/* <Form.Control type="email"  required /> */}
                </Form.Group>
                <Form.Group id="first-name">
                <RegularTextField />
                {/* <Form.Label>כתובת מייל</Form.Label> */}
                {/* <Form.Control type="email"  required /> */}
                </Form.Group>
                <Button className="w-100" type="submit">
                    כניסה
                </Button>
            </Form>
            {/* </Card.Body>  
        </Card> */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
