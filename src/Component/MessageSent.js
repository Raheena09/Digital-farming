import React from 'react'
import Nav from './Common/Nav';
import { Typography } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


function MessageSent() {

    const useStyles = makeStyles((theme) => ({
      
        paper: {
          marginTop: theme.spacing(3),
          marginBottom: theme.spacing(3),
          padding: theme.spacing(2),
          [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
          },
        }
        
      }));

  const classes = useStyles();

      
    return (
        <div>
           <Nav/>
           <div id="message-sent" style={{  textAlign: "center",
    margin: "150px"}}>
               <div id="message">
               <Paper className={classes.paper} style={{backgroundColor:"#95A83F", color:"white"}}>

               <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for messaging us.
                </Typography>
                <Typography variant="subtitle1">
                    We have successfully recieved your message,<br/> and will respond you as soon as possible.
                </Typography>
              </React.Fragment>
              
             <div id="back-home-button" style={{padding:"30px"}}>
             <Link to="/"><Button variant="contained" style={{width:"200px"}}>
             Back to Home
            </Button></Link>
             </div>
              </Paper>
               </div>
           </div>
        </div>
    )
}

export default MessageSent
