import React, { Component } from "react";

export default class componentName extends Component {
  render() {
    return (
      <div>
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#main-navbar"
                aria-controls="main-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
                <span className="icon-menu" />
                <span className="icon-menu" />
                <span className="icon-menu" />
              </button>
              <a href="/" className="navbar-brand">
                <img src="assets/img/logo.png" alt="" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="main-navbar">
              <ul className="onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix">
                <li className="nav-item active">
                  <a className="nav-link" href="#hero-area">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Skill
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#resume">
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolios">
                    Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Mobile Menu Start */}
          <ul className="onepage-nev mobile-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#resume">resume</a>
            </li>
            <li>
              <a href="#portfolio">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {/* Mobile Menu End */}
        </nav>
        {/* Navbar End */}
      </div>
    );
  }
}
