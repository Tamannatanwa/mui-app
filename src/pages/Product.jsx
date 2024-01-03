import React from "react";
import Sidenav from "../component/Sidenav";
import { Box, Typography } from "@mui/material";
import Navbar from "../component/Navbar";
import ProductList from "../products/ProductList";
const About = () => {
  return (
    <>
    <div className="bgColor">
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <ProductList/>
        </Box>
      </Box>
      </div>
    </>
  );
};
export default About;
