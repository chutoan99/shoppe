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
  const handleLogin = () => {
    navigate('/login');
  };
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
      <div className="black">
        <div className="grid wide">
          <header>
            <div className="header_login ">
              <div className="header_login-logo ">
                <img src={Logo2} alt="logo" onClick={() => navigate('/')} />
                <span>Đăng Ký</span>
              </div>
              <div className="header_login-logo-helps">
                <a href="# ">Bạn cầu giúp đỡ?</a>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div className="modals">
            <div className="modal__body">
              <div className="modals-logo-shoppe Hide-on-table Hide-on-mobile">
                <img src={Logo} alt="logo"></img>
              </div>
              <div className="auth-form">
                <div className="auth-form__container">
                  <div className="auth-form__header">
                    <h3 className="auth-form__heading">Đăng Ký</h3>
                    <span className="auth-form__switch-btn" onClick={handleLogin}>
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
                      <span className="erro">{validationMsg.EmailRegister}</span>
                    </div>
                    <div className="auth-form__group">
                      <input
                        value={passWordRegister}
                        onChange={(e) => SetPassWordRegister(e.target.value)}
                        type="password"
                        placeholder="Mật khẩu của bạn"
                        className="auth-form__input"
                      />
                      <span className="erro">{validationMsg.PassWordRegister}</span>
                    </div>
                    <div className="auth-form__group">
                      <input
                        value={passWord2Register}
                        onChange={(e) => SetPassWord2Register(e.target.value)}
                        type="password"
                        placeholder="Nhập lại mật khẩu"
                        className="auth-form__input"
                      />
                      <span className="erro">{validationMsg.PassWord2Register}</span>
                    </div>
                  </div>
                  <div className="auth-form_aside">
                    <p className="auth-for__policy-text">
                      Bằng việc bạn đăng ký, bạn đã đồng ý với CHUTOAN về
                      <a
                        className="auth-form_policy-text-link"
                        href="https://shopee.vn/legaldoc/termsOfService/?__classic__=1"
                      >
                        Điều khiển dịch vụ
                      </a>
                      &
                      <a
                        className="auth-form_policy-text-link"
                        href="https://shopee.vn/legaldoc/privacy/?__classic__=1"
                      >
                        chính sách bảo mật
                      </a>
                    </p>
                  </div>
                  <div className="auth-form__controls">
                    <button
                      className="btn auth-form__controls-back btn--normal"
                      onClick={() => navigate('/')}
                    >
                      TRỞ LẠI
                    </button>

                    <button type="submit" className="btn btn--prinary" onClick={handleRegisterForm}>
                      ĐĂNG KÝ
                    </button>
                  </div>
                </div>
                <div className="auth-form__socials">
                  <a
                    href="# "
                    className="auth-form__socials--facebook btn btn--size-s btn--with-icon"
                  >
                    <i className="auth-form__socials-icon fa-brands fa-facebook-square"></i>{' '}
                    <span className="auth-form__socials-title">Kết nối với Facebook</span>
                  </a>
                  <a
                    href="# "
                    className="auth-form__socials--google btn btn--size-s btn--with-icon"
                  >
                    <i className="auth-form__socials--google auth-form__socials-icon fa-brands fa-google"></i>
                    <span className="auth-form__socials-title">Đăng ký với google</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default RegisterForm;
