import React, { useState } from 'react'
import { Button } from 'react-bootstrap'    
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './redux/UserReducer';
import { useNavigate, useParams } from 'react-router-dom'
export default function UpdateUser() {
    const data = useSelector((state)=>state.users)
    const navigate = useNavigate();
    const {id} =useParams();
    const dispatch = useDispatch()
    const exisitingUser = data.filter(f=>f.id==id)
    const {name, email}= exisitingUser[0];
    const [uname, setName]= useState(name);
    const [uemail, setEmail] =useState(email);
    const updateHandle=(event)=>{
        event.preventDefault();
        dispatch((updateUser({id:id,
        name: uname,
        email:uemail})))
    navigate('/')
    }
  return (
    <div className='w-full h-[100vh] flex items-center justify-center gap-2 border-gray-300 '>
    <div className='w-[90%] md:w-[70%] border border-gray-300 rounded-lg flex flex-col justify-center items-center p-4 bg-slate-700'>
    <h1 className='text-white text-3xl font-bold'>Update User</h1>
     <div className='flex justify-center flex-col items-center w-full '>
     <div className='w-full flex  justify-center items-center  '>
       <label htmlFor="name" className='text-white text-xl'>Name:</label> <br />
       <input type="text" name='name' className='placeholder:text-grey-400 w-[600px] h-[40px] p-4 bg-white m-4 border-none outline-none rounded-md text-grey-400 text-lg text-semibold' placeholder='Enter Your Name..' value={uname} onChange={e=>setName(e.target.value)}/>
     </div>
     <div className='w-full flex justify-center items-center '>
       <label htmlFor="email" className='text-white text-2xl'> Email: </label> <br />
       <input type="email" name='email' className=' bg-white rounded-md  placeholder:text-grey-400 w-[600px] h-[40px] p-4 m-4 border-none outline-none  text-grey-400 text-lg text-semibold' placeholder='Enter Your Email..' value={uemail} onChange={e=>setEmail(e.target.value)}/>
     </div>
    
     <Button variant="success" className='text-white bg-green-500 w-[300px] h-[50px] text-xl font-semibold m-4' onClick={updateHandle}>Update Now</Button>
     </div>
    </div>
 </div>
  )
}
