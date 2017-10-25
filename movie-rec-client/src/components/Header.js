import React from 'react';
import logo from '../images/img_logo.png';

const Header = () =>
  <header>
    <div className="container">
      <nav className="navbar navbar-expand-md no-gutters">
        <div className="col-2 text-left">
          <a href="https://www.froala.com">
            <img src={logo} height="30" alt="Logo" />
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav4"
          aria-controls="navbarNav4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-center col-md-8"
          id="navbarNav4"
        >
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item active">
              <a className="nav-link" href="https://www.froala.com">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.froala.com">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.froala.com">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.froala.com">
                Team
              </a>
            </li>
          </ul>
        </div>

        <ul className="navbar-nav col-2 justify-content-end d-none d-md-flex">
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">
              <i className="fa fa-github" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.froala.com">
              <i className="fa fa-google" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>;

export default Header;
