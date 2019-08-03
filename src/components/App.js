import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Nav from './Nav';
import './../App.css';
import Banner from './Banner';
import Profile from './Profile';
import Skill from './Skill';
import Education from './Education';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
function App() {
  return (
    <Router>
      <div className="a">
      <header id="header-wrap">
        <Nav/>
        <Banner/>
      </header>
      <Profile/>
      <Skill/>
      <Education/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
