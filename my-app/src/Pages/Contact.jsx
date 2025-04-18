import React from 'react';

function Contact() {
  return (
    <div>
      <div className="contact-head">
        <div className="head-contact">
          Contact us
        </div>
      </div>

      <div className="contact-main">
        <div className="contact-details">
          <div className="contact-1">
            <img src="/src/assets/download.jpeg" alt="Profile" />
          </div>
          <div className="contact-2">
            <p>Where Ideas Spark,</p> 
            <p>and Tech Ignites!⚡</p>
          </div>
          <div className="contact-3">
            <img src="/src/assets/linkdin.png" alt="LinkedIn" />
            <img src="/src/assets/email.png" alt="Email" />
            <img src="/src/assets/instagram.png" alt="Instagram" />
          </div>
        </div>
        <code>
        <div className="contact-bottom">
        <p>Made with 💙  by IoSC-EDC
        One Club, One Family</p>
        </div>
        </code>
      </div>
    </div>
  );
}

export default Contact;
