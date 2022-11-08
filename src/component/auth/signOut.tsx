import { signOut } from 'firebase/auth';
import { auth } from '../../configs/firebase';
import { memo } from 'react';
function SignOut() {
  const logout = async () => {
    try {
      console.log('////////////////');
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <li className="Header__nav-user-item Header__nav-user-item--separate">
      <span onClick={logout}>Đăng xuất</span>
    </li>
  );
}
export default memo(SignOut);
