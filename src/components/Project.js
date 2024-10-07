import React, { useState } from "react";
import "../styles/Project.css";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import githubIcon from "../assets/github.png";

const projects = [
  {
    name: "nommies",
    technologies:
      "html, css, javascript, bootstrap, react, node.js, mongodb, git, oauth",
    description:
      "a social media platform for food lovers to share and discover restaurant experiences!",
    githubLink: "https://github.com/kennythai2003/Nommies",
  },
  {
    name: "plan it",
    technologies:
      "c++, object oriented programming, googletest, cmake, valgrind, continuos integration/deployment, git, scrum",
    description:
      "this task management application aims to help users stay organized and on track with their responsibilities.",
    githubLink: "https://github.com/kennythai2003/PlanIt",
  },
  {
    name: "bop it! (at home)",
    technologies: "avr, arduino, c++, state machines",
    description:
      'this project replicates the classic game "bop it!" with some modifications. The game outputs a command, and the player must respond correctly within a set time limit.',
    githubLink: "https://github.com/kennythai2003/Bop-It-at-home-",
  },
  {
    name: "amazon storefront",
    technologies: "java, object oriented programming, postgresql",
    description:
      "a command line interface (cli) application that simulates an amazon storefront, where customers, managers, and supervisors can interact with the database.",
    githubLink: "https://github.com/kennythai2003/Amazon-Storefront",
  },
  {
    name: "hackgpt",
    technologies: "python, openai api, discord api",
    description:
      "an intelligent discord bot that leverages openai's gpt (chatgpt) for generating text-based responses and dall-e for image generation",
    githubLink: "https://github.com/kennythai2003/hackathon/tree/main/hackGPT",
  },
  {
    name: "vehicle prediction model",
    technologies: "python, pandas, excel",
    description:
      "this project uses k-nearest-neighbors (knn) to predict the price of a vehicle based on mileage, make, model, year, etc.",
    githubLink: "https://github.com/kennythai2003/Car-Prediction-Model-",
  },
  {
    name: "personal website",
    technologies: "html, css, javascript, react",
    description:
      "this website showcases my projects, experiences, and clubs/organizations, while giving visitors a glimpse of who i am.",
    githubLink: "https://github.com/kennythai2003/kennythai",
  },
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };
  const { name, technologies, description, githubLink } =
    projects[currentIndex];
  return (
    <section id="project">
      <h1 className="title">projects</h1>
      <div className="slider-container">
        <div className="card">
          <h2>
            {name}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project_link"
            >
              <img src={githubIcon} alt="GitHub icon" className="github-icon" />
            </a>
          </h2>
          <p className="technologies">
            <strong>
              <span className="tech-header">technologies:</span>
            </strong>{" "}
            {projects[currentIndex].technologies}
          </p>
          <p className="description">{projects[currentIndex].description}</p>
        </div>

        <div className="arrow-container">
          <button className="arrow left-arrow" onClick={goToPrevious}>
            <img src={leftArrow} alt="Previous" />
          </button>
          <button className="arrow right-arrow" onClick={goToNext}>
            <img src={rightArrow} alt="Next" />
          </button>
        </div>

        <div className="bullets">
          {projects.map((_, index) => (
            <span
              key={index}
              className={`bullet ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            >
              &#8226;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
