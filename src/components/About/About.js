import React from "react";
import "./About.css";
import dp from "../../../public/dp.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <section style={{width: "60%"}} className="about-text">
        <h1 > About </h1>
        <br />
        <p className="typewriter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section  style={{width: "40%"}} className="about-image">
        <Image src={dp} alt="Picture of the author" width={500} height={500} />
      </section>
    </div>
  );
};

export default About;
