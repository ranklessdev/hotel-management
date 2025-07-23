import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-hero">
        <div className="overlay">
          <h1>Get in Touch</h1>
          <p>Your journey to Paradise starts with a simple message.</p>
        </div>
      </div>

      <div className="contact-main">
        <div className="contact-info">
          <h2>📍 Hotel Paradise</h2>
          <p>Blissful Boulevard, Goa, India</p>
          <p>📧 contact@paradisehotel.com</p>
          <p>📞 +91 98765 43210</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;