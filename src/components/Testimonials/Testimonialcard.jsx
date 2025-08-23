import React from "react";
import "./Testimonials.css";
import pic from "../../assets/person.png";

const Testimonialcard = () => {
  return (
    <div className="slide">
      <div className="user-info">
        <img src={pic} alt="" width="50px" />
        <div>
          <h4> Melita Methew</h4>
          <span> mywebsite</span>
        </div>
      </div>
      <div className="para">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi
          nisi adipisci impedit corporis?
        </p>
      </div>
    </div>
  );
};

export default Testimonialcard;
