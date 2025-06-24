import React from "react";
import Logo from "../../logo.png";
import Search from "../../search_icon.svg";
import Bell from "../../bell_icon.svg";
import Profile from "../../profile_img.png";
import Dropdown from "../../caret_icon.svg";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navLeft">
        <img src={Logo} alt="" srcSet="" />
        {/* <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul> */}
      </div>

      <div className="navRight">
        <img src={Search} alt="" className="icons" />
        <p>Adults</p>
        <img src={Bell} alt="" className="icons" />

        <div className="navProfile">
          <img src={Profile} alt="" className="profile" />
          <img src={Dropdown} alt="" />

          <div className="dropdown">
            <p>Sign out of Netflix </p>
          </div>
        </div>
      </div>
    </div>
  );
};
