import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import axios from 'axios';

const EditTask = (props) => {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState(props.task.name);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/task/${props.task.todo_id}`, {
        name: taskName,
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  
    handleClose();
    window.location = '/setting';
  };
  

  return (
    <div>
      <button className='btn1' onClick={handleOpen}>
        Update
      </button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ color: 'black' }}>Update the Task</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            variant="outlined"
            label="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="secondary" onClick={handleUpdate}>
            Update
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditTask;
