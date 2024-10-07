import "../styles/Experience.css";
import ucr from "../assets/ucr.png";
import ocvector from "../assets/ocvector.png";
import React from "react";

const Experience = () => {
  const data = [
    {
      image: ocvector,
      alttag: "orange county vector control district",
      title: "full stack development intern",
      date: "@ orange county control district",
      location: "june 2024 - sept. 2024 in orange county, ca",
      description:
        "Worked on developing web applications using React and Node.js.",
      technologies: [
        "php",
        "html",
        "css",
        "ajax",
        "javascipt",
        "jquery",
        "bootstrap",
        "microsoft sql server",
        "apache",
        "oauth",
        "restful api",
      ],
    },
    {
      image: ucr,
      alttag: "university of california, riverside",
      title: "software development intern",
      date: "@ uc riverside computer science and engineering",
      location: "june 2023 - june 2024 in riverside, ca",
      description:
        "Implemented responsive UI components using HTML, CSS, and JavaScript.",
      technologies: [
        "docker",
        "html",
        "json",
        "podman",
        "python",
        "git",
        "github",
        "prarielearn api",
      ],
    },
    {
      image: ucr,
      alttag: "university of california, riverside",
      title: "computer science grader",
      date: "@ uc riverside computer science and engineering",
      location: "mar 2024- sept 2024 remotely",
      description:
        "Developed RESTful APIs and managed databases using MongoDB.",
    },
  ];
  const schools = [
    {
      image: ocvector,
      alttag: "Orange County Vector Control District",
      title: "full stack development intern",
      date: "@ orange county control district",
      location: "june 2024 - sept. 2024 in orange county, ca",
      description:
        "Worked on developing web applications using React and Node.js.",
    },
    {
      image: ucr,
      alttag: "University of California, Riverside",
      title: "software development intern",
      date: "@ UC Riverside Computer Science and Engineering",
      location: "june 2023 - june 2024 in riverside, ca",
      description:
        "Implemented responsive UI components using HTML, CSS, and JavaScript.",
    },
  ];

  return (
    <section id="experience">
      <h1 className="title">work experience</h1>
      <div className="flexboxes_containers">
        <div className="flexbox_containers">
          {data.map((value, index) => (
            <div key={index} className="flexboxes_content">
              <div className="content-row">
                <img src={value.image} alt={value.alttag} className="p_icon" />
                <div className="text-content">
                  <h2>{value.title}</h2>
                  <p className="date">{value.date}</p>
                  <p className="location">{value.location}</p>
                </div>
              </div>
              {value.technologies && value.technologies.length > 0 && (
                <p className="technologies">
                  <strong>technologies:</strong> {value.technologies.join(", ")}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
