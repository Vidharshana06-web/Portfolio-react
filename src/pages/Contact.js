import React, { useState } from "react";
import emailjs from "emailjs-com"; // ✅ Import EmailJS
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) {
    setStatus("⚠️ Please fill in all required fields!");
    return;
  }

  // ✅ Send email using EmailJS
  emailjs
    .send(
      "service_jtnesqm",         // Your Service ID
      "template_ibqzz2l",        // Your Template ID
      {
        from_name: form.name,    // Mapping form fields to template variables
        from_email: form.email,
        message: form.message,
      },
      "EyxP-v2gUM8sJvf92"       // Your EmailJS public key
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("✅ Thank you for reaching out! Your message has been sent.");
        setForm({ name: "", email: "", message: "" });

        // ✅ Popup alert
        alert("🎉 Thank you for reaching out! Your message has been sent successfully.");
      },
      (err) => {
        console.error("FAILED...", err);
        setStatus("❌ Oops! Something went wrong. Please try again.");
      }
    );
};


  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* LEFT SIDE - IMAGE */}
        <div className="contact-left">
          <video
            src="/assets/images/video-mp4.mp4"
            className="contact-video"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="contact-right">
          <h2 className="contact-heading">
            <span className="typewriter-text">Code. Create. Connect.</span>
          </h2>

          <p className="contact-subtext">
            Feel free to reach out for collaborations, internships, or just to say hello!
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              value={form.email}
              onChange={handleChange}
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Type your message here..."
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="send-btn">Send Message</button>
          </form>

          {status && <p className="form-status">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
