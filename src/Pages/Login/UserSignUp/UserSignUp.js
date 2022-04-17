import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Social from "../Social/Social";

const UserSignUp = () => {

    const [agree, setAgree] = useState(false);
    const navigate = useNavigate ();
    const emailRef = useRef ('');
    const passwordRef = useRef ('');
    const nameRef = useRef ('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const [updateProfile, updating, sendError] = useUpdateProfile(auth);

      const navigateLogin = () => {
        navigate ('/login');
    }
   
    const handlesignUp = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name});
        navigate ('/home');
    }


  return (
    <div className="container w-50 mx-auto">
      <h1 className="text-center">Please Register</h1>
      <Form onSubmit={handlesignUp}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control ref={nameRef} type="text"
          name="name" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
          <Form.Check onClick={() => setAgree(!agree)} type="checkbox" name="terms" label="Accept Terms And Conditon" />
        </Form.Group>

        <Button disabled={!agree} variant="primary d-block mx-auto my-3 w-50" type="submit">
          Register
        </Button>
      </Form>
      <p>
        Already Have An Account?
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
      <Social></Social> 
    </div>
  );
};

export default UserSignUp;
