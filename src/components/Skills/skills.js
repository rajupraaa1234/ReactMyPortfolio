import React from "react";
import "./skills.css";
import javaIcon from "../../assets/java.png";
import reactIcon from "../../assets/react.png";
import otherIcon from "../../assets/other.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do?</span>
      <span className="skillDesc">
        I am having 2 YoE in
        <span className="introName"> Java Backend Development</span>
        <p>I develop a scalable system and write human understable code.</p>
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img
            src={javaIcon}
            alt="Java Backend Development"
            className="skillBarImg"
          />
          <div className="skillBarText">
            <h2>Java Backend Development</h2>
            <p>
              Java, Spring Boot, Microservices, Apache Kafka, RabbitMQ, Redis, Reactive Spring, Spring Cloud, JUnit & Mockito
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={otherIcon} alt="Other" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Other</h2>
            <p>AWS, Apache Kafka, SQL, Camunda, Technical Writing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
