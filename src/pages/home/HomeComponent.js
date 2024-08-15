import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Education from "../education/EducationComponent";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Contact from "../contact/ContactComponent";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      // <div style={{ height: 30}}>
      <div>
        <div class="nav-header">
          <Header theme={this.props.theme} className="nav-header" />
        </div>
        <Element name="greeting-page" className="element">
          <Greeting theme={this.props.theme} />
        </Element>
        <Element name="skills" className="element">
          <Skills theme={this.props.theme} />
        </Element>
        <Element name="experience" className="element">
          <Experience theme={this.props.theme} />
        </Element>
        <Element name="education" className="element">
          <Education theme={this.props.theme} />
        </Element>
        <Element name="projects" className="element">
          <Projects theme={this.props.theme} />
        </Element>
        <Element name="contact" className="element">
          <Contact theme={this.props.theme} />
        </Element>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
