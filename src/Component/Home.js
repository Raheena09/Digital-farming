import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText, Container 
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import icon from '../images/icon.png';
import banner from '../images/banner.png';

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },

  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  },

  navbarDisplayFlex: {
    display: `flex`,
    justifyContent:'space-between'
   
    
  }

});

function Home() {


  
  const classes = useStyles();

  const navLinks1 = [
    { title: `home`, path: `/home` },
    { title: `about`, path: `/about` },
    { title: `shop`, path: `/shop` },
    { title: `queries`, path: `/queries` },
    { title: `contact`, path: `/contact` },
  ];

  const navLinks2 = [
    { title: `Log In`, path: `/logIn` },
    { title: `Sign In`, path: `/signIn` }
    
  ];
  return (
    <>
    <div>
      <AppBar position="static" style={{ backgroundColor: "#95A83F" }}>
        <Toolbar>
        <Container  className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
          <img src={icon} alt="icon" style={{height:'50px', width:'50px', padding:'0px'}} />
          </IconButton>

          <List component="nav" aria-labelledby="main navigation"   style={{paddingLeft:'50px'}}className={classes.navDisplayFlex} >
            {navLinks1.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List> 
          <List component="nav" aria-labelledby="main navigation"   className={classes.navbarDisplayFlex} >
            {navLinks2.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
        </Container>
        </Toolbar>
      </AppBar>
      <div id="banner" style={{height: '300px'}}> 
      <img src={banner} alt="banner"  style={{width: '100%', height: '100%'}}/>
      </div>
    </div>
  
    </>
  );
}

export default Home;
