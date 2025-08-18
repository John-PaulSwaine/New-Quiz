import React, { useState } from 'react';
import '../App.css';

const ReportProblem = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); 
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div>
      <h1>Got a problem?</h1>
      <p>Please contact us below to report any problems with accessing or navigating the website:</p>

      {submitted && (
        <p className="success-message" style={{ color: 'green' }}>
          Thank you for your message! We'll get back to you shortly.
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} disabled={submitted}/>
          {errors.name && <p className="error" style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} disabled={submitted}/>
          {errors.email && <p className="error" style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} disabled={submitted}/>
          {errors.message && <p className="error" style={{ color: 'red' }}>{errors.message}</p>}
        </div>
        <button type="submit" disabled={submitted} style={{ marginTop: '10px' }}>Send</button>
      </form>
      <br />
      <p>If you prefer, you can also email us directly at: <a href="mailto:swainejohn477@gmail.com">swainejohn477@gmail.com</a></p>
    </div>
  );
};

export default ReportProblem;