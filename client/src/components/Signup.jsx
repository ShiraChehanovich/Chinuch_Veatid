import React, {useRef, useState} from 'react'
import { Form, Button, Card , Alert} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import { Link } from 'react-router-dom'

export default function Signup(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    //const history = useHistory()
    const navigate = useNavigate()

    async function  handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }
        try{
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            //history.push("/")
            navigate("/main ")
        } catch(err){            
            setError(err)
        }
        setLoading(false)
     }

    return (
        <>
        <Card style={{ maxWidth: "400px" }}>
            <Card.Body>
            <h2 className="text-center mb-4">הירשם</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                <Form.Label>מייל</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                <Form.Label>סיסמה</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                <Form.Label>אימות סיסמה</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                    הירשם
                </Button>
            </Form>
            </Card.Body>
        </Card>
        {/* <div className="w-100 text-center mt-2">
            יש לך חשבון? <Link to = "/login">היכנס</Link>
        </div> */}
        </>
    );
}
