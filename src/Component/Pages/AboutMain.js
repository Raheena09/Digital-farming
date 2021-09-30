import React from "react";
import Nav from "../Common/Nav";
import Banner from "./../Banner";
import Contact from "./../Contact";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { makeStyles } from "@material-ui/core/styles";

import tileData from "../tileData";
import '../../Style/AboutMain.css' ;

function AboutMain() {
   
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: "#95A83F",
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <Nav />
      <Banner />

      <div
        id="about-content">
        <div id="about-content-first" style={{fontSize:"1.5em"}}>
          <div>
            <h2>E-Marketplace</h2>
            <ul>
              <li style={{listStyle:"none"}}>Online demand placement</li>
              <li style={{listStyle:"none"}}>Estimate production volume</li>
              <li style={{listStyle:"none"}}>Collective production and marketing</li>
            </ul>
          </div>
          <div style={{paddingTop:"50px"}}>
            <h2>Data and information</h2>
            <ul>
              <li style={{listStyle:"none"}}>Access to information</li>
              <li style={{listStyle:"none"}}>Digitize farm Operation</li>
            </ul>
          </div>
        </div>
        <div id="about-content-second">
          <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
              <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
                <ListSubheader component="div">About Us</ListSubheader>
              </GridListTile>
              {tileData.map((tile) => (
                <GridListTile key={tile.img}>
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={<span>by: {tile.author}</span>}
                    actionIcon={
                      <IconButton
                        aria-label={`info about ${tile.title}`}
                        className={classes.icon}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default AboutMain;
