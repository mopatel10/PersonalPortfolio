import React from "react";
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/mopatel10/Wellness-App" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mopatel10/Wellness-App" target="_blank" rel="noreferrer"><h2>Wellness App</h2></a>
                <p>Wellness Meditation Timer App is a user-friendly and visually calming mobile application designed to enhance your mindfulness and meditation practice. The app provides a customizable countdown timer to help users manage their meditation sessions with ease.</p>
            </div>
            <div className="project">
                <a href="https://github.com/mopatel10/DurhamCollegeBackend" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mopatel10/DurhamCollegeBackend" target="_blank" rel="noreferrer"><h2>Durham College Website Backend</h2></a>
                <p>This repository contains the backend implementation of a user registration and login system built in Java. The application ensures secure user authentication and data handling, leveraging modern practices for backend development.</p>
            </div>

      
        </div>
    </div>
    );
}

export default Project;