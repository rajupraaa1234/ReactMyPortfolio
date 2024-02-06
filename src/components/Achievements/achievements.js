import React from "react";
import "./achievements.css";
import { achievements } from "../../data/achievements";

const Achievements = () => {
  return (
    <section id="achievements">
      <h2 className="achievement-text">Achievements</h2>

      <div className="achievement-row">
        {achievements &&
          achievements.map((achievement) => (
            <div
              className="my-achievement"
              key={achievement.id}
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <h4 className="achievement-name">
                {achievement.achievement_name}
              </h4>
              <p class="platformStyle">
                {achievement.platform}
              </p>
              <p className="achievement-desc">
                {achievement.achievement_description}
              </p>
              {achievement.certificate && <a
                href={achievement.link}>
                <p className="certificateLink">{achievement.cer? "View Certificate" : "View Award"} </p>
              </a>}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Achievements;
