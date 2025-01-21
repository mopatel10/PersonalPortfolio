import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import pf from '../assets/images/pf.jpg';

function Main() {

  return (
    <div className="">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={pf} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/mopatel10" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mohammed-patel-0303ba19a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>
  <span className="white-letter">M</span>ohammed Patel
</h1>

          <p ><span className="white-letter">Full Stack Engineer </span></p>

          <div className="mobile_social_icons">
            <a href="https://github.com/mopatel10" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mohammed-patel-0303ba19a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;