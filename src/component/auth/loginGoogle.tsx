import { useSignInWithGoogle as UseSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../configs/firebase';
import ICON from '../../assets/icons';
import { memo } from 'react';

function loginGoogle() {
  const [signInWithGoogle, _user, _loading, _error] = UseSignInWithGoogle(auth);

  const signIn = () => {
    signInWithGoogle();
  };

  return (
    <button className="auth-form__socials--google btn btn--size-s btn--with-icon hover:bg-white" onClick={signIn}>
      <span className="auth-form__socials--google auth-form__socials-icon">{ICON.GOOGLE}</span>
      <span className="auth-form__socials-title">Đăng Nhập với google</span>
    </button>
  );
}
export default memo(loginGoogle);
