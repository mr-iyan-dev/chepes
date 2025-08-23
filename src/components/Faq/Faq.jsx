import React from 'react'
import './Faq.css'
import video from "../../assets/video.mp4";

const Faq = () => {
  return (
       <div className="faq-video" id='faqID'>
       <div className="faq-container">
         <h3>FAQs</h3>
        <details>
          <summary>How long does a typical visa take?</summary>
          <p>Timelines vary by country and visa type. Many decisions arrive within 2–8 weeks. We advise realistic
            timelines during your consultation.</p>
        </details>
        <details>
          <summary>Can you help me choose the right visa?</summary>
          <p>Yes. We evaluate your goals, eligibility, and documentation to recommend the most suitable category.</p>
        </details>
        <details>
          <summary>Do you offer document translation or notarization?</summary>
          <p>We arrange certified translations and notarization through trusted partners when required.</p>
        </details>
        <details>
          <summary>Do you offer document translation or notarization?</summary>
          <p>We arrange certified translations and notarization through trusted partners when required.</p>
        </details><details>
          <summary>Do you offer document translation or notarization?</summary>
          <p>We arrange certified translations and notarization through trusted partners when required.</p>
        </details><details>
          <summary>Do you offer document translation or notarization?</summary>
          <p>We arrange certified translations and notarization through trusted partners when required.</p>
        </details>
       </div>
       <div className="video-container">
        <video src={video} loop autoPlay controls muted width='100px'></video>
       </div>
      </div>
  )
}

export default Faq
