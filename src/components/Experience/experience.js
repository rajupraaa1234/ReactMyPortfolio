import React from "react";
import "./experience.css";
import { experienceData, experienceStyles } from "../../data/experience";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import moneytap from "../../assets/moneytap-logo.png";
import ei from "../../assets/ei-logo.png"
import appventurez from "../../assets/appventurez-logo.svg";
import LLoyds from "../../assets/LLoyds.jpeg"

const Experience = () => {
  const formatedCompanyLogos = {
    LLoyds,
    ei,
    moneytap,
    appventurez
  };

  function getFormatedStringFromDays(date1, date2) {
    let Difference_In_Time =
      date2.getTime() - date1.getTime();

    let numberOfDays =
      Math.round
        (Difference_In_Time / (1000 * 3600 * 24));
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);
    var days = Math.floor(numberOfDays % 365 % 30);
    return years + " Years " + months + " Months " + days + " Days";
  }

  const renderJobExperience = () => {
    const { icon, content, arrowStyle } = experienceStyles;
    console.log(JSON.stringify(experienceData.workExperience))
    return experienceData.workExperience.map((job) => (
      <VerticalTimelineElement
        key={job.id}
        className="vertical-timeline-element-work"
        contentStyle={content}
        contentArrowStyle={arrowStyle}
        date={job.date + " (" + getFormatedStringFromDays(new Date(job.from), new Date(job.to)) + ")"}
        iconStyle={icon}
        icon={
          <img
            className="timeline-logo"
            src={formatedCompanyLogos[job.companyLogo]}
            alt="icon"
          />
        }
      >
        <h3 className="vertical-timeline-element-title">{job.jobTitle}</h3>
        <h4 className="vertical-timeline-element-subtitle">{job.company}</h4>
        <p className="vertical-timeline-element-other">{job.desc}</p>
        <p className="vertical-timeline-element-other">{job.contri}</p>
        <p className="vertical-timeline-element-other">{job.skills}</p>
        {job.certificate && <a
          href="https://drive.google.com/file/d/1hhPUTFAp8i0h_cNTyCjLmkjZutgUILhN/view?usp=sharing">
          <h6 class="date">View Certificate</h6>
        </a>}
      </VerticalTimelineElement>
    ));
  };

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
    <section id="experience">
      <h2 className="worksTitle">Work Experience</h2>
      <div className="experience-container">
        <VerticalTimeline>
          {renderJobExperience()}
        </VerticalTimeline>
      </div>
      {/* <h2 className="worksTitle">Education</h2>
      <div className="experience-container">
        <VerticalTimeline>
          {renderEducation()}
        </VerticalTimeline>
      </div> */}
    </section>
  );
};

export default Experience;
