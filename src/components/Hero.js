import React from "react";
import "../styles/Hero.css";
import kennythai from "../assets/kennythai.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

function Hero() {
  const handleCVDownload = () => {
    window.open("../assets/kennythai_resume.pdf", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/thaikenny/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/kennythai2003", "_blank");
  };

  return (
    <section id="hero">
      <h1 className="title">about me</h1>
      <div className="profile">
        <div className="picture_container">
          <img
            src={kennythai}
            alt="kenny thai profile picture"
            className="profilepic"
          />
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={handleCVDownload}>
              download resume
            </button>
            <div id="socials-container">
              <img
                src={linkedin}
                alt="My LinkedIn profile"
                className="icon23"
                onClick={handleLinkedInClick}
              />
              <img
                src={github}
                alt="My Github profile"
                className="icon23"
                onClick={handleGitHubClick}
              />
            </div>
          </div>
        </div>
        <div className="section_container">
          <p className="title_text">
            my focus was solely on A+'s until I came across C++! <br></br>{" "}
            <br></br>
            hello! i'm kenny thai, an aspiring software engineer eager to apply
            my programming skills to tackle real-world challenges. when i'm not
            coding, i enjoy exploring video games, watching my favorite shows,
            listening to music, and swimming.<br></br> <br></br>i love
            connecting with new individuals, so feel to email me or connect on
            linkedin!
          </p>
          <div className="education-container">
            <div className="school1">
              <span className="school-name">
                university of california, riverside
              </span>
              <br></br>
              <span className="degree">
                {" "}
                <em>b.s. in computer science</em>
              </span>

              <br></br>
              <br></br>
              <span className="new_text">
                <strong>from → </strong>
                <span className="small-school-text">sept 2021 - june 2025</span>
              </span>
              <br></br>
              <span className="new_text">
                <strong>gpa → </strong>
                <span className="small-school-text">
                  cul: 3.94, comp sci: 4.00
                </span>
              </span>
              <br></br>
              <span className="new_text">
                <strong>awards → </strong>
                <span className="small-school-text">regent's scholarship</span>
              </span>
              <br></br>
              <span className="new_text">
                <strong>
                  <span className="hidden">awards</span> →{" "}
                </strong>
                <span className="small-school-text">
                  chancellor's honors list
                </span>
              </span>
              <br></br>
              <span className="new_text">
                <strong>
                  <span className="hidden">awards</span> →{" "}
                </strong>
                <span className="small-school-text">dean's honors list</span>
              </span>
              <br></br>
            </div>
            <div className="school">
              <span className="school-name">bolsa grande high school</span>
              <br></br>
              <span className="degree">
                {" "}
                <em>high school diploma</em>
              </span>

              <br></br>
              <br></br>
              <span className="new_text">
                <strong>from → </strong>
                <span className="small-school-text">sept 2017 - june 2021</span>
              </span>
              <br></br>
              <span className="new_text">
                <strong>gpa → </strong>
                <span className="small-school-text">w: 4.41, uw: 3.97</span>
              </span>
              <br></br>
              <span className="new_text">
                <strong>positions → </strong>
                <span className="small-school-text">
                  {" "}
                  national honor society
                </span>
                <br></br>
                <span className="hidden">positions → </span>{" "}
                <span className="new-line-text">president</span>
              </span>
              <br></br>
              <span className="new_text">
                <strong>
                  <span className="hidden">positions</span> →{" "}
                </strong>
                <span className="small-school-text">red cross activities</span>
                <br></br>
                <span className="hidden">positions → </span>{" "}
                <span className="new-line-text">coordinator</span>
              </span>
              <br></br>
              <span className="new_text">
                <strong>
                  <span className="hidden">positions</span> →{" "}
                </strong>
                <span className="small-school-text">math club secretary</span>
              </span>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
