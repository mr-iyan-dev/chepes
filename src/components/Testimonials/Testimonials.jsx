import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import Testimonialcard from "./Testimonialcard";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 33;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 33;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials_container" id="testimonialsID">
      <h3>What Clients Say</h3>
      <img
        src={next_icon}
        alt="nexticon"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="backicon"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <Testimonialcard />
          </li>
          <li>
            <Testimonialcard />
          </li>

          <li>
            <Testimonialcard />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
