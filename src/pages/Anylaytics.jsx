import React from "react";
import Sidenav from "../component/Sidenav";
import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../component/Navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Population from "../charts/HbarChart";
import GeoChart from "../charts/GeoChart";
import PieChart from "../charts/PieCharts";
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
              <Grid item xs={5}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: 49 + "%", height: 130 }}
                    className="gradient"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        <Countup delay={0.2} end={22000} duration={0.3} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since Last Week
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 130 }}
                    className="gradientLight"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                         <Countup delay={0.4} end={32000} duration={0.6} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since Last Week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
                <Box height={10} />
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: 49 + "%", height: 130 }}
                    className="gradient"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        <Countup delay={0.4} end={12000} duration={0.6} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since Last Week
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 49 + "%", height: 130 }}
                    className="gradientLight"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        <Countup delay={0.4} end={24630} duration={0.6} />
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since Last Week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={7}>
                <Card sx={{ height: 41 + "vh" }}>
                  <CardContent><Population/></CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <GeoChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <PieChart/>
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
