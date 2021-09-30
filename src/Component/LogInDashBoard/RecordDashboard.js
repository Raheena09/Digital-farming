import React from "react";
import LogInDashBoard from "./LogInDashBoard";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {useEffect,useState} from 'react';
import firebase from 'firebase';


function RecordDashboard() {

    const[productData, setProductData]=useState([]);
    const[isLoading,setIsLoading]=useState(true);
    const[userName,setUserName]=useState('');




    useEffect(()=>{
        setTimeout(function()
        {
            getData()
        },500);
    },[true])

    function  getData() {
            
        const firestore = firebase.firestore();
        return firestore.collection('data').onSnapshot((snapshot) => {
             console.log(snapshot)

           snapshot.forEach(function (value) {
            console.log(value.data());
            productData.push(value.data())

               
           });
           setUserName(JSON.parse(localStorage.getItem('_user_info')))
             setProductData(productData);
             setIsLoading(false);
        });

    }


    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor:"#95A83F",
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);
      
      
      const useStyles = makeStyles({
        table: {
          minWidth: 700,
        },
      });

      const classes = useStyles();

  return (
    <div>
      <div>
        <LogInDashBoard />
      </div>
      <div style={{padding:"20px",margin:'auto',color:'#000'}}>
            {isLoading?<div>Loading data</div>:


      <div id="record-table" style={{padding:'150px'}}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>Name of the Product</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Duration</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productData.map((data,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">{data.userName}</StyledTableCell>
              <StyledTableCell component="th" scope="row">{data.productName}</StyledTableCell>
              <StyledTableCell align="right">{data.quantity}</StyledTableCell>
              <StyledTableCell align="right">{data.address}</StyledTableCell>
              <StyledTableCell align="right">{data.duration}</StyledTableCell>
              <StyledTableCell align="right">{data.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      </div>

          }
      </div>
    </div>
  );
}

export default RecordDashboard;
