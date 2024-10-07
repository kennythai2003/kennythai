import "../styles/About.css";
import React, { useEffect, useRef } from "react";

function About() {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const text = "hello, my name is kenny thai!";
    let index = 0;

    // Ensure the blinking cursor is always present
    element.innerHTML =
      '<span class="text-content"></span><span class="blinking-cursor">|</span>';
    const textContent = element.querySelector(".text-content");

    function typeWriter() {
      if (index < text.length) {
        textContent.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Adjust the speed by changing the timeout value
      } else {
        setTimeout(() => {
          index = 0;
          textContent.innerHTML = "";
          typeWriter();
        }, 1000);
      }
    }

    typeWriter();
  }, []);

  return (
    <div className="About">
      <section className="stage">
        <figure className="ball bubble">
          <span className="shadow"></span>
        </figure>
        <div className="sphere_text" ref={elementRef}></div>
        <div className="scroll-message">↓ scroll to learn more ↓</div>
      </section>
    </div>
  );
}

export default About;
