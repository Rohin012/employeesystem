import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import authFetch from '../axioshandler/interseptor';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navi = useNavigate();

  const[form,setForm]=useState({
    title:"",
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
    acceptTerm:"false"


  })

  const handleInput = (e)=>{
    
      if(e.target.type==="checkbox"){

        setForm({...form,[e.target.name]:e.target.checked}) 
      }

      else
      {
       setForm({...form,[e.target.name]:e.target.value})
      }

  }

  const handleSubmit = (e)=>{

    e.preventDefault();
    console.log(form);

    authFetch.post("accounts/register",form)
    .then(y=>{
      console.log(y)
    }).catch(y=>{

      console.log(y);
    })

    navi("/LogIn")

  }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Please Enter Title" name="title"
        onChange={handleInput}
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder="Please Enter FirstName" name="firstName" 
          onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder="Please Enter LastName" name="lastName"
        onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Please Enter Email" name="email"
        onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Please Enter password" name="password"
        onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>ConfirmPassword</Form.Label>
        <Form.Control type="password" placeholder="Please Enter confirmpassword" name="confirmPassword"
        onChange={handleInput} />
      </Form.Group>

      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="AcceptTerm"
        name="acceptTerms"
        onChange={handleInput}
      />

<Button type='submit' variant="primary">Save</Button>
<Button type='reset' variant="danger">Cancel</Button>
      
    </Form>
  )
}

export default RegistrationForm