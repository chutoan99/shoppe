import { useEffect, useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import Footer from '../../component/footer/index.js';
import { LoadingTrue, LoadingFalse } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports.js';
import Loading from '../../component/loading/index.js';
let Logo2 = require('../../Img/logo-2.png');
let Logo = require('../../Img/shopee.png');
function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state);
  const [validationMsg, setValidationMsg] = useState({});
  const [nameRegister, setNameRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passWordRegister, SetPassWordRegister] = useState('');
  const validateAll = () => {
    const msg = {};
    if (isEmpty(nameRegister)) {
      msg.nameRegister = 'Pleas input your Name';
    }
    if (isEmpty(emailRegister)) {
      msg.emailRegister = 'Pleas input your Email';
    } else if (!isEmail(emailRegister)) {
      msg.emailRegister = 'Email your is incorrect';
    }
    if (isEmpty(passWordRegister)) {
      msg.passWordRegister = 'Pleas input your PassWord';
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const handleRegisterForm = () => {
    const isValid = validateAll();
    if (isValid) {
      console.log('true1');
      const axios = require('axios');
      const data = JSON.stringify({
        name: nameRegister,
        password: passWordRegister,
        email: emailRegister,
      });
      const config = {
        method: 'post',
        url: 'http://localhost:3000/users',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          if (response.status === 201) {
            dispatch(LoadingTrue());
            setTimeout(() => {
              navigate('/login');
              dispatch(LoadingFalse());
            }, 3000);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <>
      {loading ? <Loading></Loading> : null}
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
                    value={nameRegister}
                    onChange={(e) => setNameRegister(e.target.value)}
                    type="text"
                    placeholder="Tên của bạn"
                    className="auth-form__input"
                  />
                  <span className="erro">{validationMsg.nameRegister}</span>
                </div>
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
            {renderAuthFormSocials()}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
  function renderAuthFormSocials() {
    return (
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
    );
  }
}
export default RegisterForm;
