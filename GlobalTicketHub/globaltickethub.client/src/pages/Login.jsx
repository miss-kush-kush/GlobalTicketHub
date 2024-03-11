import React, { useState, handleSubmit } from "react";
import "../styles/login.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
    isEmailValid: false, // New state variable to track email validity
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    let isEmailValid = formData.isEmailValid;

    if (name === "email") {
      isEmailValid = validateEmail(value);
    }

    setFormData({
      ...formData,
      [name]: newValue,
      isEmailValid: isEmailValid,
    });
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="login-container">
      

        <div style={{ position: "relative" }}>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formData.isEmailValid && (
            <span className="email-validation-icon">
              ✓
            </span>
          )}
        </div>

        <div style={{ position: "relative" }}>
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder="Пароль*"
            value={formData.password}
            onChange={handleInputChange}
          />
          <span
            className="cumancen">
            <i
              className={passwordVisible ? "far fa-eye" : "far fa-eye-slash"}
              onClick={togglePasswordVisibility}
            ></i>
          </span>
        </div>
        
        <label>*Обов'язкові поля</label>

        <div className="checkbox-container">
          <div className="checkbox-text-center">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
            />
            <label className="text-remember">Запам'ятати мене</label>
          </div>
          <a href="">Забули пароль</a>
        </div>

        <button type="submit">УВІЙТИ</button>
      </div>
      </form>
    </>
  );
}
