import React from "react";
import Sidenav from "../component/Sidenav";
import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../component/Navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CraditCardIcon from "@mui/icons-material/CreditCard";
import ShopingBagIcon from "@mui/icons-material/ShoppingBag";
import AccordianDash from "../component/AccordianDash";
import BarChart from "../charts/BarChart";
import Countup from "react-countup";
import "../Dash.css";
const Home = () => {
  return (
    <>
      <div className="bgColor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150 }}
                    className="gradient"
                  >
                    <CardContent>
                      <div className="iconstyle">
                        <CraditCardIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        $ <Countup delay={0.2} end={500} duration={0.3} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Earnings
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 150 }}
                    className="gradientLight"
                  >
                    <CardContent>
                      <div className="iconstyle">
                        <ShopingBagIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        $ <Countup delay={0.2} end={900} duration={0.3} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Total Orders
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ maxWidth: 345 }} className="gradientLight">
                    <Stack spacing={2} direction="row">
                      <div className="iconstyle">
                        <StorefrontIcon />
                      </div>

                      <div className="paddingAll">
                        <span className="pricetitle">$203k</span>
                        <br />
                        <span className="pricesubtitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                    <Stack spacing={2} direction="row">
                      <div className="iconstyleblack">
                        <StorefrontIcon />
                      </div>

                      <div className="paddingAll">
                        <span className="pricetitle">$203k</span>
                        <br />
                        <span className="pricesubtitle">Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <div className="paddingAll">
                      <span className="pricetitle"> Popular Products</span>
                    </div>

                    <AccordianDash />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};
export default Home;
