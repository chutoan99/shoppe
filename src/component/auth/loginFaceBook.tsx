import { useSignInWithFacebook as UseSignInWithFacebook } from 'react-firebase-hooks/auth';
import { auth } from '../../configs/firebase';
import ICON from '../../assets/icons';

function loginFacebook() {
  const [signInWithFacebook, user, loading, error] = UseSignInWithFacebook(auth);
  const signInFaceBook = () => {
    signInWithFacebook();
  };
  return (
    <button className="auth-form__socials--facebook btn btn--size-s btn--with-icon hover:bg-[#3a5a98] hover:text-white" onClick={signInFaceBook}>
      <span className="auth-form__socials-icon">{ICON.FACEBOOK}</span>
      <span className="auth-form__socials-title">Đăng nhập với Facebook</span>
    </button>
  );
}
export default loginFacebook;
