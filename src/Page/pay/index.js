import '../../Style/shopping.css';
import './pay.css';
import IMG from '../../assets/img';
import ICON from '../../assets/icont';
import { useEffect, useState } from 'react';
import { LogoShopee, BoxSelect, HeaderNavbar } from '../../component/index';
import { deleteCart } from '../../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports.js';
import { useNavigate } from 'react-router-dom';
import { addBuyCart, updateAmount } from '../../redux/cartSlice';
import { formatPriceWithAmount } from '../../utils/fomarPrice';

function Pay() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.others);
  const { data, numberCart, numberBuyCart } = useSelector((state) => state.cart);
  const { buyCart } = useSelector((state) => state.cart);

  const [checked, setChecked] = useState([]);
  const onDeleteCartItem = (index) => {
    dispatch(deleteCart(index));
  };
  const handleCheck = (itemid, price, index) => {
    setChecked((prev) => {
      const isChecked = checked.includes(index);
      if (isChecked) {
        return checked.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  var totals = [];
  checked.forEach((e) => totals.push(data[e].price * data[e].amount));
  var total = 0;
  if (totals.length > 0) {
    for (let i = 0; i < totals.length; i++) {
      total += totals[i];
    }
  }

  const handleBuyCart = () => {
    var addBuyCarts = [];
    checked.forEach((e) => addBuyCarts.push(data[e]));
    if (userLogin) {
      dispatch(addBuyCart(addBuyCarts));
    }
    if (!userLogin) {
      navigate('/login');
    }
    if (numberBuyCart > 0 || userLogin) {
      navigate('/oder');
    }
  };
  return (
    <>
      {numberCart === 0 || data === undefined ? (
        <>
          {renderHeader()}
          {renderEmptyCart()}
        </>
      ) : (
        <>
          {renderHeader()}
          <div className="App__Container mob:mt-[120px] min-h-[380px]">
            <div className="grid wide pt-[16px]">
              <div className="sm-gutter">
                <div className="grid backR">
                  {renderTitleTable()}
                  <div>
                    {data?.map((item, index) => {
                      return (
                        <div className="table-body-list" key={index}>
                          <div>
                            {renderShopName(item)}
                            {renderItemList(item, index)}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {renderPay(total)}
        </>
      )}
    </>
  );
  function renderItemList(item, index) {
    return (
      <div className="grid backR2">
        <div className="shopping_cart">
          <label className="shopping_cart-checkBox">
            <input
              type="checkbox"
              checked={checked.includes(index)}
              onChange={() => handleCheck(item?.itemid, item?.price, index)}
            />
            <span className="checkmark"></span>
          </label>
          <div className="shopping_cart-img">
            <img src={`${'https://cf.shopee.vn/file/'}${item?.image}`} alt={item?.name} />
          </div>
          <div className="shopping_cart-img-title">
            <h3>{item?.name}</h3>
            <div className="shopping_cart-img-sale">
              <img src={IMG.SALE_STICKER} alt="sale" />
            </div>
          </div>
          {item?.tier_variations[0]?.name === '' ? null : <BoxSelect item={item} index={index} />}
        </div>
        <div className="shopping_cart-0ld-price Hide-on-mobile">
          <h1>đ {formatPriceWithAmount(item?.price_max_before_discount)}</h1>
          <h2>đ {formatPriceWithAmount(item?.price_max)}</h2>
        </div>
        <div className="shopping_cart-unit-price">
          <BottonAmount amount={item?.amount} index={index} />
          <div className="shopping_cart-warehouse Hide-on-mobile">
            <h1>Còn {item?.stock} Sản Phẩm</h1>
          </div>
        </div>
        <div className="shopping_cart-new-price">
          <h1 className="">đ{formatPriceWithAmount(item?.price_before_discount, item?.amount)}</h1>đ{' '}
          {formatPriceWithAmount(item?.price, item?.amount)}
        </div>
        <div className="shopping_cart-delete Hide-on-mobile">
          <h1 onClick={() => onDeleteCartItem(index)}>Xóa</h1>
          <h2>
            Sản Phẩm Tương Tự
            <span className="Hide-on-table Hide-on-mobile">{ICON.CARET_DOWN}</span>
          </h2>
        </div>
      </div>
    );
  }
  function renderShopName(item) {
    return (
      <div className="grid wide backR1">
        <div className="table_body-shop-name">
          <span>Yêu Thích</span>
          <h1 className="table_body-shop">{item?.shop_name}</h1>
          <label className="table_body-shop-icon">{ICON.MESS}</label>
        </div>
      </div>
    );
  }
  function renderHeader() {
    return (
      <header className="Header">
        <div className="grid wide">
          <HeaderNavbar></HeaderNavbar>
          <div className="Header-with-search sm-gutter">
            <LogoShopee />
            <div className="Header__search">
              <div className="Header__search-input-wrap">
                <input
                  type="text"
                  placeholder="Nhập để tìm kiếm sản phẩm"
                  className="Header_search-input"
                />
              </div>
              <button className="Header__search-btn">{ICON.MAGNIFYING}</button>
            </div>
          </div>
        </div>
      </header>
    );
  }
  function renderEmptyCart() {
    return (
      <div className="emptyCart-img">
        <img src={IMG.EMPTY_CART} alt="emptyCart" />
      </div>
    );
  }
  function renderTitleTable() {
    return (
      <div className="tile-content-container Hide-on-mobile">
        <div className="title-content">
          <div className="flex items-center">
            {/* <label className="shopping_cart-checkBox">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label> */}
            <p className="pl-[30px]">Sản Phẩm</p>
          </div>
        </div>
        <div className="title-content">
          <p className="text-center">Đơn Giá</p>
        </div>
        <div className="title-content">
          <p className="text-center">Số Lượng</p>
        </div>
        <div className="title-content">
          <p className="text-center">Số Tiền</p>
        </div>
        <div className="title-content">
          <p className="text-center">Thao Tác</p>
        </div>
      </div>
    );
  }
  function renderPay() {
    return (
      <div className="App__Container fixed ">
        <div className="grid wide">
          <div className="pay">
            <div className="pay1 ">
              <div className="grid">
                <div className="cart-Shopee-Voucher">
                  {ICON.TAGS}
                  <h1>Shopee Voucher</h1>
                  <h2>Chọn Hoặc Nhập Mã</h2>
                </div>
              </div>
            </div>
            <div className="pay2">
              <div className="grid">
                <div className="cart-Shopee-coin">
                  {ICON.COIN}
                  <h1>Shopee Xu</h1>
                  <h2> Bạn chưa chọn sản phẩm</h2>
                  {ICON.CIRCLE_QUESTION}
                </div>
              </div>
            </div>
            <div className="pay3">
              <div className="grid pay-container">
                <div className="select-all">
                  <label className="shopping_cart-checkBox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <h1 className="Hide-on-mobile">Chọn</h1>
                  <h1>Tất Cả</h1>
                  <h1 className="Hide-on-mobile">({data?.length})</h1>
                </div>
                <div className="shopping_cart-delete-total">
                  <span>Xóa</span>
                  <h2>Bỏ sản Phẩm Không Hoạt Động</h2>
                </div>
                <div className="shopping_cart-save">
                  <h1>Lưu Vào Thư Mục Đã Thích</h1>
                </div>
                <div className="shopping_cart-total-pay">
                  <h1>Tổng Thanh Toán</h1>
                  <h1 className="Hide-on-mobile"> ({checked?.length} Sản Phẩm):</h1>
                  <span>
                    <sup>đ</sup>
                    {(total / 100000).toLocaleString('it-IT')}
                  </span>
                </div>
                <button className="cart-btn-pay" onClick={handleBuyCart}>
                  Mua Hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Pay;
function BottonAmount({ amount, index }) {
  const dispatch = useDispatch();
  const [newAmount, setAmount] = useState(amount);
  const handleIncrease = () => {
    setAmount(newAmount + 1);
  };
  const handleReduced = () => {
    if (newAmount > 1) {
      setAmount(newAmount - 1);
    }
    if (newAmount < 1) {
      setAmount(1);
    }
  };
  useEffect(() => {
    dispatch(
      updateAmount({
        newAmount: newAmount,
        index: index,
      })
    );
  }, [newAmount]);
  return (
    <div>
      <button className="cursor-no-drop" onClick={handleReduced}>
        {ICON.MINUS}
      </button>
      <button disabled>{newAmount}</button>
      <button className="cursor-no-drop" onClick={handleIncrease}>
        {ICON.PLUS}
      </button>
    </div>
  );
}
