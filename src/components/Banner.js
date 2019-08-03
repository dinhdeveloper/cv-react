import React, { Component } from "react";
import { Link } from 'react-router-dom'
export default class componentName extends Component {
  render() {
    return (
      <div>
        {/* Hero Area Start */}
        <div id="hero-area" className="hero-area-bg">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 text-center">
                <div className="contents">
                  <h5
                    className="script-font wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    Hi This is
                  </h5>
                  <h2 className="head-title wow fadeInUp" data-wow-delay="0.4s">
                    Tran Canh Dinh
                  </h2>
                  <p className="script-font wow fadeInUp" data-wow-delay="0.6s">
                    Front-end and Back-end Web Developer
                  </p>
                  <ul
                    className="social-icon wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <li>
                      <a className="facebook" target="_blank" href="https://www.facebook.com/canhdinhptit">
                        <i className="icon-social-facebook" />
                      </a>
                    </li>
                    <li>
                      <Link className="twitter" to="/">
                        <i className="icon-social-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link className="instagram" to="/">
                        <i className="icon-social-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link className="linkedin" to="/">
                        <i className="icon-social-linkedin" />
                      </Link>
                    </li>
                    <li>
                      <Link className="google" to="/">
                        <i className="icon-social-google" />
                      </Link>
                    </li>
                  </ul>
                  <div
                    className="header-button wow fadeInUp"
                    data-wow-delay="1s"
                  >
                    {/* <a href="#" className="btn btn-common">
                      Get a Free Quote
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Area End */}
      </div>
    );
  }
}
