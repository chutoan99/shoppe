import { useEffect, useState, memo } from 'react';
import { useParams } from 'react-router-dom';
import { Footer, Header, ProductDetail } from '../../containers/index';

import { useAppDispatch } from '../../hooks/hooks';
import { ApiCategoriesProduct } from '../../services/category';
import { ApiProductComment, ApiProductId } from '../../services/products';
import { ApiInfoShop } from '../../services/shop';

function DetailProduct() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // lấy danh mục gợi ý sản phẩm
    const fetchApiCategories = async () => {
      await ApiCategoriesProduct(params, dispatch);
    };
    fetchApiCategories();
    // lấy sản phẩm theo id
    const fetchApiProductId = async () => {
      await ApiProductId(params, setLoading, dispatch);
    };
    fetchApiProductId();
    // lấy thông tin shop
    const fetchInfoShop = async () => {
      await ApiInfoShop(params, setLoading, dispatch);
    };
    fetchInfoShop();
    // lấy commnets
    const fetchApiProductComment = async () => {
      await ApiProductComment(params, setLoading, dispatch);
    };
    fetchApiProductComment();
  }, [params]);
  return (
    <>
      <Header />
      <ProductDetail loading={loading} />
      <Footer />
    </>
  );
}
export default memo(DetailProduct);
