import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Social from "../Social/Social";

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate ();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p> 
      }

    const handleFromSubmit = event => {
        event.preventDefault ();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async() => {
        const email = emailRef.current.value; 
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

  return (
    <div className="container w-50 mx-auto">
      <h1 className="text-center">Please Login</h1>
      <Form onSubmit={handleFromSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary d-block mx-auto my-3 w-50" type="submit">
          Login
        </Button>
      </Form>

      {errorElement}
      <p>New To Gym Trainer? <Link to='/register' className="text-primary pe-auto text-decoration-none" onClick={navigateRegister}>Please Register</Link> </p>
      <p>Forget Password? <Link to='/register' className="text-primary pe-auto text-decoration-none" onClick={resetPassword}>Reset Password</Link> </p>

      <Social></Social> 
    </div>
  );
};

export default Login;
