import React from "react";
import '../style/Contact.css'; // Import the external CSS file

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <h2 className="common-heading">Feel Free to Contact Us</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7570833445793!2d75.75877891110589!3d26.879457861421347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db45502e9efd7%3A0x16b3ec430ca47bf7!2z4KSX4KWL4KSq4KS-4KSy4KSq4KWB4KSw4KS-IOCkrOCkvuCkr-CkquCkvuCkuCDgpK7gpL7gpLDgpY3gpJcsIOCknOCkr-CkquClgeCksCwg4KSw4KS-4KSc4KS44KWN4KSl4KS-4KSo!5e0!3m2!1shi!2sin!4v1719923510975!5m2!1shi!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xnnaqpea"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              placeholder="Your Message"
              required
            ></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
