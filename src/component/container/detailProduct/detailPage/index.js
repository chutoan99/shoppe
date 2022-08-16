import './xxx.css';
import { useDispatch } from 'react-redux/es/exports.js';
import { addNumberCart, updateToast, addCart } from '../../../../redux/action';
import './produc-img.css';
import datas from '../../../../redux/data';
import { useState } from 'react';
import ShopName from './product_shop';
import ProductImg from './product_img-pc';
import ProductDes from '../../productDes';
import ProductContent from './product_content';
import ToasMess from '../../../toasMess/index';
import { useSelector } from 'react-redux';
function ProductItems() {
  const { toast } = useSelector((state) => state);
  const [toastMess, setToastMess] = useState(toast);
  const [animationAddCart, setAnimationAddCart] = useState('cartAnimation');
  const [showImg, setShowImg] = useState(false);
  const [showTableSize, setShowTableSize] = useState(false);
  const [indexImg, setIndexImg] = useState(0);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();
  const inforItem = JSON.parse(localStorage.getItem('inforItem'));
  const indexItem = inforItem.index;
  const item = datas.items[indexItem];
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
  const handleAddToCart = () => {
    dispatch(addNumberCart());
    const cart = {
      itemid: item.itemid,
      name: item.name,
      image: item.image,
      currency: item.currency,
      stock: item.stock,
      status: item.sold,
      sold: item.sold,
      historical_sold: item.historical_sold,
      liked: item.liked,
      liked_count: item.liked_count,
      view_count: item.view_count,
      price: item.price,
      price_min: item.price_min,
      price_max: item.price_max,
      price_min_before_discount: item.price_min_before_discount,
      price_max_before_discount: item.price_max_before_discount,
      price_before_discount: item.price_before_discount,
      has_lowest_price_guarantee: item.has_lowest_price_guarantee,
      show_discount: item.show_discount,
      raw_discount: item.raw_discount,
      discount: item.discount,
      size_chart: item.size_chart,
      tier_variations: item.tier_variations,
      shop_name: item.shop_name,
      amount: amount,
    };
    dispatch(addCart(cart));
    setAnimationAddCart('cartAnimation product_cart-img-animation');
    setTimeout(() => {
      setAnimationAddCart('cartAnimation');
    }, 3500);
    setToastMess(true);
  };
  return (
    <>
      {toastMess ? <ToasMess /> : null}
      <div className="App__Container App__Container_padding-Button marginT">
        <div className="grid wide">
          <div className="row sm-gutter back">
            <div className="col c-12 mo-5 l-5">
              <ProductImg
                item={item}
                handleShowImg={handleShowImg}
                animationAddCart={animationAddCart}
              />
            </div>
            <div className="col c-12  m-7 l-7 ">
              <ProductContent
                item={item}
                amount={amount}
                showTableSize={showTableSize}
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
      <ShopName item={item} />
      {showImg ? (
        <div className="image Hide-on-mobile">
          <div className="image-overPlay">
            <div className="image-slice">
              <div>
                <img src={`${'https://cf.shopee.vn/file/'}${item.images[indexImg]}`} alt="img" />
              </div>
            </div>
            <div className="image-slices">
              <div className="l-12 m-12 c-12">
                <div className="image-slices-icon" onClick={hiddenImg}>
                  <i className="fa-regular fa-circle-xmark"></i>
                </div>
                <div className="image-slices-heading">
                  <h2>{item.name}</h2>
                </div>
                <div className="image-slices-items">
                  {item.images.map((image, index) => (
                    <img
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
      ) : null}
      <ProductDes item={item} />
    </>
  );
}
export default ProductItems;
