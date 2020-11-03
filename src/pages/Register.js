import React, {useState} from 'react';
import './pages.scss';
import "./Form.scss";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";


export function Register() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return firstname.length>0 && lastname.length>0 && email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <h1>Register Panel</h1>
      <form onSubmit={handleSubmit} className="form" >
        <FormGroup controlId="firstname" bsSize="large" className="input">
          <FormLabel>First Name</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={firstname}
            onChange={e => setfirstname(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="lastname" bsSize="large" className="input">
          <FormLabel>Last Name</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={lastname}
            onChange={e => setlastname(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="email" bsSize="large" className="input">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large" className="input">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        
          <Button block bsSize="large" className="form-button" disabled={!validateForm()} type="submit">
            Register
          </Button>
        
      </form>
    </div>
  );
}
