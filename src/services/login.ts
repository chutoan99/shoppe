import config from '../configs/configAxios';

import { updateUserLogin } from '../redux/otherSlice';
export const ApiLogin = async (
  emailLogin: any,
  passWordLogin: any,
  setLoading: any,
  dispatch: any,
  userLogin: any,
  navigate: any
) => {
  setLoading(true);
  try {
    const response = await config({
      method: 'post',
      url: `users/login`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        email: emailLogin,
        password: passWordLogin,
      }),
    });
    if (response?.data === 'Success') {
      dispatch(updateUserLogin());
      localStorage.setItem('users', emailLogin);
      navigate('/');
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log('xo');
    setLoading(false);
  }
};
