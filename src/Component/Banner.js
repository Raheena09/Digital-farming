import React from "react";
import banner from '../images/banner.png';
import '../Style/Banner.css';


function Banner() {
  return (
    <div>
      <div id="banner" >
        <img src={banner} alt="banner" style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default Banner;
