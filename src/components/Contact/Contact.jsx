import React from "react";
import "./Contact.css";
import pic from "../../assets/gallery-2.png";
import iconsim from "../../assets/phone-icon.png";
import iconemail from "../../assets/mail-icon.png";
import iconloc from "../../assets/location-icon.png";




const Contact = () => {
  return (
    <div className="about-container" id="contantID">
      <div className="video-space">
        <img src={pic} alt="image" />
      </div>
      <div className="about-us" id="contactID">
        <h3>Contact us</h3>
        <p>
          For more info and directions please contact us via below communication channels or come directly to our office
        </p>
        <div className="contacts">
          <ul>
            <li>
              <div className="contact">
                <div>
                  <img src={iconemail} alt="" width="20px" />
                </div>
<div>                <p>chepesicharles@gmail.com</p>
</div>              </div>
            </li>
            <li>
              <div className="contact">
                <div>
                  <img src={iconemail} alt="" width="20px" />
                </div>
                <div><p>charleschepesi@icloud.com</p></div>
              </div>
            </li>
            <li>
              <div className="contact">
                <div>
                  <img src={iconemail} alt="" width="20px" />
                </div>
                <p>chepesivisaandeducationconsulta@gmail.com</p>
              </div>
            </li>
            <li>
              <div className="contact">
                <div>
                  <img src={iconsim} alt="" width="20px" />
                </div>
                <p>+255 769 871 910</p>
              </div>
            </li>
            <li>
              <div className="contact">
                <div>
                  <img src={iconsim} alt="" width="20px" />
                </div>
                <p>+255 689 166 548</p>
              </div>
            </li>
            <li>
              <div className="contact">
                <div>
                  <img src={iconloc} alt="" width="20px" />
                </div>
                <p>Makumbusho, dar es salaam</p>
              </div>
            </li>
            <li>
              <div className="contact">
                <p>
                  office Hours: <strong>Monday-Friday, 09:00am-17:00pm</strong>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
