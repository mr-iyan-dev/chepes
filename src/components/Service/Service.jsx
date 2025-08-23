import React from "react";
import "./Service.css";
const Service = () => {
  return (
    <div className="service_container" id="servicesID">
      <h3>Our Services</h3>
      <p className="lead">
        Tailored support for visas, passports, and opportunities to study or
        work abroad.
      </p>

      <div className="grid cols-4" style={{ marginTop: "18px" }}>
        <div className="service">
          <div className="service_info" id="service_info_box1">
            <div className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v4h-8v1a1 1 0 0 1-2 0V12H2V8a2 2 0 0 1 2-2h5zm2-1h2v1h-2V5z"></path>
                <path d="M2 12h9v1a1 1 0 0 0 2 0v-1h9v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6z"></path>
              </svg>
            </div>
            <h4>Visa Applications</h4>
            <p>
              Pick the right visa type with guided requirements and document
              review. The visa application process can be daunting. Our experts
              provide end-to-end support, from initial consultation to final
              submission. We help you identify the right visa type, meticulously
              prepare your documents, and guide you through every requirement to
              maximize your chances of approval.
            </p>
          
          </div>
          {/* <div className="service_image" id="service_image_box1"></div> */}
        </div>

        <div className="service">
          <div className="service_info" id="service_info_box2">
            <div className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M6 2h9a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm3 4h4a4 4 0 1 1 0 8H9V6zm0 10h6v2H9v-2z"></path>
              </svg>
            </div>
            <h4>Passport Assistance.</h4>
            <p>
              We specialize in preparing and submitting all necessary paperwork
              on your behalf. Our service ensures all details are accurate,
              preventing common errors that can lead to delays or rejections.
            </p>
           
          </div>
          {/* <div className="service_image" id="service_image_box2"></div> */}
        </div>

         <div className="service">
        <div className="service_info" id="service_info_box3">
          <div className="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 3l10 5-10 5L2 8l10-5zm7 6v5c0 2-3 4-7 4s-7-2-7-4V9l7 3 7-3z"></path>
            </svg>
          </div>
          <h4>Study Abroad</h4>
          <p>
            University selection, applications, and study visa guidance
            end‑to‑end. Chepes is your partner in pursuing a world-class
            education. We offer personalized consultation to help you choose the
            best university and program that fits your academic goals and career
            aspirations. We handle everything from applications to securing your
            study visa.
          </p>
        
        </div>
        {/* <div className="service_image" id="service_image_box3"></div> */}
      </div>

      <div className="service">
        <div className="service_info" id="service_info_box4">
          <div className="icon" aria-hidden="true">
            <svg viewBox="0 0 371.656 371.656">
              <path
                d="M37.833,212.348c-0.01,0.006-0.021,0.01-0.032,0.017c-4.027,2.093-5.776,6.929-4.015,11.114
				c1.766,4.199,6.465,6.33,10.787,4.892l121.85-40.541l-22.784,37.207c-1.655,2.703-1.305,6.178,0.856,8.497
				c2.161,2.318,5.603,2.912,8.417,1.449l23.894-12.416c0.686-0.356,1.309-0.823,1.844-1.383l70.785-73.941l87.358-45.582
				c33.085-17.835,29.252-31.545,27.29-35.321c-1.521-2.928-4.922-6.854-12.479-8.93c-7.665-2.106-18.021-1.938-31.653,0.514
				c-4.551,0.818-7.063,0.749-9.723,0.676c-9.351-0.256-15.694,0.371-47.188,16.736L90.788,164.851l-66.8-34.668
				c-2.519-1.307-5.516-1.306-8.035,0.004l-11.256,5.85c-2.317,1.204-3.972,3.383-4.51,5.938c-0.538,2.556,0.098,5.218,1.732,7.253
				l46.364,57.749L37.833,212.348z"
              />
              <path
                d="M355.052,282.501H28.948c-9.17,0-16.604,7.436-16.604,16.604s7.434,16.604,16.604,16.604h326.104
				c9.17,0,16.604-7.434,16.604-16.604C371.655,289.934,364.222,282.501,355.052,282.501z"
              />
            </svg>
          </div>
          <h4>Work Abroad</h4>
          <p>
            Job openings abroad with application, document, and relocation
            support. Ready for a new career challenge? Our work abroad programs
            connect you with exciting job opportunities overseas. We provide
            full-spectrum support, from job search and application preparation
            to work permit acquisition and crucial relocation advice.
          </p>

        </div>
        {/* <div className="service_image" id="service_image_box4"></div> */}
      </div>
      </div>

     
    </div>
  );
};

export default Service;
