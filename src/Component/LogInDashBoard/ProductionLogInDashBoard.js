import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import LogInDashBoard from "./LogInDashBoard";
import Button from '@material-ui/core/Button';

import firebase from '../Config';
import {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';








export default function ProductionLogInDashBoard() {

  const firestore = firebase.firestore();
  // console.log(firestore);
  const history = useHistory();
  const[data,setData]=useState({
    userName:'',
    productName:'',
    quantity:'',
    address:'',
    duration:'',
    date:'',
  })

  const inputEvent =(event) =>
  {
    const{name,value}=event.target;
    setData((obj)=>{
      return{
        ...obj,
        [name]:value,
      }

    })
  }

  const SubmitProduction=(e)=>{
    e.preventDefault();
    firestore.collection("data").add({
      userName:data.userName,
      productName:data.productName,
      quantity:data.quantity,
      address:data.address,
      duration:data.duration,
      date:data.date
      
    });
    console.log("dshbsj");

    history.push('/successfulDataInsert');

    
  }



  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const classes = useStyles();

  return (
    <>
      <div
        id="production-logInDashBoard"
        style={{ backgroundColor: "#5d9149" }}
      >
        <div>
          <LogInDashBoard/>

        </div>
        <div id="production-form" style={{ padding: "108px " }}>
          <h1 style={{ color: "black", paddingTop: "100px" }}>
            Production Update Information
          </h1>



          <React.Fragment>
          
          <div style={{color:"black"}}>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className="heading-textf">
          Username
          </Typography>
          <TextField
          required
          id="userName"
          name="userName"
          label="Username"
          fullWidth
          variant="outlined"
          value={data.userName}
          onChange={inputEvent}
          margin="dense"

          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className="heading-textf">
          Product Name
          </Typography>
          <TextField
          required
          id="productName"
          name="productName"
          label="Product Name"
          fullWidth
          variant="outlined"
          value={data.productName}
          onChange={inputEvent}
          margin="dense"

          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className="heading-textf">
         Product Quantity
          </Typography>
          <TextField
          required
          id="quantity"
          name="quantity"
          label="Quantity of Product"
          fullWidth
          variant="outlined"
          value={data.quantity}
          onChange={inputEvent}
          margin="dense"

          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className="heading-textf">
          Place of Production
          </Typography>
          <TextField
          required
          id="address"
          name="address"
          label="Place of Production"
          fullWidth
          variant="outlined"
          value={data.address}
          onChange={inputEvent}
          margin="dense"


          />
          </Grid>
          <Grid item xs={12} sm={6} >
          <Typography variant="h6"
          gutterBottom 
          className="heading-textf">
          Duration of Production
          </Typography>
          <TextField
          required
          id="duration"
          name="duration"
          label="Duration of production" 
          fullWidth
          variant="outlined"
          value={data.duration}
          onChange={inputEvent}
          margin="dense"

          />
          </Grid>
          <Grid item xs={12} sm={6} className="heading-textf">
          <Typography variant="h6" gutterBottom className="heading-textf">
          Production Date
          </Typography>
          <TextField
          required
          id="date"
          name="date"
          label="Date of production"
          fullWidth
          variant="outlined"
          value={data.date}
          onChange={inputEvent}
          margin="dense"
          />
          </Grid>
      
          <Grid item xs={12}>
          <Button variant="contained"
            onClick={SubmitProduction}
           style={{backgroundColor:"#81bb6a"}}>
        Submit Data
      </Button>
          </Grid>
          </Grid>

          </div>
          
          </React.Fragment>
          {/* <form className={classes.root} noValidate autoComplete="on">
          <Grid container spacing={1} >
          <Grid item xs={12} sm={12}>
          <TextField 
            required
            fullWidth
              id="userName"
              name="userName"
              value={data.userName}
              onChange={inputEvent}
              label="User Name"
              variant="outlined"
            />
           
            <TextField
            required
              id="productName"
              name="productName"
              value={data.productName}
              onChange={inputEvent}
              label="Product Name"
              variant="outlined"
            />
            </Grid>
            <Grid item xs={12} sm={12}>
            <TextField
            required
              id="quantity"
              name="quantity"
              value={data.quantity}
              onChange={inputEvent}
              label="Quantity of Product"
              variant="outlined"
            />
            </Grid>
            <Grid item xs={12} sm={12}>

            <TextField
            required
             id="address"
             name="address"
             value={data.address}
             onChange={inputEvent}
             label="Address of production"
              variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={12}>

            <TextField
            required
              id="duration"
              name="duration"
              value={data.duration}
             onChange={inputEvent}
              label="Duration of production"
              variant="outlined"
            />
           </Grid>
           <Grid item xs={12} sm={12}>

            <TextField
            required
              id="date"
              name="date"
              value={data.date}
             onChange={inputEvent}
              label="Date of production"
              variant="outlined"
            />
            </Grid>
            
            <Button variant="contained"
            onClick={SubmitProduction}
           style={{backgroundColor:"#81bb6a"}}>
        Submit Data
      </Button>
            </Grid>
          </form> */}
        </div>
      </div>
    </>
  );
}
