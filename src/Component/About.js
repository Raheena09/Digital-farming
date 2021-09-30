import React from "react";
import "../Style/About.css";
import about1 from "../images/about1.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


function About() {
  return (
    <div>
      <div id="about-main">
        <div id="about-first">
          <div className="about-content" style={{ paddingBottom: "40px" }}>
            Heart of Perfect <br />
            Digital Farming

          </div>
          <Typography className="about-content">digitalfarming@gmail.com</Typography>
          <div className="about-content" style={{fontSize:"1rem", padding:"30px 0px"}}>The agricultural and farming world is happy to 
          think outside<br/> of the box, reimagining the way that they can present<br/> their business to
           a much wider audience, including people <br/>who would have, before the internet, never even
            known they existed.</div>
          <div>
          <Link to="/aboutMain"> <Button variant="contained" style={{width:"150px"}}>
            Read More...
           </Button> </Link>
           </div>

        </div>
        <div id="about-second">
          <div className="carousel-wrapper" style={{width:'400px'}}>
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
              <div>
                <img src={about1} />
              </div>
              <div>
                <img src={about1} />
              </div>
              <div>
                <img src={about1} />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
