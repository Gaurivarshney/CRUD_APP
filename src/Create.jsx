import React, { useState } from 'react'
import { Button} from 'react-bootstrap'
import { addUsers } from './redux/UserReducer';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Create() {
  const data = useSelector((state)=>state.users)
  const dispatch = useDispatch();
  const [name, setName]= useState('');
  const [email, setEmail] =useState('');
  const navigate = useNavigate();
 const handleSubmit=(event)=>{
  event.preventDefault();
  dispatch(addUsers({id: data[data.length-1].id+1, name, email}));
  navigate('/')
 }
  return (
  
      <div className='w-full h-[100vh] flex items-center justify-center gap-2 border-gray-300 '>
       <div className='w-[90%] md:w-[70%] border border-gray-300 rounded-lg flex flex-col justify-center items-center p-4 bg-slate-700'>
        <div className='flex justify-center flex-col items-center w-full '>
        <div className='w-full flex  justify-center items-center  '>
          <label htmlFor="name" className='text-white text-xl'>Name:</label> <br />
          <input type="text" name='name' className='placeholder:text-grey-400 w-[600px] h-[40px] p-4 bg-white m-4 border-none outline-none rounded-md text-grey-400 text-lg text-semibold' placeholder='Enter Your Name..' onChange={e=>setName(e.target.value)} required/>
        </div>
        <div className='w-full flex justify-center items-center '>
          <label htmlFor="email" className='text-white text-2xl'> Email: </label> <br />
          <input type="email" name='email' className=' bg-white rounded-md  placeholder:text-grey-400 w-[600px] h-[40px] p-4 m-4 border-none outline-none  text-grey-400 text-lg text-semibold' placeholder='Enter Your Email..' onChange={e=>setEmail(e.target.value)} required/>
        </div>
       
        <Button variant="success" className='text-white bg-green-500 w-[100px] h-[50px] text-xl font-semibold m-4' onClick={handleSubmit}>Submit</Button>
        </div>
       </div>
    </div>
  
  )
}
