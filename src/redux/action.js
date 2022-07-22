export const addNumberCart = () => {
  return {
    type: 'addNumberCart',
  };
};
export const updateToast = () => {
  return {
    type: 'updateToast',
  };
};
export const userLogin = () => {
  return {
    type: 'userLogin',
  };
};
// export const goToHome = () => {
//   return {
//     type: 'goToHome',
//   };
// };
export const addListLoginForm = (data) => {
  return {
    type: 'addListLoginForm',
    payload: data,
  };
};
export const addCart = (data) => {
  return {
    type: 'addCart',
    payload: data,
  };
};
export const deleteCart = (data) => {
  return {
    type: 'deleteCart',
    payload: data,
  };
};
export const buyCart = (data) => {
  return {
    type: 'buyCart',
    payload: data,
  };
};
export const addListRegisterForm = (data) => {
  return {
    type: 'addListRegisterForm',
    payload: data,
  };
};
export const ChangePerPage = (data) => {
  return {
    type: 'ChangePerPage',
    payload: data,
  };
};
export const ChangeCurrentPage = (data) => {
  return {
    type: 'ChangeCurrentPage',
    payload: data,
  };
};
export const ChangeStart = (data) => {
  return {
    type: 'ChangeStart',
    payload: data,
  };
};
export const ChangeEnd = (data) => {
  return {
    type: 'ChangeEnd',
    payload: data,
  };
};
