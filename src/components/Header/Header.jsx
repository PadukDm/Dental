import React from "react";
import './Header.css'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <div className="header">
           <div className="logo">
               <img src={logo} alt="" />
               <h1>Dental</h1>
           </div>
        </div>
    );
}

export default Header;