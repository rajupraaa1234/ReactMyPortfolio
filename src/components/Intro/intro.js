import React from "react";
import "./intro.css";
import btnImage from "../../assets/hireme.png";
import newPic from "../../assets/newPic.jpeg";

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
            <p>I am Passionate coder with a strong commitment to optimizing solutions, adept at competitive problem-solving, and continuously seeking opportunities to enhance technical expertise .</p>
            <p>Highly enthusiastic in hands on over Mobile Development (Android , React native , Flutter). I Love coding & Problem solving . My aim to write code which not only machine even human can understand . Delivering results by taking ownership and responsibilities, Growing professional always increasing the learning curve.</p>
            <p>Implement is my cup of tea and learning new things is my greatest curiousity. I can't sleep until I solve all the bugs. I have always made an impact in projects with my fast implementation process and good skills. I can work on different technologies, database and programming languages. My basics are strong and I believe in hardwork combined with the flavour of smart work. Most important thing is I love this job and always push my limits to become more better.</p>
            <a href={`mailto:rajupraaa1234@gmail.com`}>
              <button class="btn">
                <img src={btnImage} alt="Hire Me" class="btnImg" />
                Hire Me
              </button>
            </a>
          </div>
          <div class="user-image">
            <div className="introImage"><img src={newPic} alt="Profile" className="bgImg" width={'40%'} height={'60%'} /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
