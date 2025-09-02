import React, { useState } from "react";
import "./Navbar.scss";
import { FaSearch, FaBars, FaRegBell } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Logo from "/images/logo/lendsqr_logo.png";
import Navbar_Profile_pic from "/images/navbar/Navbar_profile_pic.png";
import { Link } from "react-router-dom";

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      {/* Left: Logo + Menu */}
      <div className="navbar-left">
        <button className="menu-btn" onClick={onMenuToggle} aria-label="Toggle Menu">
          <FaBars />
        </button>
        <Link to={'/'}>
            <img src={Logo} alt="Lendsqr-Logo" className="logo" />
        </Link>
      </div>

      {/* Middle: Search */}
      <div className="navbar-search">
        <input type="text" placeholder="Search for anything" />
        <button className="search-btn" aria-label="Search">
          <FaSearch />
        </button>
      </div>

      {/* Right: Links + Profile */}
      <div className="navbar-right">
        <a href="#" className="docs-link">Docs</a>
        <FaRegBell className="icon" />

        <div
          className="profile"
          onClick={() => setIsProfileOpen((prev) => !prev)}
          role="button"
          tabIndex={0}
        >
          <img src={Navbar_Profile_pic} alt="Navbar_Profile_pic" className="avatar" />
          <span className="username">Adedeji</span>
          {
            isProfileOpen ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />
          }

        </div>

        {isProfileOpen && (
          <div className="profile-dropdown">
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
