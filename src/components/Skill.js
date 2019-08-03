import React, { Component } from "react";

export default class componentName extends Component {
  render() {
    return (
      <div>
        {/* Services Section Start */}
        <section id="services" className="services section-padding">
          <h2 className="section-title wow flipInX" data-wow-delay="0.4s">
            What I do
          </h2>
          <div className="container">
            <div className="row">
              {/* Services item */}
              <div className="col-md-6 col-lg-3 col-xs-12">
                <div
                  className="services-item wow fadeInDown"
                  data-wow-delay="0.3s"
                >
                  <div className="icon">
                    <i className="icon-grid" />
                  </div>
                  <div className="services-content">
                    <h3>
                      <a href="#">Front-end Development</a>
                    </h3>
                    <p>
                      Html, css <br/>
                      javascript, reactjs
                    </p>
                  </div>
                </div>
              </div>
              {/* Services item */}
              <div className="col-md-6 col-lg-3 col-xs-12">
                <div
                  className="services-item wow fadeInDown"
                  data-wow-delay="0.6s"
                >
                  <div className="icon">
                    <i className="icon-layers" />
                  </div>
                  <div className="services-content">
                    <h3>
                      <a href="#">Back-end Development</a>
                    </h3>
                    <p>
                      PHP, <br/>
                      Java, Android
                    </p>
                  </div>
                </div>
              </div>
              {/* Services item */}
              <div className="col-md-6 col-lg-3 col-xs-12">
                <div
                  className="services-item wow fadeInDown"
                  data-wow-delay="0.9s"
                >
                  <div className="icon">
                    <i className="icon-briefcase" />
                  </div>
                  <div className="services-content">
                    <h3>
                      <a href="#">Design Database</a>
                    </h3>
                    <p>
                      SQL SERVER, <br/>
                      My Sql, Sqlite
                    </p>
                  </div>
                </div>
              </div>
              {/* Services item */}
              <div className="col-md-6 col-lg-3 col-xs-12">
                <div
                  className="services-item wow fadeInDown"
                  data-wow-delay="1.2s"
                >
                  <div className="icon">
                    <i className="icon-bubbles" />
                  </div>
                  <div className="services-content">
                    <h3>
                      <a href="/">Other</a>
                    </h3>
                    <p>
                      Teamwork, Time management skills, Flexibility/ Adaptability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section End */}
      </div>
    );
  }
}
