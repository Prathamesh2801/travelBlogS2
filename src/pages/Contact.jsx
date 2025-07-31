import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-vh-100  py-5">
      <div className="container">
        {/* Header Section */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold  mb-3">Contact Us</h1>
            <p className="lead text-muted">
              Get in touch with us. We'd love to hear from you and will respond as soon as possible.
            </p>
          </div>
        </div>

        <div className="row g-5">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-4 p-md-5">
                <h3 className="card-title mb-4 text-primary">Send us a Message</h3>
                
                <div>
                  {/* Name Field */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="name">Full Name *</label>
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>

                  {/* Email Field */}
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="email">Email Address *</label>
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  {/* Phone Field */}
                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="phone">Phone Number (Optional)</label>
                  </div>

                  {/* Subject Field */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="subject">Subject *</label>
                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                  </div>

                  {/* Message Field */}
                  <div className="form-floating mb-4">
                    <textarea
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      id="message"
                      name="message"
                      placeholder="Your message"
                      style={{ height: '120px' }}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="message">Message *</label>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>

                  {/* Submit Button */}
                  <button 
                    className="w-100 btn btn-primary btn-lg" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  <hr className="my-4" />
                  
                  <small className="text-muted">
                    * Required fields. We respect your privacy and will never share your information.
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Contact Info */}
          <div className="col-lg-6">
            <div className="row g-4 h-100">
              {/* Satellite Map */}
              <div className="col-12">
                <div className="card shadow-sm border-0">
                  <div className="card-body p-0">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987368715491!3d40.697670063614535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e1!3m2!1sen!2s!4v1643723515678!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: '0.375rem' }}
                        allowFullScreen="true"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Satellite Map"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="col-12">
                <div className="card shadow-sm border-0">
                  <div className="card-body p-4">
                    <h4 className="card-title text-primary mb-4">Get in Touch</h4>
                    
                    <div className="row g-3">
                      <div className="col-12">
                        <div className="d-flex align-items-center">
                          <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                            <svg width="20" height="20" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                          </div>
                          <div>
                            <h6 className="mb-1 fw-semibold">Address</h6>
                            <p className="mb-0 text-muted">123 Business Street, New York, NY 10001</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="d-flex align-items-center">
                          <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                            <svg width="20" height="20" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.98 10.584a6.658 6.658 0 0 1-2.962-2.962l.742-1.805a.678.678 0 0 0-.122-.58L5.844 3.93a.678.678 0 0 0-.19-.063z"/>
                            </svg>
                          </div>
                          <div>
                            <h6 className="mb-1 fw-semibold">Phone</h6>
                            <p className="mb-0 text-muted">+1 (555) 123-4567</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="d-flex align-items-center">
                          <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                            <svg width="20" height="20" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg>
                          </div>
                          <div>
                            <h6 className="mb-1 fw-semibold">Email</h6>
                            <p className="mb-0 text-muted">contact@company.com</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="d-flex align-items-center">
                          <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                            <svg width="20" height="20" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                            </svg>
                          </div>
                          <div>
                            <h6 className="mb-1 fw-semibold">Business Hours</h6>
                            <p className="mb-0 text-muted">Mon - Fri: 9:00 AM - 6:00 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}