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
export const updateHeartTrue = () => {
  return {
    type: 'updateHeartTrue',
  };
};
export const updateLoading = () => {
  return {
    type: 'updateLoading',
  };
};
export const LoadingTrue = () => {
  return {
    type: 'LoadingTrue',
  };
};
export const LoadingFalse = () => {
  return {
    type: 'LoadingFalse',
  };
};
export const updateHeartFalse = () => {
  return {
    type: 'updateHeartFalse',
  };
};
export const userLogin = () => {
  return {
    type: 'userLogin',
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
