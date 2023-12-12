import axios from "axios"
import { toast } from 'react-toastify';

const authFetch = axios.create({

    baseURL : "https://real-pear-fly-kilt.cyclic.app/"
})

authFetch.interceptors.request.use((requ)=>{

    requ.headers['Content-type']='application/json'

    return requ;

},(error)=>{

    return Promise.reject(error);
})

authFetch.interceptors.response.use((response)=>{

   console.log(response)

   if(response.status == 200)
   {
      

    toast.success(`${response.data.message}`,{

        position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    })
   }

   if(response.status === 400)
   {


    toast.error(`${response.data.message}`,{

        position: "top-center",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    })
   }
   return response;
    
},(error)=>{
    if(error?.response?.status === 400)
    {
 
 
     toast.error(`${error.response.data.message}`,{
 
         position: "top-center",
       autoClose: false,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: 0,
     })
    }

    return Promise.reject(error);
})
export default authFetch;