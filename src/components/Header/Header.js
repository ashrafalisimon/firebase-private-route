import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hook/useFirebase";
import "./Header.css";

const Header = () => {
    const {user, handleSingOut}  =useFirebase();
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/resister">Resister</Link>
        <span>{user?.displayName && user.displayName}</span>
        {
            user?.uid
            ?
            <button className="sing-out-btn" onClick={handleSingOut}>Sing Out</button> 
            :
            <Link to="/login">Login</Link>
        }
      </nav>
    </div>
  );
};

export default Header;
