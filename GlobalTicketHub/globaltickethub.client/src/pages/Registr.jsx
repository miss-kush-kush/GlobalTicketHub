import React, { useState } from "react";
import "../styles/login.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Registr() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    agreementChecked: false,
    isEmailValid: false,
    isPasswordValid: false,
    isConfirmPasswordValid: false,
    isPhoneValid: false,
    isNameValid: false,
    isLastNameValid: false,
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-zА-Яа-яЁё]+$/;
    return nameRegex.test(name);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^(\+?3?8?0?)?\s?\(?\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    return phoneRegex.test(phone);
  };

  const validatePasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    let isValid = true;

    if (name === "email") {
      isValid = validateEmail(value);
      setFormData({
        ...formData,
        [name]: newValue,
        isEmailValid: isValid,
      });
    } else if (name === "phone") {
      isValid = validatePhone(value);
      setFormData({
        ...formData,
        [name]: newValue,
        isPhoneValid: isValid,
      });
    } else if (name === "firstName") {
      isValid = validateName(value);
      setFormData({
        ...formData,
        [name]: newValue,
        isNameValid: isValid,
      });
    } else if (name === "lastName") {
      isValid = validateName(value);
      setFormData({
        ...formData,
        [name]: newValue,
        isLastNameValid: isValid,
      });
    } else if (name === "confirmPassword") {
      isValid = validatePasswordMatch(formData.password, value);
      setFormData({
        ...formData,
        [name]: newValue,
        isConfirmPasswordValid: isValid,
      });
    } else {
      setFormData({
        ...formData,
        [name]: newValue,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Дані відправлені", formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="reg-container">
          <div style={{ position: "relative" }}>
            <input
              type="text"
              name="firstName"
              placeholder="Ім'я*"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            {formData.isNameValid && (
              <span className="email-validation-icon">✓</span>
            )}
          </div>

          <div style={{ position: "relative" }}>
            <input
              type="text"
              name="lastName"
              placeholder="Прізвище*"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            {formData.isLastNameValid && (
              <span className="email-validation-icon">✓</span>
            )}
          </div>

          <div style={{ position: "relative" }}>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {formData.isEmailValid && (
              <span className="email-validation-icon">✓</span>
            )}
          </div>

          <div style={{ position: "relative" }}>
            <input
              type="tel"
              name="phone"
              placeholder="+380 (00) 000 00 00"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            {formData.isPhoneValid && (
              <span className="email-validation-icon">✓</span>
            )}
          </div>

          <div style={{ position: "relative" }}>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Пароль*"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <span className="cumancen">
              <i
                className={passwordVisible ? "far fa-eye" : "far fa-eye-slash"}
                onClick={togglePasswordVisibility}
              ></i>
            </span>
          </div>

          <div style={{ position: "relative" }}>
            <input
              type={passwordVisible ? "text" : "password"}
              name="confirmPassword"
              placeholder="Підтвердіть*"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <span className="cumancen">
              <i
                className={passwordVisible ? "far fa-eye" : "far fa-eye-slash"}
                onClick={togglePasswordVisibility}
              ></i>
            </span>
          </div>
        <div className="checkbox-container-accept"> 
            <div>
                <input
                type="checkbox"
                name="agreementChecked"
                checked={formData.agreementChecked}
                onChange={handleInputChange}
                required
                />
            </div>
            <div className="text-agree">
                <label htmlFor="agreementChecked">
                    Натисканням кнопки реєстрації, я приймаю умови <a href="">договору оферти</a> і не заперечую проти обробки моїх <a href="">персональних даних</a> та їх передачі третім особам (авіперевізнику та іншим).
                </label>
            </div> 
        </div>    
          <button type="submit">УВІЙТИ</button>
        </div>
      </form>
    </>
  );
}
