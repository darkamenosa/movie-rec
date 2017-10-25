import React from 'react';

const Footer = () =>
  <footer className="fdb-block footer-large">
    <div className="container">
      <div className="row align-items-top text-center">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-sm-left">
          <h3>
            <strong>Group 1</strong>
          </h3>
          <nav className="nav flex-column">
            <a className="nav-link active" href="https://www.froala.com">
              Home
            </a>
            <a className="nav-link" href="https://www.froala.com">
              Features
            </a>
            <a className="nav-link" href="https://www.froala.com">
              Pricing
            </a>
            <a className="nav-link" href="https://www.froala.com">
              Team
            </a>
            <a className="nav-link" href="https://www.froala.com">
              Contact Us
            </a>
          </nav>
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mt-sm-0 text-sm-left">
          <h3>
            <strong>Group 2</strong>
          </h3>
          <nav className="nav flex-column">
            <a className="nav-link active" href="https://www.froala.com">
              Privacy Policy
            </a>
            <a className="nav-link" href="https://www.froala.com">
              Terms
            </a>
            <a className="nav-link" href="https://www.froala.com">
              FAQ
            </a>
            <a className="nav-link" href="https://www.froala.com">
              Support
            </a>
          </nav>
        </div>

        <div className="col-12 col-md-4 col-lg-3 text-md-left mt-5 mt-md-0">
          <h3>
            <strong>About Us</strong>
          </h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="col-12 col-lg-2 ml-auto text-lg-left mt-4 mt-lg-0">
          <h3>
            <strong>Follow Us</strong>
          </h3>
          <p className="text-h3">
            <a href="https://www.froala.com">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>&nbsp;&nbsp;
            <a href="https://www.froala.com">
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>&nbsp;&nbsp;
            <a href="https://www.froala.com">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>&nbsp;&nbsp;
            <a href="https://www.froala.com">
              <i className="fa fa-pinterest" aria-hidden="true" />
            </a>&nbsp;&nbsp;
            <a href="https://www.froala.com">
              <i className="fa fa-google" aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col text-center">
          &copy; 2017 Froala. All Rights Reserved
        </div>
      </div>
    </div>
  </footer>;

export default Footer;
