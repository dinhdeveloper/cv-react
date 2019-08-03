import React, { Component } from "react";

export default class componentName extends Component {
  render() {
    return (
      <div>
        <div>
          {/* Footer Section Start */}
          <footer className="footer-area section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="footer-text text-center wow fadeInDown"
                    data-wow-delay="0.3s"
                  >
                    <ul className="social-icon">
                      <li>
                        <a className="facebook" href="#">
                          <i className="icon-social-facebook" />
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="#">
                          <i className="icon-social-twitter" />
                        </a>
                      </li>
                      <li>
                        <a className="instagram" href="#">
                          <i className="icon-social-instagram" />
                        </a>
                      </li>
                      <li>
                        <a className="instagram" href="#">
                          <i className="icon-social-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a className="instagram" href="#">
                          <i className="icon-social-google" />
                        </a>
                      </li>
                    </ul>
                    <p>Copyright © 2018 UIdeck All Right Reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* Footer Section End */}
          {/* Go to Top Link */}
          <a href="#" className="back-to-top">
            <i className="icon-arrow-up" />
          </a>
        </div>
      </div>
    );
  }
}
