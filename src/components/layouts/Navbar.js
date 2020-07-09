import React, { Component } from "react";
import {Link} from 'react-router-dom';

function Navbar(){
    return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" href="#">Kimberly's portfolio</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/blog">Blog</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/projects">Projects</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/journey">Journey</Link>
      </li>
    </ul>
  </div>
</nav>
    );
}

export default Navbar;