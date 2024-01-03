import React, { useState } from "react";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const MyComponent = () => {
  const [state, setState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state !== "") {
      try {
        const res = await axios.post("http://localhost:5000/task", {
          name: state,
        });
        console.log(res);
        setState("");
        window.location = "/setting";
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh"}}
    >
      <Grid item xs={12} md={6}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            name="task"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="btn"
            type="submit"
          >
            ADD TASK
          </Button>
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUju2K4LbFxKDh8dSxzvDWLYkg9Z9zyXBv4ECQhzKBbA&s" // Replace with your image URL
              alt="Random Kitten"
              style={{ maxWidth: "100%", height: "auto", borderRadius: 8,padding: 16 }}
            />
        </form>
      </Grid>

      <Grid item xs={12} md={6}>
        <img
          src="https://placekitten.com/400/400"
          alt="Random Kitten"
          style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }}
        />
      </Grid>
    </Grid>
  );
};
export default MyComponent;

