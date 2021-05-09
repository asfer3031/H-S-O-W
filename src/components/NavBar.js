import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./all.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="lg"><h3>Crm</h3></div>
          

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               <i class="fas fa-home"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/dogs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               <i class="fas fa-dog"></i> Dogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/cats"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <i class="fas fa-cat"></i> Cats
              </NavLink>
            </li>
           
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
