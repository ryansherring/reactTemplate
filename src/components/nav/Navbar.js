import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const openBar = open ? "open" : "closed";

  return (
    <>
      <div className={openBar}>
        <div className="navItems">
          <Link className="navItem" to="/">Landing</Link>
          <Link className="navItem" to="/about">About</Link>
          <Link className="navItem" to="/mainapp">Main App</Link>
        </div>
        <div className="menu-btn" onClick={() => setOpen(!open)}>
            <div className="menu-btn__burger" />
            <div className="menu-btn__burger" />
            <div className="menu-btn__burger" />
          </div>
      </div>
      
      { !open ? (
      <div className="menu-btn-closed" onClick={() => setOpen(!open)}>
        <div className="menu-btn__burger" />
        <div className="menu-btn__burger" />
        <div className="menu-btn__burger" />
      </div>) : ( null )}
    </>
  );
};

export default Navbar;
