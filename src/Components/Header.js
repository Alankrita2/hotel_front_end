import React from 'react';
import { Link } from 'react-router-dom';
import  "../css/main.css";
const Header = () => {
    return (
       <header classname="header">
       <nav className="navbar">
    
      <Link className="Links_Home" to="/">Home</Link>
       <Link className="Links" to="/Login">Login</Link>
       <Link className="Links" to="/Signup">Signup</Link> 
       </nav>
       </header>
    )
}

export default Header
