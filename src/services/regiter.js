export const apiRegister = (
  nameRegister,
  passWordRegister,
  emailRegister,
  navigate,
  setLoading
) => {
  const axios = require('axios');
  const data = JSON.stringify({
    name: nameRegister,
    password: passWordRegister,
    email: emailRegister,
  });
  const config = {
    method: 'post',
    url: 'https://servershopee.herokuapp.com/users',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  setLoading(true);
  axios(config)
    .then(function (response) {
      if (response.status === 201) {
        setLoading(false);
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    })
    .catch(function (error) {
      console.log(error);
      setLoading(false);
    });
};
