import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Skeleton from '@mui/material/Skeleton';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
  Box,
  Divider,
  Stack,
  Typography,
  Autocomplete,
  TextField,
  Button,
} from "@mui/material";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import Modal from "@mui/material/Modal";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddProduct from "./AddProduct";
import { useAppStore } from "../AppStore";
import EditProduct from "./EditProduct";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ProductList() {
  const [page, setPage] = useState(0);
  const [editOpen,setEditOpen] =useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleEditClose = () => setOpen(false);
  const handleEditOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const setRows = useAppStore((state)=>state.setRows)
  const rows = useAppStore((state)=>state.rows)
  const [formid,setFormid] = useState("")


  const empCollectionRef = collection(db, "products");
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",

      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes !",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const useDoc = doc(db, "products", id);
    await deleteDoc(useDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      setRows([]);
      getUsers();
    }
  };
  const editData = (id,name,price,category)=>{
    const data = {
      id:id,
      name:name,
      price:price,
      category:category
    }
    setFormid(data)
    handleEditOpen()
  }
  return (
    <>
      <div>
        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <AddProduct CloseEvent={handleClose}/>
          </Box>
        </Modal>
        <Modal
          open={editOpen}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <EditProduct CloseEvent={handleEditClose} fid={formid}/>
          </Box>
        </Modal>
      </div>
      {rows.length > 0 && (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <Typography
            variant="h5"
            component="div"
            padding={"20px"}
            gutterBottom
          >
            Product List
          </Typography>
          <Divider />
          <Box height={10} />
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              onChange={(e, v) => filterData(v)}
              getOptionLabel={(rows) => rows.name || ""}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Products" />
              )}
            />
            <Typography
            variant="h6"
            component="div"
            sx={{flexGrow:"1"}}
            >
            </Typography>
            <Button variant="contained" endIcon={<AddCircleIcon/>} onClick={handleOpen}>ADD</Button>
          </Stack>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Name
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Price
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Category
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Date
                  </TableCell>
                  <TableCell align="left" style={{ minWidth: "100px" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell key={row.id} align="left">
                          {row.name}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.price}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.category}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.date}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          <Stack direction="row" spacing={2}>
                            <EditIcon
                              style={{
                                fontSize: "20px",
                                cursor: "pointer",
                                color: "blue",
                                className: "cursor-pointer",
                              }}
                              onClick={() => editData(row.id,row.name,row.price,row.category)}
                            />
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                cursor: "pointer",
                                color: "darkRed",
                                className: "cursor-pointer",
                              }}
                              onClick={() => deleteUser(row.id)}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}

                  {rows.length<=0 &&(
                    <>
                      <Paper sx={{width:"98%",overflow:"hidden",padding:"12px"}}>
                      <Box height={20}/>
                      <Skeleton variant="rectangular" width={"100%"} height={30} />
                      <Box height={40}/>
                      <Skeleton variant="rectangular" width={"100%"} height={60} />
                      <Box height={20}/>
                      <Skeleton variant="rectangular" width={"100%"} height={60} />
                      <Box height={20}/>
                      <Skeleton variant="rectangular" width={"100%"} height={60} />
                      <Box height={20}/>
                      <Skeleton variant="rectangular" width={"100%"} height={60} />
                      <Box height={20}/>
                      <Skeleton variant="rectangular" width={"100%"} height={60} />
                      <Box height={20}/>
                      </Paper>
                    </>
                  )
                  }
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
}
