import React from "react";
import "./intro.css";
import btnImage from "../../assets/hireme.png";
import imgSanjeet from "../../assets/sanjeet_pic.jpg";

const Intro = () => {
  return (

    // <section id="intro">
    //   <div class="introContent">
    //     <div class="introLeft">
    //       <span class="hello">Hello,</span>
    //       <span class="introText">
    //         I'm <span class="introName">Sanjeet Kumar</span>
    //         <br />
    //         Software Engineer
    //       </span>
    //       <p class="introPara">
    //         Having in-depth knowledge of <span class="introName">Java</span> and <span class="introName">Spring Boot</span> with
    //         <br /> more than <span class="introName">2 Years</span> of experience in the software industry,<br /> I currently
    //         serve as a <span class="introName">Backend Developer</span>. <br /> Beyond my professional endeavors, I am deeply
    //         engrossed in the world of <br /> <span class="introName">competitive programming</span>. I've tackled and resolved
    //         over <span class="introName">2500 problems</span>, <br /> actively engaging with new challenges as they arise.
    //         bjhvghvghvghghvghghcgfcgcgcgfcgcfgcfgccgcgcgcccfcfgcfgcgcgcfgcfgcfgcgcgfcgffgfcfcffcfgcgfcfcgffgcgcgcgcgfcgcgcff
    //       </p>
    //       <a href={`mailto:sanjeet677088@gmail.com`}>
    //         <button class="btn">
    //           <img src={btnImage} alt="Hire Me" class="btnImg" />
    //           Hire Me
    //         </button>
    //       </a>
    //     </div>
    //     <div class="introRight">
    //       <img src={imgSanjeet} alt="Profile" class="bgImg" />
    //     </div>
    //   </div>
    //   </section>

    // <section id="intro">
    //   <div class="introContent">
    //     <div class="introLeft">
    //       <span class="hello">Hello,</span>
    //       <span class="introText">
    //         I'm <span class="introName">Sanjeet Kumar</span>
    //         <br />
    //         Software Engineer
    //       </span>
    //       <p class="introPara">
    //         Having in-depth knowledge of <span class="introName">Java</span> and <span class="introName">Spring Boot</span> with
    //         <br /> more than <span class="introName">2 Years</span> of experience in the software industry,<br /> I currently
    //         serve as a <span class="introName">Backend Developer</span>. <br /> Beyond my professional endeavors, I am deeply
    //         engrossed in the world of <br /> <span class="introName">competitive programming</span>. I've tackled and resolved
    //         over <span class="introName">2500 problems</span>, <br /> actively engaging with new challenges as they arise.
    //         dnckjcdsbcjdhsbchjdsbhcbdshjcbhjdbchjdbhjchjdsbcdjcdjsbchjdsbcjbdshjchdjsbcjbdsjhbcjdsbjcdsjbchjdscjbdsjcbhdjsbchjdbshjcbdshjbcjhdsbcjhbdjcbjdsbchjdbjcbdshjbchjdbchbdshbchdjbchjdsbjchbdshjcbdhjsbchd
    //       </p>
    //       <a href={`mailto:sanjeet677088@gmail.com`}>
    //         <button class="btn">
    //           <img src={btnImage} alt="Hire Me" class="btnImg" />
    //           Hire Me
    //         </button>
    //       </a>
    //     </div>
    //     <div class="introRight">
    //       <img src={imgSanjeet} alt="Profile" class="bgImg" />
    //     </div>
    //   </div>
    // </section>

    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Sanjeet Kumar</span>
          <br />
          Software Engineer
        </span>
        <p className="introPara">
          Having in-depth knowledge of <span className="introName">Java</span>{" "}
          and <span className="introName">Spring Boot</span> with <br /> more 
          than <span className="introName">2 Years</span> of experience of  in the
          software industry,<br/> I currently serve as a <span className="introName">Backend Developer</span>.
          <br/>
          Beyond my professional endeavors, I am deeply engrossed in the world of <br/> <span className="introName">competitive programming</span>. 
          I've tackled and resolved over <span className="introName">2500 problems</span>, 
          <br/>
          actively engaging with new challenges as they arise.
          {/* My dedication extends to participation in over 100 coding contests on platforms like LeetCode, where I have consistently demonstrated my proficiency with a LeetCode rating exceeding 1750 (with a peak rating of 1921). On a global scale, I am placed within the top 1500 competitors. */}
        </p>
        <a href={`mailto:sanjeet677088@gmail.com`}>
          <button className="btn">
            <img src={btnImage} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </a>
        {/* <a>
          <button className="resume_download_button">
            <img src={btnImage} alt="Resume" className="resume_download" />
            Download Resume
          </button>
        </a> */}
      </div>
      <div className="introImage"><img src={imgSanjeet} alt="Profile" className="bgImg" /></div>
    </section>
  );
};

export default Intro;
