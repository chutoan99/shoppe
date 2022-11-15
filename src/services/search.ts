import config from '../configs/configAxios';
import { fetchSearchStart, fetchSearchSuccess, fetchSearchFailed } from '../redux/searchSlice';
// tìm kiếm sản phẩm theo nội dung
export const ApiSearch = async (params: any, dispatch: any, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  dispatch(fetchSearchStart());
  setLoading(true);
  try {
    const response = await config({
      method: 'get',
      url: `data/search?search=${params.search}`,
      headers: {},
    });
    if (response?.status === 200) {
      dispatch(fetchSearchSuccess(response?.data));
    } else {
      dispatch(fetchSearchFailed('error'));
    }
  } catch (error) {
    dispatch(fetchSearchFailed(error));
    setLoading(false);
  } finally {
    setLoading(false);
  }
};
