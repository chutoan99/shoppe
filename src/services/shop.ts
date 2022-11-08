import config from '../configs/configAxios';
import {
  fetchShopInfoStart,
  fetchShopInfoSuccess,
  fetchShopInfoFailed,
  fetchShopItemStart,
  fetchShopItemSuccess,
  fetchShopItemFailed,
} from '../redux/shopSlice';
// lấy thông tin của shop
export const ApiInfoShop = async (params: any, setLoading: any, dispatch: any) => {
  dispatch(fetchShopInfoStart());
  setLoading(true);

  try {
    const response = await config({
      method: 'get',
      url: `dataShop/${params.shopId}`,
      headers: {},
    });
    if (response?.status === 200) {
      dispatch(fetchShopInfoSuccess(response?.data));
    }
  } catch (error) {
    dispatch(fetchShopInfoFailed(error));
  } finally {
    setLoading(false);
  }
};
// lấy các sản phẩm thuộc shop

export const ApiItemShop = async (params: any, setItems: any, setLoading: any, dispatch: any) => {
  setLoading(true);
  dispatch(fetchShopItemStart());
  console.log(params);
  try {
    const response = await config({
      method: 'get',
      url: `data/shop/${params?.id}`,
      headers: {},
    });
    console.log(response);
    if (response?.status === 200) {
      setItems(response?.data);
      dispatch(fetchShopItemSuccess(response?.data));
    }
  } catch (error) {
    dispatch(fetchShopItemFailed(error));
  } finally {
    setLoading(false);
  }
};
