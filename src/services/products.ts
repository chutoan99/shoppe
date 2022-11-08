import config from '../configs/configAxios';
import { fetchProducts } from '../redux/productsSlice';
import { fetchProductIdStart, fetchProductIdSuccess, fetchProductIdFailed } from '../redux/productIdSlice';
import { fetchCommentsStart, fetchCommentsSuccess, fetchCommentsFailed } from '../redux/commentSlice';
// lấy tất cả sản phẩm
// export const ApiApp = async (setLoading: any, dispatch: any) => {
//   dispatch(fetchProductsStart());
//   setLoading(true);
//   try {
//     const response = await config({
//       method: 'get',
//       url: `datas`,
//       headers: {},
//     });
//     if (response.status === 200) {
//       dispatch(fetchProductsSuccess(response?.data?.items));
//     } else {
//       dispatch(fetchProductsFailed('error'));
//     }
//   } catch (error) {
//     dispatch(fetchProductsFailed(error));
//   } finally {
//     setLoading(false);
//   }
// };
// lấy sản phẩm theo id
export const ApiProductId = async (params: any, setLoading: any, dispatch: any) => {
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
      dispatch(fetchProductIdFailed('error'));
    }
  } catch (error) {
    dispatch(fetchProductIdFailed(error));
  } finally {
    setLoading(false);
  }
};

export const QueryApp = async () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await config({
        method: 'get',
        url: `datas`,
        headers: {},
      });
      resolve(response?.data?.items);
    } catch (error) {
      reject(error);
    }
  });

// lấy comment
export const ApiProductComment = async (params: any, setLoading: any, dispatch: any) => {
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
