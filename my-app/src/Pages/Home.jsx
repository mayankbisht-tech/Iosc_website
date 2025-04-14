import React from "react";
import robot from "../assets/robot.png";
import "../index.css";

function Home() {
  return (
    <div className="home-container">
      
      <div className="image-container">
        <img src={robot} alt="IoSC Robot" className="robot-image"/>
      </div>

      <div className="text-container">
        <h1 className="home-heading">
          WE ARE<br />IoSC-EDC
        </h1>

        <p className="home-description">
          The Intel OneAPI Student Club (IoSC) is a community full of people who love
          technology oriented towards innovative development in various fields—from design,
          system integration, game development, robotics, web, management, etc.—and build a
          platform through which they will learn, try their hands-on experience, and excel.
          <br /><br />
          Our mission is to bring hands-on education based on collaboration and real-life
          problem-solving through workshops, hackathons, coding competitions, and networking
          sessions. With those, we equip our own with contemporary skills and industry insight.
          <br /><br />
          Whether you're a developer, designer, or tech strategist just starting out or wanting
          to learn from other peers in the field, our club welcomes anyone interested in learning
          and innovating.
        </p>
      </div>
    </div>
  );
}

export default Home;
