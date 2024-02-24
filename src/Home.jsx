import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from './redux/UserReducer';
export default function Home() {
  const dispatch= useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state)=>state.users)
  console.log('data', data);
  const deleteUserHandle =(id)=>{
    dispatch(deleteUser({id:id}))
  }
  return (
   <div className='my-10 '>
   <h1 className='text-3xl font-bold'>CRUD App with JSON Server</h1>
   <Button variant="success" className='text-white bg-green-500 font-semibold flex justify-start mt-10 ml-10' onClick={()=>navigate('/create')}>Create +</Button>
     <div className=' flex justify-center items-center flex-col mt-10 mr-10 ml-10'>
     <Table className='w-full' striped variant='light' hover>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>EDIT</td>
            <td>REMOVE</td>
          </tr>
        </thead>
        <tbody>
          
          {
            data.map((item)=>(
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td><Button variant="info" className='text-white bg-sky-600  font-semibold m-2'><Link to={`/edit/${item.id}`}>Edit</Link> </Button></td>
                <td><Button variant="danger" className='text-white bg-red-500  font-semibold m-2' onClick={()=>deleteUserHandle(item.id)}>Remove</Button></td>
              </tr>
            ))
          }
          
        </tbody>
      </Table>
     </div>
   </div>
  )
}
