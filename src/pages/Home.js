import React,{useEffect,useState} from 'react';
import authFetch from '../axioshandler/interseptor';

const Home = () => {
    const [data,setData]= useState([]);

    // let d = JSON.parse(localStorage.getItem("token"));

    useEffect(()=>{

      authFetch.get("/accounts").then(y=> {
        
            setData(y.data)
        }).catch(u=>{

            console.log(u);
        })

    },[])
  return (
    <table>
        <tbody>{
        
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
        </table>

  
  )
}

export default Home