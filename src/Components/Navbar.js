import React from 'react';
import logo from "../images/logo.png" ;

const Navbar = () => {
    return (
        <div className="container navbar fixed-top">
            <img className="nav-brand" src={logo} alt=""/>
            <ul className=" pt-4 nav-link">
                <li>Home</li>
                <li>Destination</li>
                <li>Events</li>
                <li>Blog</li>
                <li className="btn btn-primary">Register</li>
                <li className="btn btn-dark">Admin</li>
            </ul>
        </div>
    );
};

export default Navbar;