import config from '../configAxios';
import {
  fetchCategoryStart,
  fetchCategorySuccess,
  fetchCategoryFailed,
} from '../redux/categorySlice';

// lấy danh mục các sản phẩm theo tiêu đề
export const ApiCategories = async (params, dispatch) => {
  dispatch(fetchCategoryStart());
  try {
    const response = await config({
      method: 'get',
      url: `data/category/${params.categories_name}`,
      headers: {},
    });
    if (response?.status === 200) {
      dispatch(fetchCategorySuccess(response?.data));
    } else {
      dispatch(fetchCategoryFailed());
    }
  } catch (error) {
    console.log(error);
  }
};
export const ApiCategoriesProduct = async (params, dispatch) => {
  dispatch(fetchCategoryStart());
  try {
    const response = await config({
      method: 'get',
      url: `data/category/${params?.name}`,
      headers: {},
    });
    if (response?.status === 200) {
      dispatch(fetchCategorySuccess(response?.data));
    } else {
      dispatch(fetchCategoryFailed());
    }
  } catch (error) {
    console.log(error);
  }
};
