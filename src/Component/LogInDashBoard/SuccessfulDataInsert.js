import { Typography } from "@material-ui/core";
import React from "react";
import LogInDashBoard from "./LogInDashBoard";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function SuccessfulDataInsert() {
  return (
    <div id="successfull-data-insert">
      <div>
        <LogInDashBoard />
      </div>
      <div id="information box" style={{padding:"200px 260px 320px 260px",backgroundColor: "#5D9149"}}>
        <div>
        <Typography style={{color:"white"}}><h1>The information about your production <br/>has been updated successfully!</h1></Typography>
        </div>
        <Button variant="contained"  style={{width:"150px", backgroundColor:"#81BB6A"}}>
        <Link to ="/recordDashboard" style={{color:'black'}}>View your records</Link>
      </Button>
      </div>
    </div>
  );
}

export default SuccessfulDataInsert;
