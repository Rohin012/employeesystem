import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import authFetch from '../axioshandler/interseptor';
import { useNavigate } from 'react-router-dom';

export default function LogInForm() {

        const navi = useNavigate();

        const [form,setForm]=useState({
          email:"",
          password:""
        })

        const handleInput = (e)=>{
         
           setForm({...form,[e.target.name]:e.target.value});
          }
    
      
    
      const handleSubmit = (e) =>{
    
        e.preventDefault();
        authFetch.post("accounts/authenticate",form)
        .then(y=>{

            localStorage.setItem("token",JSON.stringify(y.data))
            console.log(y.data);

            navi("/Home")
        }).catch(y=>{

            console.log(y)
        })


      }



  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><strong>Email</strong></Form.Label>
        <Form.Control type="email" placeholder="Please Enter Email" name="email"
        onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label><strong>Password</strong></Form.Label>
        <Form.Control type="password" placeholder="Please Enter password" name="password"
        onChange={handleInput} />
      </Form.Group>

      <Button type='submit' variant="primary">Save</Button>

      </Form>

      
  )
}
