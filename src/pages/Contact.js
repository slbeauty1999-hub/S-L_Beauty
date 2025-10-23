import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import background180 from '../img/background180.svg';
import discount25off from '../img/25off.png'; // Assuming this image is still used for 25% off
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    service: '',
    message: '',
    date: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    emailjs.init("er_2t8-HTd-UtieWd"); // Replace with your EmailJS User ID
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await emailjs.sendForm(
        'service_y7ytynj', // Replace with your EmailJS Service ID
        'template_34wroqi', // Replace with your EmailJS Template ID
        e.target
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          number: '',
          email: '',
          service: '',
          message: '',
          date: ''
        });
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero / Title Section */}
      <section className="sectionFirst">
        <h1>Contact Us</h1>
        <div className="transform-img">
          <img src={background180} alt="Decorative background" />
        </div>
      </section>

      {/* Professional Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="f-head">Get in Touch</div>
          <p style={{ textAlign: 'center', color: '#3e4359', marginBottom: '1rem' }}>
            We’d love to hear from you! Fill out the form below and our team will get back to you shortly.
          </p>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="success-message">
              ✅ Thank you! Your message has been sent successfully.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="error-message">
              ❌ Oops! Something went wrong. Please try again later.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            >
              <option value="" disabled>Select a Service</option>
              <option value="Bridal Makeup">Bridal Makeup</option>
              <option value="Hair Styling">Hair Styling</option>
              <option value="Facial & Skin Care">Facial & Skin Care</option>
              <option value="Spa & Massage">Spa & Massage</option>
            </select>
            <input 
              type="date" 
              name="date" 
              value={formData.date}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              required
            ></textarea>
            
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
 <div className="discount-callout-section">
        <div className="discount-image-wrapper">
          <img src={discount25off} alt="25% off promotional banner" className="discount-image" />
        </div>
        <div className="discount-callout-content">
          <h2 className="callout-title">Book Your Appointment Now</h2>
          <p className="callout-description">
            And Get 25% Off on All Professional Make Up. Awesome Monsoon Sale!
          </p>
          {/* <Link to="/contact" className="button primary-button">BOOK AN APPOINTMENT</Link> */}
        </div>
      </div>
   </div>
  );
}

export default Contact;
