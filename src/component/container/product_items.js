import './product_item.css';
import './produc-img.css';
import axios from 'axios';
import ProductComment from './product_comment';
import ProductDes from './product_Des';
import ToasMess from '../toasMess/index';
import Loading2 from '../loading2/index';
import ProductShop from './product_shop';
import ProductImg from './product_img-pc';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductContent from './product_content';
import { useDispatch } from 'react-redux/es/exports.js';
import { addCart, addNumberCart } from '../../redux/action';
import HomeProduct from './home_Product';
function ProductItems() {
  const params = useParams();
  const dispatch = useDispatch();
  const { toast } = useSelector((state) => state);
  const [item, setItem] = useState({});
  const [itemSuggest, setItemSuggest] = useState({});
  const [itemSuggestList, setItemSuggestList] = useState({});
  const [comment, setComment] = useState({});
  const [itemShop, setItemShop] = useState({});
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
  const handleAddToCart = () => {
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
      price: item.price * amount,
      price_min: item.price_min,
      price_max: item.price_max,
      price_min_before_discount: item.price_min_before_discount,
      price_max_before_discount: item.price_max_before_discount,
      price_before_discount: item.price_before_discount * amount,
      has_lowest_price_guarantee: item.has_lowest_price_guarantee,
      show_discount: item.show_discount,
      raw_discount: item.raw_discount,
      discount: item.discount,
      size_chart: item.size_chart,
      tier_variations: item.tier_variations,
      shop_name: item.shop_name,
      amount: amount,
      newOption: NewOption,
    };
    dispatch(addCart(cart));
    dispatch(addNumberCart());
    setAnimationAddCart('cartAnimation product_cart-img-animation');
    setTimeout(() => {
      setAnimationAddCart('cartAnimation');
    }, 3400);
    setToastMess(true);
  };
  const callApi = async () => {
    setLoading(true);
    try {
      const url = `https://servershopee.herokuapp.com/data/item/${params.idItem}`;
      const { data } = await axios({
        url: url,
        method: 'get',
      });
      setItem(data[0]);
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };
  const ApiProductSuggest = async () => {
    setLoading(true);
    try {
      const url = `https://servershopee.herokuapp.com/data/category/${params.name}`;
      const { data } = await axios({
        url: url,
        method: 'get',
      });
      setItemSuggest(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };
  const ApiProductSuggestList = async () => {
    setLoading(true);
    try {
      const url = `https://servershopee.herokuapp.com/datas`;
      const { data } = await axios({
        url: url,
        method: 'get',
      });
      setItemSuggestList(data.items);
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };
  const ApiShop = async () => {
    setLoading(true);
    try {
      const url = `https://servershopee.herokuapp.com/dataShop/${params.shopId}`;
      const { data } = await axios({
        url: url,
        method: 'get',
      });
      setItemShop(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };
  const ApiComment = async () => {
    setLoading(true);
    try {
      const url = `https://servershopee.herokuapp.com/data/comment/${params.idItem}`;
      const { data } = await axios({
        url: url,
        method: 'get',
      });
      setComment(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };
  useEffect(() => {
    callApi();
    ApiComment();
    ApiShop();
    ApiProductSuggest();
    ApiProductSuggestList();
  }, [params.idItem]);
  return (
    <>
      {loading ? (
        <Loading2 />
      ) : (
        <>
          {toastMess ? <ToasMess /> : null}
          <>
            <div className=" Hide-on-mobile mt-[120px]"></div>
            <div className="App__Container App__Container_padding-Button mob:pt-[20px]">
              <div className="grid wide">
                <div className="row sm-gutter pb-[30px] bg-[white]">
                  <div className="col c-12 mo-5 l-5">
                    <ProductImg
                      handleShowImg={handleShowImg}
                      animationAddCart={animationAddCart}
                      item={item}
                    />
                  </div>
                  <div className="col c-12  mo-7 l-7 ">
                    <ProductContent
                      item={item}
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
          <ProductShop item={itemShop} />
          {showImg ? (
            <div className="image Hide-on-mobile">
              <div className="image-overPlay">
                <div className="image-slice">
                  <div>
                    <img
                      src={`${'https://cf.shopee.vn/file/'}${item.images[indexImg]}`}
                      alt="img"
                    />
                  </div>
                </div>
                <div className="image-slices">
                  <div className="l-12 mo-12 c-12">
                    <div className="image-slices-icon" onClick={hiddenImg}>
                      <i className="fa-regular fa-circle-xmark"></i>
                    </div>
                    <div className="image-slices-heading">
                      <h2>{item.name}</h2>
                    </div>
                    <div className="image-slices-items">
                      {item.images.map((image, index) => (
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
          ) : null}
          <div className="App__Container py-[12px]">
            <div className="grid wide">
              <div className="row">
                <div className="col-lg-10">
                  <ProductDes item={item} />
                  <div className="App__Container py-[12px]">
                    <div className="grid wide">
                      <div className="row">
                        <div className="col-lg-12">
                          <ProductComment items={comment} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="App__Container py-[16px]">
                    <div className="grid wide">
                      <div className="row">
                        <HomeProduct
                          items={itemSuggestList}
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
                    <HomeProduct items={itemSuggest} start={0} end={16} col={'col l-12 mo-4 c-6'} />
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
