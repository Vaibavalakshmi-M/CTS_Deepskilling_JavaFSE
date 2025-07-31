import React, { useState } from 'react';
import './App.css';

function ComplaintRegister() {
  const [formData, setFormData] = useState({
    ename: '',
    complaint: '',
  });

  const [refNo, setRefNo] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const ref = Math.floor(100000 + Math.random() * 900000); // 6-digit random reference number
    setRefNo(ref);
    alert(`Thanks ${formData.ename}, your complaint was submitted.\nReference ID: ${ref}`);
    setFormData({ ename: '', complaint: '' });
  };

  return (
    <div className="container">
      <h2>Register your complaint</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="ename"
            value={formData.ename}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Complaint:</label>
          <textarea
            name="complaint"
            value={formData.complaint}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;
