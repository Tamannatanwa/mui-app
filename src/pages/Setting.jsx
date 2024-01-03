import React from "react";
import Sidenav from "../component/Sidenav";
import { Box, Typography } from "@mui/material";
import Navbar from "../component/Navbar";
import InputTasks from "../task/InputTasks"
import ListTask from "../task/ListTask";
import DeleteTask from "../task/DeleteTask";
const Setting = () => {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <InputTasks/>
          <ListTask/>
          <DeleteTask/>
        </Box>
      </Box>
    </>
  );
};
export default Setting;
