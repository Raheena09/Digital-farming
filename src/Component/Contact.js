import React from "react";
import "../Style/Contact.css";
import TextField from "@material-ui/core/TextField";
import { fade, makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

function Contact() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiInputBase-root": {
        backgroundColor: fade(theme.palette.common.white, 0.9),
        "&:hover": {
          backgroundColor: fade(theme.palette.common.white, 0.55),
        },
        height: 25,
        "& input": {
          textAlign: "center",
        },
      },

      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();
  return (
    <div id="contact-main">
      <div id="contact-us">
        <div style={{ color: "white", fontSize: "26px" , paddingBottom:'20px'}}> Contact Us</div>
        <div id="main-contact-form">
        <div id="contact-form" style={{ display: "flex" }}>
          <div id="contact-form-label" className='noHover'>
            <li>Name:</li>
            <li>Email:</li>
            <li>Phone:</li>
            <li>Message:</li>
          </div>
          <div id="contact-form-textfield">
            <form className={classes.root} noValidate autoComplete="off">
              <div>
              <TextField
                id="outlined-basic"
                variant="outlined"
               
              />
              </div>
              <div  className="each-textfield">
              <TextField
                id="outlined-basic"
                variant="outlined"
              
              />
              </div>
              <div className="each-textfield">
              <TextField
                id="outlined-basic"
                variant="outlined"
               
              />
              </div>
              <div>
              <TextareaAutosize  className="each-textfield" 
               aria-label="minimum height"
                rowsMin={3} style={{width:"216px", borderRadius:"9px", textAlign: "center"}} />
              </div>
            </form>
          </div>
         
        </div>
        <div id="send-button" style={{textAlign:"center"}}>
         <Link to ="/messageSent"> <Button variant="contained" style={{width:"100px"}}>
        Send
      </Button></Link>
          </div>
        </div>
      </div>
      <div id="follow-us">
      <div style={{ color: "white", fontSize: "26px" , paddingBottom:'20px'}}> Follow Us</div>
      <div id="follow-us-icon" style={{display:'flex'}}>
        <div className="icon-style"><FacebookIcon fontSize="large"/></div>
        <div className="icon-style" style={{padding: '0px 25px'}}><InstagramIcon fontSize="large" /></div>
        <div className="icon-style"><TwitterIcon fontSize="large"/></div>


      </div>
      </div>
    </div>
  );
}

export default Contact;
