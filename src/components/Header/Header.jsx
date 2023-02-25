import React from 'react';
import {NavLink} from "react-router-dom"
import ogo from "../../images/ogo.png"
import cart from "../../images/icons/cart.png"
import favorites from "../../images/icons/favorites.png"
import logo_icon from "../../images/icons/logo_icon.png"
import lupa_zalupa from "../../images/icons/lupa_zalupa.png"
import Footer from '../Footer/Footer';


function Header() {
  return (
    <header className="header">
      <div className='header_about'>
        <NavLink>NEW</NavLink>
        <NavLink>CATALOG</NavLink>
        <NavLink>ABOUT US</NavLink>        
      </div>
      <div className='header_logo'><img src={ogo} alt="adadwawd" /></div>
               <div className='header_icons'>
             <NavLink><img src={lupa_zalupa} alt="zalupa" /></NavLink>
             <NavLink className="headernav-link" to="/register"><img src={logo_icon} alt="xd" /></NavLink>          
            <NavLink><img src={favorites} alt="serdce" /></NavLink>
            <NavLink><img src={cart} alt="korzina" /></NavLink>
            </div>
    </header>
  );
}

export default Header;