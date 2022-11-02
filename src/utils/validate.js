import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';

// kiểm tra dữ liệu đăng nhập

export const validateLogin = (emailLogin, passWordLogin, setValidationMsg) => {
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
// kiểm tra dữ liệu đăng ký
export const validateRegister = (
  nameRegister,
  emailRegister,
  passWordRegister,
  setValidationMsg
) => {
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
