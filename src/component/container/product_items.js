import './product_item.css';
import './produc-img.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports.js';
import { addCart } from '../../redux/cartSlice';
import {
  ProductComment,
  ProductDes,
  ToasMess,
  Loading2,
  ProductShop,
  ProductImgPc,
  ProductContent,
  HomeProduct,
} from '../index';
import ICON from '../../assets/icont';
import { ApiApp, ApiProductId, ApiProductComment } from '../../services/products';
import { ApiInfoShop } from '../../services/shop';
import { ApiCategoriesProduct } from '../../services/category';

function ProductItems() {
  const { toast } = useSelector((state) => state.others);
  const params = useParams();
  const dispatch = useDispatch();
  const { categories, products, comments } = useSelector((state) => state);
  const { shopInfo } = useSelector((state) => state.shop);
  const { data } = useSelector((state) => state.productId);

  const [loading, setLoading] = useState(true);
  const [toastMess, setToastMess] = useState(toast);
  const [animationAddCart, setAnimationAddCart] = useState('cartAnimation');
  const [showImg, setShowImg] = useState(false);
  const [showTableSize, setShowTableSize] = useState(false);
  const [indexImg, setIndexImg] = useState(0);
  const [amount, setAmount] = useState(1);
  const [NewOption, setNewOption] = useState(undefined);

  const handleIncrease = () => {
    setAmount(amount + 1);
  };
  const handleReduced = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
    if (amount < 1) {
      setAmount(1);
    }
  };
  const handleShowSizeTable = () => {
    setShowTableSize(true);
  };
  const HiddenTableSize = () => {
    setShowTableSize(false);
  };
  const handleShowImg = () => {
    setShowImg(true);
  };
  const hiddenImg = () => {
    setShowImg(false);
  };
  const handleChangeImg = (index) => {
    setIndexImg(index);
  };
  const cart = {
    itemid: data?.itemid,
    name: data?.name,
    image: data?.image,
    currency: data?.currency,
    stock: data?.stock,
    status: data?.sold,
    sold: data?.sold,
    historical_sold: data?.historical_sold,
    liked: data?.liked,
    liked_count: data?.liked_count,
    view_count: data?.view_count,
    price: data?.price,
    price_min: data?.price_min,
    price_max: data?.price_max,
    price_min_before_discount: data?.price_min_before_discount,
    price_max_before_discount: data?.price_max_before_discount,
    price_before_discount: data?.price_before_discount,
    has_lowest_price_guarantee: data?.has_lowest_price_guarantee,
    show_discount: data?.show_discount,
    raw_discount: data?.raw_discount,
    discount: data?.discount,
    size_chart: data?.size_chart,
    tier_variations: data?.tier_variations,
    shop_name: data?.shop_name,
    amount: amount,
    newOption: NewOption,
  };
  const handleAddToCart = () => {
    console.log(cart);
    dispatch(addCart(cart));
    setAnimationAddCart('cartAnimation product_cart-img-animation');
    setTimeout(() => {
      setAnimationAddCart('cartAnimation');
    }, 3400);
    setToastMess(true);
  };
  useEffect(() => {
    // lấy toàn bộ các sản phẩm trong data
    const fetchApiApp = async () => {
      await ApiApp(setLoading, dispatch);
    };
    // lấy danh mục gợi ý sản phẩm
    fetchApiApp();
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
      {loading ? (
        <Loading2 />
      ) : (
        <>
          {toastMess && <ToasMess />}
          <>
            <div className=" Hide-on-mobile mt-[120px]"></div>
            <div className="App__Container App__Container_padding-Button mob:pt-[20px]">
              <div className="grid wide">
                <div className="row sm-gutter pb-[30px] bg-[white]">
                  <div className="col c-12 mo-5 l-5">
                    <ProductImgPc
                      handleShowImg={handleShowImg}
                      animationAddCart={animationAddCart}
                      item={data}
                    />
                  </div>
                  <div className="col c-12  mo-7 l-7 ">
                    <ProductContent
                      item={data}
                      amount={amount}
                      showTableSize={showTableSize}
                      NewOption={NewOption}
                      setNewOption={setNewOption}
                      handleShowSizeTable={handleShowSizeTable}
                      handleIncrease={handleIncrease}
                      handleReduced={handleReduced}
                      HiddenTableSize={HiddenTableSize}
                      handleAddToCart={handleAddToCart}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
          <ProductShop item={shopInfo?.data} />
          {showImg && (
            <div className="image Hide-on-mobile">
              <div className="image-overPlay">
                <div className="image-slice">
                  <div>
                    <img
                      src={`${'https://cf.shopee.vn/file/'}${data?.images[indexImg]}`}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="image-slices">
                  <div className="l-12 mo-12 c-12">
                    <div className="image-slices-icon" onClick={hiddenImg}>
                      {ICON.CIRCLE_XMARK}
                    </div>
                    <div className="image-slices-heading">
                      <h2>{data?.name}</h2>
                    </div>
                    <div className="image-slices-items">
                      {data?.images?.map((image, index) => (
                        <img
                          key={index}
                          src={`${'https://cf.shopee.vn/file/'}${image}`}
                          alt=""
                          onClick={() => handleChangeImg(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="App__Container py-[12px]">
            <div className="grid wide">
              <div className="row">
                <div className="col-lg-10">
                  <ProductDes item={data} />
                  <div className="App__Container py-[12px]">
                    <div className="grid wide">
                      <div className="row">
                        <div className="col-lg-12">
                          <ProductComment items={comments?.data} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="App__Container py-[16px]">
                    <div className="grid wide">
                      <div className="row">
                        <HomeProduct
                          items={products?.data}
                          start={0}
                          end={20}
                          col={'col l-2-4 mo-4 c-6'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="wrapper">
                    <HomeProduct
                      items={categories?.data}
                      start={0}
                      end={16}
                      col={'col l-12 mo-4 c-6'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default ProductItems;
