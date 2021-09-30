import React from "react";

import "../../Style/Nav.css";
import icon from '../../images/icon.png';
import {Link} from 'react-router-dom'


function Nav() {
  return (
    <div>
      <nav id="nav">
        <div className="nav-logo" style={{cursor:'pointer'}}>
        <img src={icon} alt="icon" style={{marginTop:'5px', height:'50px', width:'50px', marginTop: '-9px'}}/>
        </div>
        <div>
          <ul className="nav-home-component">
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/aboutMain">About</Link></li>
            <li><Link to ="/shop">Shop</Link></li>
            <li>Queries</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <ul className="nav-logIn-component">
            <li><Link to="/signIn">Sign in</Link></li>
          </ul>
        </div>
      </nav>

     
    </div>
  );
}

export default Nav;
