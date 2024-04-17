import React, { useState } from "react";
import * as Yup from "yup";
import "../styles/settings.css";
import InputMask from 'react-input-mask';
import { useFormik } from "formik";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Settings = () => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [confirmNewPasswordVisible, setConfirmNewPasswordVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("uk"); // Початкова мова - українська
  const [isChecked, setIsChecked] = useState(false);

  const formik = useFormik({
    initialValues: {
     
      oldPassword: "",
      changePassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object({
      
        oldPassword: Yup.string()
            .min(8, "Мінімум 8 символів")
            .required("Це поле є обов'язковим"),
        changePassword: Yup.string()
            .min(8, "Мінімум 8 символів")
            .required("Це поле є обов'язковим"),
        confirmNewPassword: Yup.string()
            .oneOf([Yup.ref("changePassword"), null], "Паролі повинні збігатися")
            .required("Це поле є обов'язковим"),
        agreementChecked: Yup.boolean()
            .oneOf([true], "Будь ласка, погодьтесь з умовами"),
    }),
    
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatarUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    document.getElementById('avatar-input').click();
  };

  const handleKeyPress = (e) => {
    const pattern = /[A-Za-zА-Яа-яІіЇїЄєҐґ\s]/;
    const inputChar = String.fromCharCode(e.charCode);
    if (!pattern.test(inputChar)) {
      e.preventDefault();
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const toggleConfirmNewPasswordVisibility = () => {
    setConfirmNewPasswordVisible(!confirmNewPasswordVisible);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };
  

  return (
    <>
        <div className="avatar-container">
        <div className="image-container" onClick={handleUploadClick}>
            {avatarUrl ? (
            <img src={avatarUrl} alt="Avatar" className="avatar-image" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            ) : (
            <p className="image-text">U</p>
            )}
        </div>
        <input type="file" id="avatar-input" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
        <div>
            <p className="avatar-title-text">Avatar</p>
            <a className="avatar-load-text" onClick={handleUploadClick}>Завантажити фото</a>
        </div>
        </div>

        <div className="personal-data-container">
            <p className="title-text">Персональні дані</p>
            <div>
                <input type="text" placeholder="Стать*" className="input-genger" onKeyPress={handleKeyPress} />
                <input type="text" placeholder="Ім'я та Прізвище*" className="input-fn" onKeyPress={handleKeyPress} />
                <input type="date" placeholder="Дата народження*" class="input-birthday" />
            </div>
            <div className="footer-container">
                <a href="" className="text-cancle">Скасувати</a>
                <button className="btn-save">Зберегти</button>
            </div>
        </div>

        <div className="contact-details-container">
            <p className="title-text">Контактні дані покупця</p>
            <div className="contact-container">
                <p className="text-email">username@gmail.com</p>
                
                <input type="tel" className="input-tel-country" placeholder="380" />
                <InputMask mask="999-99-99"  type="tel" className="input-tel" placeholder="Номер телефону*"/>
                
                
            </div>
        </div>

        <div className="change-pas-container">
            <p className="title-text">Змінна вашого паролю</p>
            <div style={{ display: "inline-flex", margin: "15px 0"}}>
                <div style={{ position: "relative" }}>
                    <input
                        className="input-password"
                        type={passwordVisible ? "text" : "password"}
                        name="oldPassword"
                        placeholder="Поточний пароль*"
                        value={formik.values.oldPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
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
                        className="input-password"
                        type={confirmPasswordVisible ? "text" : "password"}
                        name="changePassword"
                        placeholder="Новий пароль*"
                        value={formik.values.changePassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <span className="cumancen">
                        <i
                        className={confirmPasswordVisible ? "far fa-eye" : "far fa-eye-slash"}
                        onClick={toggleConfirmPasswordVisibility}
                        ></i>
                    </span>
                </div>

                <div style={{ position: "relative" }}>
                    <input
                        className="input-password"
                        type={confirmNewPasswordVisible ? "text" : "password"}
                        name="confirmNewPassword"
                        placeholder="Введіть ще раз*"
                        value={formik.values.confirmNewPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <span className="cumancen">
                        <i
                        className={confirmNewPasswordVisible ? "far fa-eye" : "far fa-eye-slash"}
                        onClick={toggleConfirmNewPasswordVisibility}
                        ></i>
                    </span>
                </div>
            </div>
            <div className="footer-container">
                <a href="" className="text-cancle">Скасувати</a>
                <button className="btn-save">Зберегти</button>
            </div>
        </div>

        <div className="language-container">
            <p className="title-text">Мова</p>
            <div className="custom-select">
                <div className="select-container">
                    <select className="select-language" value={selectedLanguage} onChange={handleLanguageChange}>
                        <option className="select-drop" value="uk">Українська</option>
                        <option className="select-drop" value="en">Англійська</option>
                    </select>
                </div>
                <KeyboardArrowDownIcon className="select-arrow-icon" />
            </div>
        </div>
        
        <div className="subscription-container">
            <p className="title-text">Налаштування підписки</p>
            <div className="confirm-text-container">
                <div className="toggle-switch">
                    <input
                        type="checkbox"
                        id="switch"
                        checked={isChecked}
                        onChange={toggleSwitch}
                    />
                    <label htmlFor="switch"></label>
                </div>
                <div>
                    <p>Я хочу отримувати інформацію щодо спецпропозицій, акцій і додаткових послуг по email/телефону/Viber.</p>
                    <p>Відписатися від розсилки можна в особистому кабінеті або за посиланням у будь-якому листі. Детальніше про умови використання персональних даних <a href="">за посиланням.</a> </p> 
                </div>
                
            </div>
            
        </div>
    
    <a href="">Видалити обліковий запис</a>



    </>
  );
};

export default Settings;
