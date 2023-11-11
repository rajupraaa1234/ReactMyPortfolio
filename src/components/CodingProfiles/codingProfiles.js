import React from 'react';
import './codingProfiles.css';
import { codingProfilesData } from '../../data/codingProfiles';
import leetcode from "../../assets/leetcode-logo.png";
import gfg from "../../assets/gfg-logo.png";
import hackerrank from "../../assets/hackerrank-logo.png";

const CodingProfiles = () => {

  const platformImages = {
    leetcode,
    gfg,
    hackerrank
  };

  return (
    <section id="coding-profiles">
      <h2 className="coding-profiles-text">Coding Profiles</h2>

      <div className="coding-profiles-row">
        {codingProfilesData &&
          codingProfilesData.map((profile) => (
            <div
              className="coding-profiles"
              onClick={() => window.open(profile.profile_link, '_blank')}
              key={profile.id}
              data-aos="zoom-in-up"
              data-aos-duration="1500"
            >
              <img 
              src={platformImages[profile.platform_image]} 
              width={100}
              height={100}
              />
              <h4 className="coding-profiles-name">
                {profile.platform_name}
              </h4>
              <p className="coding-profiles-desc">
                {profile.achievement_description}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
