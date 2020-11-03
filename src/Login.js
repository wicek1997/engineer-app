import React, {useState} from 'react';
import '././App.scss';
import "././scss//Form.scss";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";


export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <h1>Login Panel</h1>
      <form onSubmit={handleSubmit} className="form" >
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
