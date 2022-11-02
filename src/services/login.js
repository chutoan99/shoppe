import axios from 'axios';
import { updateUserLogin } from '../redux/otherSlice';
export const ApiLogin = async (
  emailLogin,
  passWordLogin,
  setLoading,
  dispatch,
  userLogin,
  navigate
) => {
  var data = JSON.stringify({
    email: emailLogin,
    password: passWordLogin,
  });
  setLoading(true);
  var config = {
    method: 'post',
    url: 'https://servershopee.herokuapp.com/users/login',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      console.log(response);
      if (response?.status === 200) {
        setTimeout(() => {
          navigate('/');
        }, 3000);
        localStorage.setItem('users', emailLogin);
        dispatch(updateUserLogin());
        setLoading(false);
      }
    })
    .catch(function (error) {
      console.log(error);
      setLoading(false);
    });
};
