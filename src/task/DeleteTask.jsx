import { Button, Container } from '@mui/material'
import React from 'react';
import axios from 'axios';

const DeleteTask = () => {
  const deleteAll = async()=>{
    try{
      await axios.delete('http://localhost:5000/task');
      window.location = '/setting';
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <Container style={{ paddingBottom: '5rem' }}>
      <Button variant="contained"  fullWidth className="btn1" onClick={deleteAll}>
        Delete All Task
      </Button>
    </Container>
  )
}

export default DeleteTask;