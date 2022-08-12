import { useState } from 'react';
import { addListRegisterForm } from '../redux/action';

import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import Footer from '../component/Footer.js';
let Logo2 = require('../Img/logo-2.png');
let Logo = require('../Img/shopee.png');
function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validationMsg, setValidationMsg] = useState({});
  const [emailRegister, setEmailRegister] = useState('');
  const [passWordRegister, SetPassWordRegister] = useState('');
  const [passWord2Register, SetPassWord2Register] = useState('');
  const validateAll = () => {
    const msg = {};
    if (isEmpty(emailRegister)) {
      msg.EmailRegister = 'Pleas input your Email';
    } else if (!isEmail(emailRegister)) {
      msg.EmailRegister = 'Email your is incorrect';
    }
    if (isEmpty(passWordRegister)) {
      msg.PassWordRegister = 'Pleas input your PassWord';
    }
    if (isEmpty(passWord2Register)) {
      msg.PassWord2Register = 'Pleas input your PassWord';
    }
    setValidationMsg(msg);
    if (Object.keys(msg).lenght > 0) return false;
    return true;
  };
  const handleRegisterForm = () => {
    const isValid = validateAll();
    if (!isValid) return;
    const listRegisterForm = {
      id: 10,
      email: emailRegister,
      passWord: passWordRegister,
      passWord2: passWord2Register,
    };
    dispatch(addListRegisterForm(listRegisterForm));
    localStorage.setItem('RegisterForm', JSON.stringify(listRegisterForm));
    navigate('/login');
  };
  return (
    <>
      <div className="grid wide">
        <header>
          <div className="header_login">
            <div className="header_login-logo">
              <img src={Logo2} alt="logo" onClick={() => navigate('/')} />
              <span>Đăng Ký</span>
            </div>
            <div className="header_login-logo-helps">
              <a href="# ">Bạn cầu giúp đỡ?</a>
            </div>
          </div>
        </header>
      </div>
      <div className="modals">
        <div className="modal__body">
          <div className="modals-logo-shoppe hide-on-table-488 Hide-on-mobile">
            <img src={Logo} alt="logo"></img>
          </div>
          <div className="auth-form">
            <div className="auth-form__container">
              <div className="auth-form__header">
                <h3 className="auth-form__heading">Đăng Ký</h3>
                <span className="auth-form__switch-btn" onClick={() => navigate('/login')}>
                  Đăng Nhập
                </span>
              </div>
              <div className="auth-form__form">
                <div className="auth-form__group">
                  <input
                    value={emailRegister}
                    onChange={(e) => setEmailRegister(e.target.value)}
                    type="text"
                    placeholder="Email của bạn"
                    className="auth-form__input"
                  />
                  <span className="erro">{validationMsg.emailRegister}</span>
                </div>
                <div className="auth-form__group">
                  <input
                    value={passWordRegister}
                    onChange={(e) => SetPassWordRegister(e.target.value)}
                    type="password"
                    placeholder="Mật khẩu của bạn"
                    className="auth-form__input"
                  />
                  <span className="erro">{validationMsg.passWordRegister}</span>
                </div>
                <div className="auth-form__group">
                  <input
                    value={passWord2Register}
                    onChange={(e) => SetPassWord2Register.target.value}
                    type="password"
                    placeholder="Nhập lại mật khẩu của bạn"
                    className="auth-form__input"
                  />
                  <span className="erro">{validationMsg.passWord2Register}</span>
                </div>
              </div>
              <div className="auth-form-help">
                <a
                  href="https://shopee.vn/buyer/reset"
                  className="auth-form__help-link auth-form__help-forgot"
                >
                  Quên mật khẩu
                </a>
                <span className="auth-form__help-separate"></span>
                <a href="# " className="auth-form__help-link">
                  Cần trợ giúp?
                </a>
              </div>
              ;
              <div className="auth-form__controls">
                <button
                  className="btn auth-form__controls-back btn--normal"
                  onClick={() => navigate('/')}
                >
                  TRỞ LẠI
                </button>

                <button className="btn btn--prinary" onClick={handleRegisterForm}>
                  ĐĂNG KÝ
                </button>
              </div>
            </div>
            <div className="auth-form__socials">
              <a href="# " className="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                <i className="auth-form__socials-icon fa-brands fa-facebook-square"></i>{' '}
                <span className="auth-form__socials-title">Đăng ký với Facebook</span>
              </a>
              <a href="# " className="auth-form__socials--google btn btn--size-s btn--with-icon">
                <i className="auth-form__socials--google auth-form__socials-icon fa-brands fa-google"></i>
                <span className="auth-form__socials-title">Đăng ký với google</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default RegisterForm;
