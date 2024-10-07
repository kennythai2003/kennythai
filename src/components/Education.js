import "../styles/Experience.css";
import ucr from "../assets/ucr.png";
import ocvector from "../assets/ocvector.png";
import React from "react";

const Education = () => {
  const data = [
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
              <img src={value.image} alt={value.alttag} className="p_icon" />
              <div className="text-content">
                <h2>{value.title}</h2>
                <p className="date">{value.date}</p>
                <p className="location">{value.location}</p>
                <p className="description">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
