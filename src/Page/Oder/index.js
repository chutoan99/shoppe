import './oder.css';
import { useState } from 'react';
import { addOrDerCart, deleteBuyCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { PaymentMethods, Loading2, Footer } from '../../component/index';
import IMG from '../../assets/img';
import SVG from '../../assets/svg';
import ICON from '../../assets/icont';
import { formatPriceWithAmount } from '../../utils/fomarPrice';
function Oder() {
  const priceShip = 3000000000;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { buyCart } = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);
  const lengthCart = buyCart?.length;
  const handleGotoHome = () => {
    navigate('/');
    dispatch(deleteBuyCart(lengthCart));
  };
  const handelSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(addOrDerCart(buyCart));
      dispatch(deleteBuyCart(lengthCart));
      navigate('/');
      setLoading(false);
    }, 2000);
  };
  const totalShip = priceShip * buyCart?.length;
  var totals = [];
  buyCart?.forEach((e) => totals.push(e?.price * e?.amount));
  var total = 0;
  if (totals.length > 0) {
    for (let i = 0; i < totals.length; i++) {
      total += totals[i];
    }
  }
  return (
    <>
      {loading && <Loading2 />}
      <div>{renderHeader()}</div>
      <div className="p-[1.25rem]" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="order-border"></div>
        {renderInforUser()}
        {renderTitleContent()}
        {renderCart()}
        {renderVouchers()}
        <PaymentMethods />
        {renderOrderpay()}
      </div>
      <Footer></Footer>
    </>
  );
  function renderCart() {
    return (
      <>
        {buyCart?.map((item, index) => (
          <div className="table-body-list" key={index}>
            <div>
              <div className="backR1">
                <div className="table_body-shop-name table_body-shop-name-order">
                  <span>Yêu Thích</span>
                  <h1 className="table_body-shop">{item?.shop_name}</h1>
                  <label className="table_body-shop-icon">{ICON.MESS}</label>
                </div>
              </div>
              <div className="grid oderR2">
                <div className="shopping_cart">
                  <div className="shopping_cart-img-order">
                    <img src={`${'https://cf.shopee.vn/file/'}${item?.image}`} alt={item.name} />
                  </div>
                  <div className="shopping_cart-img-title-order">
                    <div className="title-order-content">{item?.name}</div>
                    <div className="flex">
                      {item?.tier_variations?.map((tier_variation, index) => (
                        <div className="shopping_cart-tier_variation" key={index}>
                          {tier_variation?.name} <span>{item?.newOption}</span>
                        </div>
                      ))}
                    </div>
                    <div className="shopping_cart-0ld-price px-[5px]">
                      <h2>đ {formatPriceWithAmount(item?.price_max)}</h2>
                    </div>
                    <div className="px-[5px] text-center">x{item.amount}</div>
                    <div className="shopping_cart-new-price px-[5px]">
                      đ {formatPriceWithAmount(item?.price, item?.amount)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-container">
              <div className="order-note">
                <span>Lời nhắn:</span>
                <div className="order-note-input">
                  <input placeholder="Lưu Ý Cho Người Bán..." type="text"></input>
                </div>
              </div>
              <div className="order-ship">
                <div className="order-shipping-unit">
                  <span>Đơn vị vận chuyển</span>
                  <p>Nhanh</p>
                  <label>Thay Đổi</label>
                  <h2> đ {(priceShip / 100000).toLocaleString('it-IT')}</h2>
                </div>
                <div className="order-received-date">
                  <p>Nhận hàng vào 27 Th08 - 30 Th08</p>
                  <p> (Nhanh tay vào ngay "Shopee Voucher" để săn mã Miễn phí vận chuyển nhé!)</p>
                </div>
              </div>
            </div>
            <div className="order-price">
              <span>Tổng số tiền ({item?.amount} sản phẩm):</span>
              <label>đ{formatPriceWithAmount(item?.price, item?.amount, priceShip)}</label>
            </div>
          </div>
        ))}
      </>
    );
  }
  function renderOrderpay() {
    return (
      <div className="order-pay">
        <div>
          <div className="order-pay-inner">
            <div></div>
            <div className="order-pay-content">
              <h3>Tổng tiền hàng</h3>
              <h3>Phí vận chuyển</h3>
              <h3>Tổng thanh toán:</h3>
            </div>
            <div className="order-pay-content">
              <h3>đ{formatPriceWithAmount(total)}</h3>
              <h3>đ{formatPriceWithAmount(totalShip)}</h3>
              <h1>₫{formatPriceWithAmount(total, 0, totalShip)}</h1>
            </div>
          </div>
          <div className="order-pay-footer">
            <div className="order-pay-footer-des">
              Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
              <a href="https://shopee.vn/legaldoc/policies/">Điều khoản Shopee</a>
            </div>
            <button onClick={handelSubmit}>Đặt hàng</button>
          </div>
        </div>
      </div>
    );
  }
  function renderHeader() {
    return (
      <header>
        <div className="header_login">
          <div className="header_login-logo mob:pt-[10px]">
            <img src={IMG.LOGO2} alt="logo" onClick={handleGotoHome} />
            <span style={{ color: '#ee4d2d' }}>Thanh Toán</span>
          </div>
          <div className="header_login-logo-helps">
            <a href="# ">Bạn cầu giúp đỡ?</a>
          </div>
        </div>
      </header>
    );
  }
  function renderInforUser() {
    return (
      <div className="order-info">
        <h1>{ICON.LOCATION}Địa Chỉ Nhận Hàng</h1>
        <div>
          <div className="order-name">Chu toan (+84) 972712621</div>
          71/50/23 điện biên phủ, Phường 15, Quận Bình Thạnh, TP. Hồ Chí Minh{' '}
          <label>Mặc Định</label> <span>Thay Đổi</span>
        </div>
      </div>
    );
  }
  function renderTitleContent() {
    return (
      <div className="tile-content-container-oder Hide-on-mobile">
        <div className="title-content">
          <div className="text-center items-center">
            <p>Sản Phẩm</p>
          </div>
        </div>
        <div className="title-content">
          <p className="text-center">Đơn Giá</p>
        </div>
        <div className="title-content">
          <p className="text-center">Số Lượng</p>
        </div>
        <div className="title-content">
          <p className="text-center">Thành Tiền</p>
        </div>
      </div>
    );
  }
  function renderVouchers() {
    return (
      <div className="order-shopee-xu">
        <div style={{ borderBottom: '1px solid rgba(0,0,0,.05)' }}>
          <div className="order-shopee-xu-heading">
            <div className="order-shoppe-heading-inner">
              {ICON.TAGS}
              <label>Shopee Voucher</label>
            </div>
            <span>Chọn Voucher</span>
          </div>
        </div>
        <div>
          <div className="order-shopee-xu-footer">
            <div className="order-shopee-xu-footer-inner">
              {SVG.SHOPEEXU}
              <label>Shopee Xu</label>
              <span> Không thể sử dụng Xu</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Oder;
