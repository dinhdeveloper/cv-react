import React, { Component } from "react";

export default class componentName extends Component {
  render() {
    return (
      <div>
        {/* About Section Start */}
        <section id="about" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="img-thumb wow fadeInLeft" data-wow-delay="0.3s">
                  <img
                    className="img-fluid"
                    src="assets/img/about/dinh.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div
                  className="profile-wrapper wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <h3>Hi Guys!</h3>
                  <p>
                  I am a recent graduate student at Posts and Telecommunications 
                  Institute of Technology.<br/>My major is software engineering.
                  
                  </p>
                  <div className="about-profile">
                    <ul className="admin-profile">
                      <li>
                        <span className="pro-title"> Name </span>{" "}
                        <span className="pro-detail">Trần Cảnh Dinh</span>
                      </li>
                      <li>
                        <span className="pro-title"> Age </span>{" "}
                        <span className="pro-detail">24 Years</span>
                      </li>
                      <li>
                        <span className="pro-title"> Experience </span>{" "}
                        <span className="pro-detail">0 Years</span>
                      </li>
                      <li>
                        <span className="pro-title"> Country </span>{" "}
                        <span className="pro-detail">Viet Nam</span>
                      </li>
                      <li>
                        <span className="pro-title"> Location </span>{" "}
                        <span className="pro-detail">Quảng Trị Province</span>
                      </li>
                      <li>
                        <span className="pro-title"> e-mail </span>{" "}
                        <span className="pro-detail">dinhtrancntt@gmail.com</span>
                      </li>
                      <li>
                        <span className="pro-title"> Phone </span>{" "}
                        <span className="pro-detail">+ (84) 975 469 232 <b>OR</b> </span>
                        <span className="pro-detail">+ (84) 896 469 568</span>
                      </li>
                      <li>
                        <span className="pro-title"> Freelance </span>{" "}
                        <span className="pro-detail">Available</span>
                      </li>
                    </ul>
                  </div>
                  <a href="/" className="btn btn-common">
                    <i className="icon-paper-clip" /> Download Resume
                  </a>
                  <a href="tel:0975469232" className="btn btn-danger">
                    <i className="icon-speech" /> Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section End */}
      </div>
    );
  }
}
