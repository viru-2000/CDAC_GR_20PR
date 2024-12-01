import React, { useState } from "react";
import "../css/all.css";
import { validateEmail, validatePassword } from "../validation/registervalidation";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission to avoid default browser validation

    // Validate email and password
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    // Set errors if any
    setErrors({
      email: emailError,
      password: passwordError,
    });

    // If no errors, proceed with form submission
    if (!emailError && !passwordError) {
      // Show success message
      setSuccessMessage("Account Created Successfully!");

      // Clear form fields
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        pincode: "",
      });
      
      // Reset errors after successful submission
      setErrors({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="register-container">
      <h1>One Click Service</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="text" // Changed from 'email' to 'text' for custom validation
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>} {/* Custom error message */}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error-message">{errors.password}</p>} {/* Custom error message */}
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pin Code</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            placeholder="PinCode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="terms">
          By clicking below and creating an account, I agree to{" "}
          <a href="#">One Click Service's Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </div>
        <button type="submit" className="btn">
          Create Account
        </button>
      </form>

      {/* Display success message */}
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default Register;
