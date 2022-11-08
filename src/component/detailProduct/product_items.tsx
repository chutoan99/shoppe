import './product_item.css';
import './produc-img.css';
import { useState } from 'react';
import { addCart } from '../../redux/cartSlice';
import { ProductComment, ProductDes, ToasMess, Loading2, ProductShop, ProductImgPc, ProductContent, HomeProduct } from '../index';
import ICON from '../../assets/icons';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { cart } from '../../types/index';

interface ProductItems {
  loading: boolean;
}
function ProductItems({ loading }: ProductItems) {
  const dispatch = useAppDispatch();
  const { toast } = useAppSelector((state: RootState) => state.others);
  const { shopInfo } = useAppSelector((state: RootState) => state.shop);
  const { data } = useAppSelector<any>((state: RootState) => state.productId);
  const { categories, products, comments } = useAppSelector((state: RootState) => state);
  const [toastMess, setToastMess] = useState(toast);
  const [animationAddCart, setAnimationAddCart] = useState('cartAnimation');
  const [showImg, setShowImg] = useState(false);
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
  const cart: cart = {
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
    dispatch(addCart(cart));
    setAnimationAddCart('cartAnimation product_cart-img-animation');
    setTimeout(() => {
      setAnimationAddCart('cartAnimation');
    }, 3400);
    setToastMess(true);
  };

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
                    <ProductImgPc setShowImg={setShowImg} animationAddCart={animationAddCart} item={data} />
                  </div>
                  <div className="col c-12  mo-7 l-7 ">
                    <ProductContent
                      item={data}
                      amount={amount}
                      NewOption={NewOption}
                      setNewOption={setNewOption}
                      handleIncrease={handleIncrease}
                      handleReduced={handleReduced}
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
                    <img src={`${process.env.REACT_APP_IMG_URl}${data?.images[indexImg]}`} alt="img" />
                  </div>
                </div>
                <div className="image-slices">
                  <div className="l-12 mo-12 c-12">
                    <div className="image-slices-icon" onClick={() => setShowImg(false)}>
                      {ICON.CIRCLE_XMARK}
                    </div>
                    <div className="image-slices-heading">
                      <h2>{data?.name}</h2>
                    </div>
                    <div className="image-slices-items">
                      {data?.images?.map((image: any, index: any) => (
                        <img key={index} src={`${process.env.REACT_APP_IMG_URl}${image}`} alt="" onClick={() => setIndexImg(index)} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="App__Container py-[12px]">
            <div className="grid wide">
              <div className="row gap-[-20px]">
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
                        <HomeProduct items={products?.data} start={0} end={20} col={'col l-2-4 mo-4 c-6'} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="wrapper">
                    <HomeProduct items={categories?.data} start={0} end={16} col={'col l-12 mo-4 c-6'} />
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
