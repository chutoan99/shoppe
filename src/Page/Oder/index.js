import './oder.css';
import { deleteBuyCart, addStatusOrder } from '../../redux/action';
import { useNavigate } from 'react-router-dom';
import Footer from '../../component/footer/index';
import PaymentMethods from '../../component/PaymentMethods';
import HeaderNavbar from '../../component/header/header_Navbar';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import Loading2 from '../../component/loading2';
import { useState } from 'react';
let Logo2 = require('../../Img/logo-2.png');
function Oder() {
  const priceShip = 3000000000;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { BuyCart } = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const handleGotoHome = () => {
    navigate('/');
    const lenghtCart = BuyCart[0].length;
    dispatch(deleteBuyCart(lenghtCart));
  };
  const handelSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      const lenghtCart = BuyCart[0].length;

      dispatch(addStatusOrder(BuyCart[0][0]));
      dispatch(deleteBuyCart(lenghtCart));
      navigate('/');
      setLoading(false);
    }, 2000);
  };
  const totalShip = priceShip * BuyCart[0].length;
  var totals = [];
  BuyCart[0].forEach((e) => totals.push(e.price));
  var total = 0;
  if (totals.length > 0) {
    for (let i = 0; i < totals.length; i++) {
      total += totals[i];
    }
  }
  return (
    <>
      {loading ? <Loading2 /> : null}
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
        {BuyCart[0].map((item, index) => (
          <div className="table-body-list" key={index}>
            <div>
              <div className="backR1">
                <div className="table_body-shop-name table_body-shop-name-order">
                  <span>Yêu Thích</span>
                  <h1 className="table_body-shop">{item.shop_name}</h1>
                  <label className="table_body-shop-icon">
                    <i className="fa-solid fa-message"></i>
                  </label>
                </div>
              </div>
              <div className="grid oderR2">
                <div className="shopping_cart">
                  <div className="shopping_cart-img-order">
                    <img src={`${'https://cf.shopee.vn/file/'}${item.image}`} alt={item.name} />
                  </div>
                  <div className="shopping_cart-img-title-order">
                    <div className="title-order-content">{item.name}</div>
                    <div className="flex">
                      {item.tier_variations.map((tier_variation, index) => (
                        <div className="shopping_cart-tier_variation" key={index}>
                          {tier_variation.name} <span>{item.newOption}</span>
                        </div>
                      ))}
                    </div>
                    <div className="shopping_cart-0ld-price px-[5px]">
                      <h2>đ {(item.price_max / 100000).toLocaleString('it-IT')}</h2>
                    </div>
                    <div className="px-[5px] text-center">x{item.amount}</div>
                    <div className="shopping_cart-new-price px-[5px]">
                      đ {(item.price / 100000).toLocaleString('it-IT')}
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
              <span>Tổng số tiền ({item.amount} sản phẩm):</span>
              <label>đ{(item.price / 100000 + priceShip / 100000).toLocaleString('it-IT')}</label>
            </div>
          </div>
        ))}
      </>
    );
  }
  function renderOrderpay() {
    return (
      <div class="order-pay">
        <div>
          <div className="order-pay-inner">
            <div></div>
            <div className="order-pay-content">
              <h3>Tổng tiền hàng</h3>
              <h3>Phí vận chuyển</h3>
              <h3>Tổng thanh toán:</h3>
            </div>
            <div className="order-pay-content">
              <h3>đ {(total / 100000).toLocaleString('it-IT')}</h3>
              <h3>đ{(totalShip / 100000).toLocaleString('it-IT')}</h3>
              <h1>₫{((total + totalShip) / 100000).toLocaleString('it-IT')}</h1>
            </div>
          </div>
          <div class="order-pay-footer">
            <div class="order-pay-footer-des">
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
            <img src={Logo2} alt="logo" onClick={handleGotoHome} />
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
        <h1>
          <i class="fa-solid fa-location-dot"></i>Địa Chỉ Nhận Hàng
        </h1>
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
              <i class="fa-solid fa-tags"></i>
              <label>Shopee Voucher</label>
            </div>
            <span>Chọn Voucher</span>
          </div>
        </div>
        <div>
          <div className="order-shopee-xu-footer">
            <div className="order-shopee-xu-footer-inner">
              <svg fill="none" viewBox="0 0 18 18" class="shopee-svg-icon UkgpNV icon-coin-line">
                <path
                  stroke="#FFA600"
                  stroke-width="1.3"
                  d="M17.35 9A8.35 8.35 0 11.65 9a8.35 8.35 0 0116.7 0z"
                ></path>
                <path
                  fill="#FFA600"
                  fill-rule="evenodd"
                  stroke="#FFA600"
                  stroke-width=".2"
                  d="M6.86 4.723c-.683.576-.998 1.627-.75 2.464.215.725.85 1.258 1.522 1.608.37.193.77.355 1.177.463.1.027.2.051.3.08.098.03.196.062.294.096.06.021.121.044.182.067.017.006.107.041.04.014-.07-.028.071.03.087.037.286.124.56.27.82.44.114.076.045.024.151.111a2.942 2.942 0 01.322.303c.087.093.046.042.114.146.18.275.245.478.235.8-.01.328-.14.659-.325.867-.47.53-1.232.73-1.934.696a4.727 4.727 0 01-1.487-.307c-.45-.182-.852-.462-1.242-.737-.25-.176-.643-.04-.788.197-.17.279-.044.574.207.75.753.532 1.539.946 2.474 1.098.885.144 1.731.124 2.563-.224.78-.326 1.416-.966 1.607-1.772.198-.838-.023-1.644-.61-2.29-.683-.753-1.722-1.17-2.706-1.43a4.563 4.563 0 01-.543-.183c.122.048-.044-.02-.078-.035a4.77 4.77 0 01-.422-.212c-.594-.338-.955-.722-.872-1.369.105-.816.757-1.221 1.555-1.28.808-.06 1.648.135 2.297.554.614.398 1.19-.553.58-.947-1.33-.86-3.504-1.074-4.77-.005z"
                  clip-rule="evenodd"
                ></path>
              </svg>
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
