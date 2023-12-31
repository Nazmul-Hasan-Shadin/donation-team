import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo.png'
const Navbar = () => {
  const links = (
    <>
<li className="text-xl">  <NavLink 
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " underline text-red-600 hover:underline  " : ""
  }
>
  Home
</NavLink>   </li>

<li className="text-xl">
  <NavLink
  to="/donation"
  className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? " underline text-red-600  " : ""
  }
>
  Donation
</NavLink></li>

<li className="text-xl"><NavLink
  to="/statistic"
  className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? " underline text-red-600  " : ""
  }
>
  Statistic
</NavLink></li>

    </>
  );


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start  ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           
           { links}
           
             
          </ul>
        </div>
  

    <a className="btn btn-ghost normal-case  text-xl">
     
     <div className="flex justify-end">
     <img className="w-40  md:w-auto ml-24  md:ml-[400px] lg:ml-0  " src={logo} alt="" /> 
     </div>
      

        </a>
   
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            { links}
        </ul>
      </div>
  
    </div>
  );
};

export default Navbar;
