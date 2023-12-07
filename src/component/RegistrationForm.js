import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RegistrationForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Please Enter Title" name="title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder="Please Enter FirstName" name="firstName" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder="Please Enter LastName" name="lastName" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Please Enter Email" name="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Please Enter password" name="password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>ConfirmPassword</Form.Label>
        <Form.Control type="password" placeholder="Please Enter confirmpassword" name="confirmPassword" />
      </Form.Group>

      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="AcceptTerm"
        name="acceptTerms"
      />

<Button variant="primary">Save</Button>
<Button variant="danger">Cancel</Button>
      
    </Form>
  )
}

export default RegistrationForm