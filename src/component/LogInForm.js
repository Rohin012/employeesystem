import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function LogInForm() {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><strong>Email</strong></Form.Label>
        <Form.Control type="email" placeholder="Please Enter Email" name="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><strong>Password</strong></Form.Label>
        <Form.Control type="password" placeholder="Please Enter password" name="password" />
      </Form.Group>

      <Button variant="primary">Save</Button>

      </Form>

      
  )
}
