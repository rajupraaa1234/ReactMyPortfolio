import React from "react";
import "./skills.css";
import javaIcon from "../../assets/java.png";
import reactIcon from "../../assets/react.png";
import otherIcon from "../../assets/other.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">Skills</span>
      <span className="skillDesc">

        <p>With 3 YoE in mobile development, I specialize in crafting responsive <span className="introName"> Mobile Applications</span> and producing code that is easily comprehensible to fellow developers and stakeholders alike.</p>
      </span>
      <div class="container mt-5">


        <div class="row">
          <div class="col-md-4">
            <div class="skill">
              <i class="fab fa-react"></i>
              <p>Data Structure & Algorithm</p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="skill">
              <i class="fab fa-react"></i>
              <p>Java</p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="skill">
              <i class="fab fa-react"></i>
              <p>JavaScript/TypeScript</p>
            </div>
          </div>
        </div>


        <div class="skillCard">
          <div class="row">
            <div class="col-md-4">
              <div class="skill">
                <i class="fab fa-react"></i>
                <p>C/C++</p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="skill">
                <i class="fab fa-react"></i>
                <p>Object Oriented Programming</p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="skill">
                <i class="fab fa-react"></i>
                <p>Android</p>
              </div>
            </div>
          </div>
        </div>

        <div class="skillCard">
          <div class="row">
            <div class="col-md-4">
              <div class="skill">
                <i class="fab fa-react"></i>
                <p>React Native</p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="skill">
                <i class="fab fa-react"></i>
                <p>SQL</p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="skill">
                <i class="fab fa-react"></i>
                <p>Problem Solving</p>
              </div>
            </div>
          </div>
        </div>

        <div class="skillCard">
          <div class="row">
            <div class="col-md-4">
              <div class="skill">
                <i class="fab fa-react"></i>
                <p>Mobile Development</p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="skill">
                <i class="fab fa-react"></i>
                <p>Django</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="skill">
                <i class="fab fa-react"></i>
                <p>FireBase/Cloud messaging</p>
              </div>
            </div>
          </div>
        </div>

        <div class="skillCard">
          <div class="row">
            <div class="col-md-4">
              <div class="skill">
                <i class="fab fa-react"></i>
                <p>JetPack Compose</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="skill">
                <i class="fab fa-react"></i>
                <p>Kotlin</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Skills;
