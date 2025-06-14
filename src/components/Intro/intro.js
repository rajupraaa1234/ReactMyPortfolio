import React from "react";
import { isMobile } from 'react-device-detect';
import "./intro.css";
import btnImage from "../../assets/hireme.png";
import newPic from "../../assets/newPic.jpg";
import { getTimeDurationForExperience } from "../../utils/utils";
import { STARTING_DATA } from "../../utils/constants";

const Intro = () => {
  return (
    <section id="intro">
      <div class="container">
        <div class="row">
          <div class="intro">
            <span class="hello">Hello,</span><br />
            <span class="introText">
              I'm <span class="introName">Raju Kumar</span>
              <br />
              Software Engineer
            </span>
            <br /><br />
            <p>Enthusiastic and results-driven mobile developer with {getTimeDurationForExperience(new Date(STARTING_DATA),new Date(new Date()))} years of hands-on experience in Android, React Native, and Flutter.I specialize in crafting responsive mobile applications and take pride in producing code that is both robust and easily comprehensible.</p>
            <p>My passion for coding and problem-solving is evident in my commitment to delivering optimal solutions. I thrive on taking ownership and responsibility for projects, consistently ensuring that the end results meet and exceed expectations.</p>
            <p>As a growth-oriented professional, I embrace challenges as opportunities for learning, perpetually expanding my skill set. I am dedicated to maintaining an upward trajectory on my learning curve, staying abreast of industry trends and emerging technologies.</p>
            <p>Known for my adept problem-solving skills, I approach coding with a positive mindset and a strong commitment to finding innovative solutions. I continuously seek opportunities to enhance my technical expertise, firmly believing in the power of continuous improvement.</p>
            <p>I am a passionate coder who not only enjoys the intricacies of development but is also dedicated to delivering optimistic solutions. Open to collaborative projects and always excited about the next challenge that allows me to contribute my skills and expertise.</p>
          </div>
          { isMobile ? <img src={newPic} alt="Profile"   width={'10%'} height={'10%'} /> : null }
          <div class="user-image">
            <div className="introImage"><img src={newPic} alt="Profile" className="bgImg" width={'40%'} height={'40%'} /></div>
          </div>
          <a href={`mailto:rajupraaa1234@gmail.com`}>
              <button class="btn">
                <img src={btnImage} alt="Hire Me" class="btnImg" />
                Hire Me
              </button>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
