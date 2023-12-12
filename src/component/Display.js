import React,{useEffect,useState} from 'react';
import authFetch from '../axioshandler/interseptor';
import Table from 'react-bootstrap/Table';

const Display = () => {
    const [data,setData]= useState([]);

    

    useEffect(()=>{

      authFetch.get("/accounts").then(y=> {
        
            setData(y.data)
        }).catch(u=>{

            console.log(u);
        })

    },[])
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Title</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>ConfirmPassword</th>
      </tr>
    </thead>
    <tbody>
    {
        
            data.map((v)=>{


                return(<tr>
                    <td>{v.title}</td>
                    <td>{v.firstName}</td>
                    <td>{v.lastName}</td>
                    <td>{v.email}</td>
                    <td>{v.password}</td>
                    <td>{v.Confirmpassword}</td>
                    
                    </tr>)

            })
        
        }
        
        </tbody>
        </Table>

  
  )
}

export default Display;