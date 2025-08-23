import React from "react";
import Hero from "../../components/hero";
import About from "../../components/about";
import Skill from "../../components/skills";
import Progress from "../../components/progress";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Progress />
    </div>
  );
};

export default Home;
