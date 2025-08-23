import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import emailIcon from "../../assets/mail-icon.png";
import locationIcon from "../../assets/location-icon.png";
import logo from '../../assets/chepec-3.png'
import fb from "../../assets/social (2).png";
import insta from "../../assets/social (1).png";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* ------------------------------------ */}
      <div className="company" aria-label="">
        <div className="logo-company">
        
          <Link to="/signin"><img src={logo} alt="" width="100" /></Link>
        </div>
        <div className="copyright-company">
          <span>
            &copy; {new Date().getFullYear()} Chepes Visa & Education
            Consultants.All rights reserved.
          </span>
        </div>
      </div>

      {/* ------------------------------------ */}

      <div className="social" aria-label="Social links">
        <ul>
          <li>
            <img src={fb} alt="" width="30px" />

            <a href="#">Chepes Visa & Eduucation Consultants</a>
          </li>
          <li>
            <img src={insta} alt="" width="30px" />
            <a href="#">@chepes.visa</a>
          </li>
          <li>
            <img src={insta} alt="" width="30px" />
            <a href="#">@chepes_visa_eduucation_cons</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
