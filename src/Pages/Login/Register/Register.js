import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate ('/login') 
    }

    const handleRegister = event => {
        event.preventDefault ();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }

  return (
    <div className="container w-50 mx-auto"> 
      <h1 className="text-center">Please Register</h1>
      <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p>Already Have An Account? <Link to='/login' className="text-primary pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link> </p>
    </div>
  );
};

export default Register;
