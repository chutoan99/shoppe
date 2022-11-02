import config from '../configAxios';
import {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailed,
} from '../redux/productsSlice';
import {
  fetchProductIdStart,
  fetchProductIdSuccess,
  fetchProductIdFailed,
} from '../redux/productIdSlice';
import {
  fetchCommentsStart,
  fetchCommentsSuccess,
  fetchCommentsFailed,
} from '../redux/commentSlice';
// lấy tất cả sản phẩm
export const ApiApp = async (setLoading, dispatch) => {
  dispatch(fetchProductsStart());
  setLoading(true);
  try {
    const response = await config({
      method: 'get',
      url: `datas`,
      headers: {},
    });
    if (response.status === 200) {
      dispatch(fetchProductsSuccess(response?.data?.items));
    } else {
      dispatch(fetchProductsFailed());
    }
  } catch (error) {
    dispatch(fetchProductsFailed(error));
  } finally {
    setLoading(false);
  }
};
// lấy sản phẩm theo id
export const ApiProductId = async (params, setLoading, dispatch) => {
  setLoading(true);
  dispatch(fetchProductIdStart());
  try {
    const response = await config({
      method: 'get',
      url: `data/item/${params.idItem}`,
      headers: {},
    });
    if (response.status === 200) {
      dispatch(fetchProductIdSuccess(response?.data[0]));
    } else {
      dispatch(fetchProductIdFailed());
    }
  } catch (error) {
    dispatch(fetchProductIdFailed(error));
  } finally {
    setLoading(false);
  }
};

// lấy comment
export const ApiProductComment = async (params, setLoading, dispatch) => {
  setLoading(true);
  dispatch(fetchCommentsStart());
  try {
    const response = await config({
      method: 'get',
      url: `data/comment/${params.idItem}`,
      headers: {},
    });
    if (response.status === 200) {
      dispatch(fetchCommentsSuccess(response?.data));
    }
  } catch (error) {
    dispatch(fetchCommentsFailed(error));
  } finally {
    setLoading(false);
  }
};
