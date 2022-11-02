import './login.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Footer, Loading } from '../../component/index';
import { ApiLogin } from '../../services/login';
import { validateLogin } from '../../utils/validate';
import IMG from '../../assets/img';
import ICON from '../../assets/icont';
function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { userLogin } = useSelector((state) => state.others);
  const [emailLogin, setEmailLogin] = useState('');

  const [passWordLogin, SetPassWordLogin] = useState('');
  const [validationMsg, setValidationMsg] = useState({});

  const handleLoginForm = async () => {
    const isValid = await validateLogin(emailLogin, passWordLogin, setValidationMsg);
    if (isValid) {
      await ApiLogin(emailLogin, passWordLogin, setLoading, dispatch, userLogin, navigate);
    }
  };
  // var axios = require('axios');
  // var data = JSON.stringify({
  //   email: emailLogin,
  //   password: passWordLogin,
  // });
  // var config = {
  //   method: 'post',
  //   url: 'https://servershopee.herokuapp.com/users/login',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   data: data,
  // };
  // axios(config);
  // setLoading(false)
  //   .then(function (response) {
  //     console.log(response);
  //     if (response.data === 'Success') {
  //       setTimeout(() => {
  //         navigate('/');
  //       }, 3000);
  //       dispatch(userLogin());
  //     }
  //   })
  //   .finally(function () {
  //     localStorage.setItem('users', emailLogin);
  //     setLoading(true);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  return (
    <>
      {loading && <Loading />}
      <div className="grid wide">
        <header>
          <div className="header_login">
            <div className="header_login-logo mob:pt-[10px]">
              <img src={IMG.LOGO2} alt="logo" onClick={() => navigate('/')} />
              <span>Đăng Nhập</span>
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
            <img src={IMG.LOGO} alt="logo"></img>
          </div>
          <div className="auth-form">
            <div className="auth-form__container">
              <div className="auth-form__header">
                <h3 className="auth-form__heading">Đăng Nhập</h3>
                <span className="auth-form__switch-btn" onClick={() => navigate('/register')}>
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
              <a href="# " className="auth-form__socials--facebook btn btn--size-s btn--with-icon">
                <span className="auth-form__socials-icon">{ICON.FACEBOOK}</span>
                <span className="auth-form__socials-title">Đăng nhập với Facebook</span>
              </a>
              <a href="# " className="auth-form__socials--google btn btn--size-s btn--with-icon">
                <span className="auth-form__socials--google auth-form__socials-icon">
                  {ICON.GOOGLE}
                </span>
                <span className="auth-form__socials-title">Đăng nhập với google</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default LoginForm;
