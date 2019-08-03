import React, { Component } from "react";

export default class componentName extends Component {
  render() {
    return (
      <div>
        {/* Contact Section Start */}
        <section id="contact" className="section-padding">
          <div className="contact-form">
            <div className="container">
              <div
                className="row contact-form-area wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <div className="contact-block">
                    <h2>Contact Form</h2>
                    <form id="contactForm">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              placeholder="Name"
                              required
                              data-error="Please enter your name"
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Email"
                              id="email"
                              className="form-control"
                              name="email"
                              required
                              data-error="Please enter your email"
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Subject"
                              id="msg_subject"
                              className="form-control"
                              required
                              data-error="Please enter your subject"
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              id="message"
                              placeholder="Your Message"
                              rows={5}
                              data-error="Write your message"
                              required
                              defaultValue={""}
                            />
                            <div className="help-block with-errors" />
                          </div>
                          <div className="submit-button">
                            <button
                              className="btn btn-common"
                              id="submit"
                              type="submit"
                            >
                              Send Message
                            </button>
                            <div
                              id="msgSubmit"
                              className="h3 text-center hidden"
                            />
                            <div className="clearfix" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                  <div className="footer-right-area wow fadeIn">
                    <h2>Contact Address</h2>
                    <div className="footer-right-contact">
                      <div className="single-contact">
                        <div className="contact-icon">
                          <i className="fa fa-map-marker" />
                        </div>
                        <p>Ho Chi Minh City, Viet Nam</p>
                      </div>
                      <div className="single-contact">
                        <div className="contact-icon">
                          <i className="fa fa-envelope" />
                        </div>
                        <p>
                          <a href="mailto:dinhtrancntt@gmail.com">dinhtrancntt@gmail.com</a>
                        </p>
                      </div>
                      <div className="single-contact">
                        <div className="contact-icon">
                          <i className="fa fa-phone" />
                        </div>
                        <p>
                          <a href="#">+ (84) 975 469 232</a>
                        </p>
                        <p>
                          <a href="#">+ (00) 896 469 568</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <object
                    style={{ border: 0, height: "450px", width: "100%" }}
                    data="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.131029281501!2d106.7007208!3d10.7896422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa19aa146dff27e08!2zVHJ1bmcgdMOibSDEkMOgbyBU4bqhbyBCxrB1IGNow61uaCBWaeG7hW4gdGjDtG5nIElJ!5e0!3m2!1svi!2s!4v1564713100410!5m2!1svi!2s"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section End */}
      </div>
    );
  }
}
