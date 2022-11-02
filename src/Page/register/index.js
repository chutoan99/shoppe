import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Loading, Footer } from '../../component/index';
import { validateRegister } from '../../utils/validate';
import { apiRegister } from '../../services/regiter';
import IMG from '../../assets/img';
import ICON from '../../assets/icont';

function RegisterForm() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [validationMsg, setValidationMsg] = useState({});

  const [nameRegister, setNameRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passWordRegister, SetPassWordRegister] = useState('');

  const handleRegisterForm = async () => {
    const isValid = await validateRegister(
      nameRegister,
      emailRegister,
      passWordRegister,
      setValidationMsg
    );
    if (isValid) {
      await apiRegister(nameRegister, passWordRegister, emailRegister, navigate, setLoading);
    }
  };
  const handelKeyDown = (e) => {
    console.log(e.code);
  };
  return (
    <>
      {loading && <Loading />}
      <div className="grid wide">
        <header>
          <div className="header_login">
            <div className="header_login-logo mob:pt-[10px]">
              <img src={IMG.LOGO2} alt="logo" onClick={() => navigate('/')} />
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
            <img src={IMG.LOGO} alt="logo"></img>
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
                    required
                    placeholder="Tên của bạn"
                    className="auth-form__input"
                    onKeyDown={handelKeyDown}
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
                    onKeyDown={handelKeyDown}
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
                    onKeyDown={handelKeyDown}
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
          <span className="auth-form__socials-icon">{ICON.FACEBOOK}</span>
          <span className="auth-form__socials-title">Đăng ký với Facebook</span>
        </a>
        <a href="# " className="auth-form__socials--google btn btn--size-s btn--with-icon">
          <span className="auth-form__socials--google auth-form__socials-icon">{ICON.GOOGLE}</span>

          <span className="auth-form__socials-title">Đăng ký với google</span>
        </a>
      </div>
    );
  }
}
export default RegisterForm;
