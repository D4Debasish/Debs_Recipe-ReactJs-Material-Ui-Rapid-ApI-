import React, { useState, useEffect } from "react";
import "./Navbar.css";
import imgg from "../utils/deb2.png";
import { Link } from "react-router-dom";
import SearchInput from "./Searchdata";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CloseIcon from "@mui/icons-material/Close";
import { excersiseOptions, fetchData } from "../utils/fetchData";

const Navbar = ({ onsearch, inputval, setInputval, favorites }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const closemenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="nav__main">
      <div
        className="looogo"
        style={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Link to="/">
          <img className="nav__icon" src={imgg} alt="" />
        </Link>
      </div>

      <div className="search">
        <SearchInput
          onsearch={onsearch}
          inputval={inputval}
          setInputval={setInputval}
        />
      </div>

      {/* Hamburger */}
      <div className="hamburger-menu">
        <IconButton onClick={handleMenuToggle} color="inherit">
          <MenuIcon style={{ color: "white" }} />
        </IconButton>
        {showMenu && (
          <div
            className="mobile-menu"
            style={{ marginRight: "1px", backgroundColor: "darkblue" }}
          >
            <CloseIcon
              sx={{
                marginLeft: "6px",
                marginTop: "22px",
                paddingBottom: "32px",
                color: "white",
              }}
              onClick={closemenu}
            />

            <Link
              to="/about"
              className="mobile-link"
              onClick={handleMenuToggle}
            >
              ABOUT
            </Link>

            <Link to="/favourates" className="fbb">
              {" "}
              🪣 ({favorites ? favorites.length : 0})
            </Link>
          </div>
        )}
      </div>

      {/*  for larger screens */}
      <div
        className={`nav-links ${showMenu ? "hide" : ""}`}
        style={{ gap: "3", alignItems: "center" }}
      >
        <Link to="/about" className="abb">
          ABOUT
        </Link>

        <Link to="/favourates" className="fbb">
          BASKET 🪣({favorites ? favorites.length : 0})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
