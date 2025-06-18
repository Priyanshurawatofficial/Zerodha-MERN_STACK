import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "white" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            className=""
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>
       
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-lg-0">
          
          <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/login">
                Login
              </Link>
            </li>
          
          
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/signup">
                SignUp
              </Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link active" to="/about">
                About
              </Link>
            </li>



            <li class="nav-item">
              <Link class="nav-link active" to="/products">
                Products
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active" to="/pricing"> 
                Pricing              
                </Link>
            </li>

            <li class="nav-item" >
              <Link class="nav-link active" to="/support">
                Support              
                </Link>
            </li>
          </ul>
        </div>
         <form class="d-flex ms-3" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
    </nav>
  );
}

export default Navbar;
