import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Box, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import EditTask from './EditTask';

const ListTask = () => {
  const [state,setState] = useState([]); 
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await axios.get('http://localhost:5000/task');
        console.log(res);
        setState(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[])
  const deleteItem = async(id)=>{
    try{
      await axios.delete(`http://localhost:5000/task/${id}`);
      const data = state.filter((item)=>item.todo_id !== id);
      console.log(data)
      setState(data);
    }
    catch(err){
      console.log(err);
    }
  }
  return(
    <Container>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">TASK</TableCell>
            <TableCell align="center">Update</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {state.map((row)=>{
          return(
            <TableRow key={row._id}>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center"><EditTask task={row}/></TableCell>
              <TableCell align="center"><button className='btn1' onClick={()=>deleteItem(row.todo_id)}>Delete</button></TableCell>
            </TableRow>
          )
        })}
        </TableBody>
      </Table>
      </TableContainer>
    </Container>
  )
}

export default ListTask;