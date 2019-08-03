import React, { Component } from "react";

export default class componentName extends Component {
  render() {
    return (
      <div>
        <div id="resume" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div
                  className="education wow fadeInRight"
                  data-wow-delay="0.3s"
                >
                  <ul className="timeline">
                    <li>
                      <i className="icon-graduation" />
                      <h2 className="timelin-title">Education</h2>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">
                        Posts and Telecommunications Institute of Technology
                        </h3>
                        <span>2015 - 2020</span>
                        <p className="line-text">
                          Expenses as material breeding insisted building to in.
                          Continual so distrusts pronounce by unwilling
                          listening. Thing do taste on we manor.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">
                          Higher Secondary School - Gio Linh District
                        </h3>
                        <span>2010 - 2013</span>
                        <p className="line-text">
                          Expenses as material breeding insisted building to in.
                          Continual so distrusts pronounce by unwilling
                          listening. Thing do taste on we manor.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">
                          Secondary School - Labratory High School
                        </h3>
                        <span>2005 - 2010</span>
                        <p className="line-text">
                          Expenses as material breeding insisted building to in.
                          Continual so distrusts pronounce by unwilling
                          listening. Thing do taste on we manor.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div
                  className="experience wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <ul className="timeline">
                    <li>
                      <i className="icon-briefcase" />
                      <h2 className="timelin-title">Experience</h2>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">
                          Internship
                        </h3>
                        <span>May 2019 - Aug 2019</span>
                        <p className="line-text">
                          I'm do web image management with PHP framework Yii2.
                        </p>
                      </div>
                    </li>
                    {/* <li>
                      <div className="content-text">
                        <h3 className="line-title">UX/UI Designer - Samsung</h3>
                        <span>Nov 2016 - Dec 2017</span>
                        <p className="line-text">
                          Expenses as material breeding insisted building to in.
                          Continual so distrusts pronounce by unwilling
                          listening. Thing do taste on we manor.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="content-text">
                        <h3 className="line-title">
                          Intern UI Designer - UIdeck
                        </h3>
                        <span>Mar 2015 - Oct 2016</span>
                        <p className="line-text">
                          Expenses as material breeding insisted building to in.
                          Continual so distrusts pronounce by unwilling
                          listening. Thing do taste on we manor.
                        </p>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Resume Section End */}
      </div>
    );
  }
}
