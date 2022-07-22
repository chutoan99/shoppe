import { useState } from 'react';
import { addListLoginForm } from '../redux/action';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import Footer from '../component/Footer.js';
let Logo2 = require('../Img/logo-2.png');
let Logo = require('../Img/shopee.png');
function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validationMsg, setValidationMsg] = useState({});
  const [emailLogin, setEmailLogin] = useState('');
  const [passWordLogin, SetPassWordLogin] = useState('');
  const handleRegister = () => {
    navigate('/register');
  };
  const validateAll = () => {
    const msg = {};
    if (isEmpty(emailLogin)) {
      msg.emailLogin = 'Pleas input your Email';
    } else if (!isEmail(emailLogin)) {
      msg.emailLogin = 'Email your is incorrect';
    }

    if (isEmpty(passWordLogin)) {
      msg.passWordLogin = 'Pleas input your PassWord';
    }

    setValidationMsg(msg);
    if (Object.keys(msg) > 0) return false;
    return true;
  };
  const handleLoginForm = () => {
    const isValid = validateAll();
    if (!isValid) return;
    const listLoginForm = {
      id: 10,
      email: emailLogin,
      passWord: passWordLogin,
    };
    dispatch(addListLoginForm(listLoginForm));
    localStorage.setItem('listRegisterForm', JSON.stringify(listLoginForm));
    setEmailLogin('');
    SetPassWordLogin('');
    dispatch(userLogin());
    navigate('/');
  };
  return (
    <>
      <div className="black">
        <div className="grid wide">
          <header>
            <div className="header_login">
              <div className="header_login-logo">
                <img src={Logo2} alt="logo" onClick={() => navigate('/')} />
                <span>Đăng Nhập</span>
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
                    <h3 className="auth-form__heading">Đăng Nhập</h3>
                    <span className="auth-form__switch-btn" onClick={handleRegister}>
                      Đăng Ký
                    </span>
                  </div>
                  <div className="auth-form__form">
                    <div className="auth-form__group">
                      <input
                        value={emailLogin}
                        onChange={(e) => setEmailLogin(e.target.value)}
                        type="text"
                        placeholder="Email của bạn"
                        className="auth-form__input"
                      />
                      <span className="erro">{validationMsg.emailLogin}</span>
                    </div>
                    <div className="auth-form__group">
                      <input
                        value={passWordLogin}
                        onChange={(e) => SetPassWordLogin(e.target.value)}
                        type="password"
                        placeholder="Mật khẩu của bạn"
                        className="auth-form__input"
                      />
                      <span className="erro">{validationMsg.passWordLogin}</span>
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

                    <button className="btn btn--prinary" onClick={handleLoginForm}>
                      ĐĂNG NHẬP
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
export default LoginForm;
