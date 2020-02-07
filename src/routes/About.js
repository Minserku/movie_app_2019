import React from "react";
import "./About.css"

function About(props){
  console.log(props);
  return (
    <div className="about__container">
      <span>
        "Freedom is th freedom to say that two plus two mak four. If that is grated, all else follows."
      </span>
      <span>-George Orwell, 1984</span>
    </div>
  );
}

export default About;