import React from "react";
import "./Processes.css";
const Processes = () => {
  return (
    <div className="process container" id="processesID">
                  <h3>How It Works</h3>

      <div className="grid cols-3" style={{ marginTop: "18px" }}>
        <div className="step">
          <div>
            <strong>Submit Documents</strong>
            <br />
            <span className="muted">
              Send your details and identification for a quick review.
            </span>
          </div>
        </div>
        <div className="step">
          <div>
            <strong>Review & Consultation</strong>
            <br />
            <span className="muted">
              We confirm eligibility and prepare your application roadmap.
            </span>
          </div>
        </div>
        <div className="step">
          <div>
            <strong>Submission & Updates</strong>
            <br />
            <span className="muted">
              We file your application and keep you updated till decision.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processes;
