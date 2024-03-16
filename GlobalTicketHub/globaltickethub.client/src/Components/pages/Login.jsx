import React, { useState, useContext } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import AuthContext from '../contexts/AuthContext'

const validationSchema = yup.object().shape({
  email: yup.string().required().matches(/^[^@]+@[^.]+\..+$/),
  password: yup.string().min(6).required(),
});

export default function Login() {
  const {login} = useContext(AuthContext)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (values) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      // Логіка для випадку, коли форма пройшла валідацію
    } catch (errors) {
      // Обробка помилок валідації
    }
  };
  const handle = async (event) =>{
    event.preventDefault()
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    let res = await login(email,password)
    if(res.status == 200){
      toast.success(res.message)
    }
    else{
      toast.error(res.message)
    }
  }

  return (
      <form onSubmit={handle}>
        <div className="login-container">
          <div style={{ position: "relative" }}>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && !formik.errors.email && (
            <span className="email-validation-icon">
              <i class="fa-solid fa-circle-check"></i>
            </span>
            )}
          </div>

          <div style={{ position: "relative" }}>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Пароль*"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <span
              className="cumancen"
              onClick={togglePasswordVisibility}
            >
              <i
                className={passwordVisible ? "far fa-eye" : "far fa-eye-slash"}
              ></i>
            </span>
          </div>

          <div className="checkbox-container">
            <div className="checkbox-text-center">
              <div
                className={`custom-checkbox ${checked ? 'checked' : ''}`}
                onClick={toggleCheckbox}
                required
              >
                {/* Іконка позначення */}
                {checked && <span className="checkmark">&#10003;</span>}
              </div>
              <label className="text-remember">Запам'ятати мене</label>
            </div>
            <a href="">Забули пароль</a>
          </div>

          <button type="submit">УВІЙТИ</button>
        </div>
      </form>
  );
}
