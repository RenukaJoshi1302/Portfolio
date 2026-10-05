import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { ContactFormData } from "../types";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.message) {
      setIsSuccess(true);
      setFormData({ fullName: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <section id="contact" className="section container">
      <div className="section-header">
        <p className="section-tag">Inquiry</p>
        <h2>Get In Touch</h2>
      </div>
      <div className="glass-card form-card">
        {isSuccess && (
          <div className="success-banner">
            ✓ Message submitted successfully! Thank you for reaching out.
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Enter your message or project inquiry..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
