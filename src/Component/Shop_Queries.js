import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import "../Style/Shop_Queries.css";
import { fade, makeStyles } from "@material-ui/core/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



function Shop_Queries() {
  const useStyles = makeStyles((theme) => ({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.9),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.55),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  //for shop section
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase:"linear"
  };

  const products = [
    {
      img: "/images/product1.jpg",
      title: "Dolore magna",
      text: "Lorem ipsum dolor sit amet elit.",
    },
    {
      img: "/images/product2.jpg",
      title: "Eget est lorem",
      text: "Lorem Ipsum adipiscing elit ipsum.",
    },
    {
      img: "/images/product3.jpg",
      title: "Tempus imperdiet",
      text: "Orci porta non pulvinar neque laoreet.",
    },
    {
      img: "/images/product4.jpg",
      title: "Mattis rhoncus",
      text: "Bibendum neque egestas congue quisque.",
    },
    {
      img: "/images/product5.jpg",
      title: "Odio ut enim",
      text: "Mattis rhoncus urna neque viverra justo.",
    },
  ];



  const classes = useStyles();
  return (
    <div id="shop_queries">
      <div id="shop" style={{color:"white"}}>
        <h1 style={{ fontSize: "26px"}}>Shop</h1>
      <h2>Our Items</h2>
      <div id="items-list" >
      <Link to ="/shop"><Button variant="contained" style={{width:"300px"}}>Wheelbarrow</Button></Link> 
      <Link to ="/shop"><Button variant="contained" style={{margin:"20px 0px", width:"300px"}}>Pick Mattock</Button></Link>
      <Link to ="/shop"><Button variant="contained" style={{width:"300px"}} > Watering Can </Button> </Link>
      </div>
      </div>

      <div id="queries">
        <div
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "26px",
            paddingBottom: "20px",
          }}
        >
          Queries
        </div>
  
        <div id="search-textfield">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
  
        </div>
        
        
        <div style={{ color: "white", fontSize: "30px", padding: "65px 6px" }}>
          Search for more questions and information!
        </div>
      </div>
    </div>
  );
}

export default Shop_Queries;
