import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import { MdAssistantNavigation } from "react-icons/md";
import { useAuth } from '../Store/authStore';
// import { toast } from 'react-toastify';

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <div className="nav fixed z-50">
        <label htmlFor="check" className='checkbtn'>&#9776;</label>
        <input type="checkbox" id='check' />

        <NavLink className="logo_sections" to="/">
          <MdAssistantNavigation className='text-4xl text-red-500 cursor-pointer ml-9' />
          <label className='logo cursor-pointer text-3xl'>WanderLust</label>
        </NavLink>

        <ul>
          {isLoggedIn ? (
            <>
              <li><NavLink to="/newListings">Create Listings</NavLink></li>
              <li><NavLink to="/logout">Logout</NavLink></li>
            </>
          ) : (
            <>
              <li><NavLink to="/signup">SignUp</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
             
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
