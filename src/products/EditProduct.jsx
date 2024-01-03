import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import { CurrencyRupee } from "@mui/icons-material";
import {
  addDoc,
  getDocs,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../firebase-config";
import { useAppStore } from "../AppStore";

const currencies = [
  {
    value: "mobile",
    label: "Mobile",
  },
  {
    value: "laptop",
    label: "Laptop",
  },
  {
    value: "electronics",
    label: "Electronics",
  },
  {
    value: "food",
    label: "Food",
  },
];

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; 
const day = currentDate.getDate();

const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

const EditProduct = ({ fid, CloseEvent }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  // const [rows,setRows] = useState([]);
  const setRows = useAppStore((state) => state.setRows);
  const empCollectionRef = collection(db, "products");

  useEffect(() => {
    console.log("fid", fid.id);
    setName(fid.name);
    setPrice(fid.price);
    setCategory(fid.category);
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const createUser = async () => {

    const updateUser = doc(db,"products",fid.id)
    const newField = {
        name:name,
        price:Number(price),
        category:category,
        date:String(formattedDate)
    }
    await updateDoc(updateUser,newField)
    getUsers();
    CloseEvent();
    Swal.fire("Submitted", "your file has been submitted", "success");
  };

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Edit Product
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={CloseEvent}
      >
        <Close />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            type="text"
            id="outlined-basic"
            label="Name"
            value={name}
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            onChange={handleName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="number"
            id="outlined-basic"
            label="Price"
            value={price}
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            onChange={handlePrice}
            inputProps={{
              startAdornment1: (
                <InputAdornment position="start">
                  <CurrencyRupee />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="text"
            id="outlined-basic"
            select
            label="Category"
            value={category}
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            onChange={handleCategory}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" align="center" onClick={createUser}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
};

export default EditProduct;
