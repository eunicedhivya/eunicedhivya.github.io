import React from 'react';
import "./About.css";

function About() {
  return (
    <section class='container section' id="about">
        <h2 class="headline">About Me</h2>
        <div class="about-content">
            <div class="about-text">
                <p class="body-copy">
                    I started my career as a designer and then became a front end developer. I developed interactive dashboards and award winning interactive stories using JavaScript and Python for Data scraping / processing. I went on to upskill myself to become a full stack developer as a continuous process of upgrading to take my career on a growth path. Intend to continue up skilling to reach the ultimate levels.
                </p>
                <h3 class="subhead">My Skills</h3>
                <ul class="myskills">
                    <li>HTML / CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>D3JS</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Python</li>
                    <li>AWS</li>
                    <li>UI/UX Design</li>
                    <li>Illustration</li>
                </ul>
            </div>
            <img src="https://via.placeholder.com/300" />
        </div>
    </section>
  )
}

export default About