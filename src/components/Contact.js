import "../styles/Contact.css";
import emailIcon from "../assets/email.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";

function Contact() {
  return (
    <section id="contact">
      <h1 className="title">contact me</h1>
      <div className="background">
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={emailIcon}
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:kennythai021403@gmail.com" class="contact_hover">
                click here to email me!
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={linkedinIcon}
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a
                href="https://www.linkedin.com/in/thaikenny/"
                target="_blank"
                rel="noopener noreferrer"
                class="contact_hover"
              >
                linkedin
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src={githubIcon}
              alt="GitHub icon"
              className="icon contact-icon"
            />
            <p>
              <a
                href="https://www.github.com/kennythai2003"
                target="_blank"
                rel="noopener noreferrer"
                class="contact_hover"
              >
                github
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
