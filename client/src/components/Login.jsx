import React, {useRef, useState} from 'react'
import { Form, Button, Card , Alert} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import { Link } from 'react-router-dom'

export default function Login(){
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    //const navigate = useNavigate()

    async function  handleSubmit(e) {
        e.preventDefault()
        //navigate("/stutable")
        try{
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        } catch{
            setError("Failed to sign in")
        }
        setLoading(false)
     }

    return (
        <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">כניסה לחשבון</h2>
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
                <Button disabled={loading} className="w-100" type="submit">
                    כניסה
                </Button>
            </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
              עוד אין לך חשבון? <Link to = "/signup">הירשם</Link>
        </div>
        </>
    );
}
