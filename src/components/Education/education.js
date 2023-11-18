import React from "react";
import "./education.css";
import { experienceData, experienceStyles } from "../../data/experience";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const Education = () => {
  const renderEducation = () => {
    const { icon, content, arrowStyle } = experienceStyles;
    return experienceData.education.map((study) => (
      <VerticalTimelineElement
        key={study.id}
        className="vertical-timeline-element-work"
        contentStyle={content}
        contentArrowStyle={arrowStyle}
        date={study.date}
        iconStyle={icon}
        icon={<img className="timeline-logo" src={study.icon} alt="icon" />}
      >
        <h3 className="vertical-timeline-element-title">{study.course}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {study.institution}
        </h4>
        <p className="vertical-timeline-element-other">{study.cgpa}</p>
      </VerticalTimelineElement>
    ));
  };

  return (
    <section id="education">
      <h2 className="worksTitle">Education</h2>
      <div className="experience-container">
        <VerticalTimeline>
          {renderEducation()}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
