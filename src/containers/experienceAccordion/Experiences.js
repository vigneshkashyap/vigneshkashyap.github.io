import React, { Component } from "react";
import "./Educations.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

class Experiences extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Degrees
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {section["experiences"].map((experience, index) => {
            return (
              <ExperienceCard
                index={index}
                totalCards={section["experiences"].length}
                experience={experience}
                theme={theme}
              />
            );
            // return <ExperienceCard degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}
