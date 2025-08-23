import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import logo from '../../assets/chepec-1.png'

const Hero = () => {
  return (
    <div className="hero" id="heroID">
      {/* ------------------------------------------------------ */}
      <div className="circle" aria-hidden="true"></div>

      {/* ---------------------HERO CONTENT---------------------- */}

      <div className="hero_contents">
        <span className="kicker">Visa • Passport • Study & Work Abroad</span>

        <h2>
          We have got you{" "}
          <span className="cover"
            style={{ color: "#FFDE73", textShadow: "0 3px 0 rgba(10, 10, 10, 0.47)" }}
          >
            Covered
          </span>
        </h2>
        <p className="hero_p">
          Right visa with expert guidance and complete document support. From
          passport applications and renewals to university and job placement
          assistance — we simplify your journey abroad. From a dream to a
          reality, Chepes provides seamless support for your journey abroad.
        </p>

        <p className="hero_p">What we do offer the best </p>
        <div className="badge-strip" aria-label="Trust badges">
          <div className="badge">Quick response</div>
          <div className="badge">Better Service</div>
          <div className="badge">Best Choices</div>
          <div className="badge">Fulfill Your Opinion</div>
          <div className="badge">Quality Services</div>
          <div className="badge">Document check</div>
          <div className="badge">Updates till approval</div>
        </div>
      </div>
      {/* --------------------HERO BANNER-------------------- */}

      <div className="hero_banner">
        <div className="hero-visual" aria-hidden="true">
          <div
            className="card pass-card"
            role="img"
            aria-label="Passport and boarding pass illustration"
          >
            <div className="ticket">
              <span>Boarding Pass</span>
              <small>Dar es Salaam → Overseas</small>
            </div>
            <hr
              style={{
                border: "none",
                borderTop: "1px dashed #E3ECF5",
                margin: "14px 0",
              }}
            />
            <div
              className="card_info"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                color: "#0B2A45",
              }}
            >
              <div>
                <small>Passenger</small>
                <div style={{ fontWeight: "700" }}>
                  {" "}
                  <p>Chepes Client</p>
                </div>
              </div>
              <div>
                <small>Status</small>
                <div style={{ fontWeight: "700" }}>
                  {" "}
                  <p>Approved ✓</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------- */}
        <div className="banner_image">
          {/* <img src="src\assets\chepec 1.png" alt="logo" width="100px" /> */}
        </div>
      </div>

      <div className="hero_box2">
        <div>
          {" "}
          <img src={logo} alt="logo" width="100px" />
        </div>

        <div className="cta-row">
          <Link to="/form" className="btn primary">
            Start Application
          </Link>
          <a className="btn ghost" href="#servicesId">
            Explore Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
