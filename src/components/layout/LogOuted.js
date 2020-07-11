import React from 'react';
import { Link } from 'react-router-dom';

function LogOuted(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
              <Link className="nav-link text-white" to="/">Name Of The Shop</Link>
            </li>
            <li className="nav-item">
      <Link className="nav-link" to="/signin">Sign In</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/signup">Sign Up</Link>
    </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
}

export default LogOuted;