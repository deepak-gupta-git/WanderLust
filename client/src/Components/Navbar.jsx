import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import { MdAssistantNavigation } from "react-icons/md";
import { useAuth } from '../Store/authStore';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {isLoggedIn} = useAuth();
  const onClick = () => {
    toast.error("For Creating Listings You have to signup first")
  }
  return (
    <div>
         <div className="nav fixed z-50">
          <label htmlFor="check" className='checkbtn'>&#9776;</label>
          <input type="checkbox"  id='check'/>
          <div className='logo_sections'>
         <NavLink to="/listings"> <MdAssistantNavigation className='text-3xl text-red-500 cursor-pointer ml-4'/></NavLink>
          <NavLink to="/listings"><label className='logo cursor-pointer'>WanderLust</label></NavLink>
          </div>

          <div className='searchBar'> 
          <div class="navbar-nav nav-search ms-auto">
          <form class="flex" role="search">
          <input className="form-control me-2 form-input" type="search" placeholder="Search Destination" aria-label="Search"/>
          <button class="btn btn-search form-btn" type="submit">Search</button>
        </form>
      </div>
          </div>

        

          <ul>
            

            {isLoggedIn ? (
              <>
              <li className='wander'><NavLink to="newListings">Create Listings</NavLink></li>
              <li><NavLink to="/logout">Logout</NavLink></li>
              </>
            )
          : 
          (
            <>
             <li onClick={onClick} className='wander'><NavLink to="signup">Create Listings</NavLink></li>
            <li><NavLink to="/signup">SignUp</NavLink></li>
            <li><NavLink to="/login" >Login</NavLink></li>
           
          </>
          )
          }
          </ul>
        </div>
    </div>
  )
}

export default Navbar
