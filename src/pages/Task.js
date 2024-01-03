
import React from 'react';
import "../App.css"
import InputTask from '../task/InputTask';
import DeleteTask from '../task/DeleteTask';
import ListTask from '../task/ListTask';

function Tasks() {
  return (
   <div className='App'>
    <InputTask/>
    <ListTask/>
    <DeleteTask/>
   </div>
  );
}
export default Tasks;
