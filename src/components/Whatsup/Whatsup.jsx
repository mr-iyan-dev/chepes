import React from 'react'
import './Whatsup.css'
const Whatsup = () => {
  return (
    <div>
       <a href="https://wa.me/255769871910" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <div className="whatsapp">
            <svg viewBox="0 0 24 24" width="35" height="35" fill="#fff">
                <path d="M12 2a10 10 0 0 0-8.7 15.1L2 22l4.9-1.3A10 10 0 1 0 12 2z" opacity=".15" />
                <path
                    d="M12 2a10 10 0 0 0-8.7 15.1L2 22l4.9-1.3A10 10 0 1 0 12 2zm5.5 14.6c-.2.6-1 1-1.6 1.1-.4 0-.9.1-2.9-.6-2.4-.9-4-3.1-4.1-3.2-.1-.1-1-1.3-1-2.5s.6-1.8.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .5.4.2.5.6 1.7.6 1.8.1.1 0 .3 0 .4 0 .1-.2.4-.4.6-.2.2-.4.4-.2.7.2.2.8 1.3 1.9 2.1 1.3.9 2.3 1.2 2.6 1.3.3.1.5.1.7-.1.2-.2.9-1 .9-1.3.1-.3.4-.2.7-.1.3.1 1.6.7 1.9.8.3.1.5.1.6.2 0 .1 0 .5-.1.7z" />
            </svg>

            <span>WhatsApp us</span>
        </div>
    </a>
    </div>
  )
}

export default Whatsup
