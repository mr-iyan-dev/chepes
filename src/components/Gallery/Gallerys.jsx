import React, { useRef } from "react";
import "./Gallery.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import img1 from "../../assets/image-1.jpg";
import img2 from "../../assets/image-2.jpg";
import img3 from "../../assets/image-3.jpg";
import img4 from "../../assets/image-4.jpg";



const Gallery = () => {
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
      <h3>Gallery</h3>
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
          <div className="gallery-image">
            <img src={img1} alt="" width='350px'/>
          </div>
          </li>
          <li>
          <div className="gallery-image">
            <img src={img2} alt="" width='350px' height='470px'/>
          </div>
          </li><li>
         
          </li><li>
          <div className="gallery-image">
            <img src={img4} alt="" width='350px'/>
          </div>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
