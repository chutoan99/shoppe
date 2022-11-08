export const apiRegister = (
  nameRegister: string,
  passWordRegister: string,
  emailRegister: string,
  navigate: any,
  setLoading: any
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
    .then(function (response: any) {
      if (response.status === 201) {
        setLoading(false);
        navigate('/login');
      }
    })
    .catch(function (error: any) {
      console.log(error);
      setLoading(false);
    });
};
