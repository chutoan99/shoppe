import './oder.css';
import { useState } from 'react';
import { addOrDerCart, deleteBuyCart } from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { PaymentMethods, Loading2, Footer, InforUser, CartOder, OderPay } from '../../component/index';
import IMG from '../../assets/imgs';
import SVG from '../../assets/svgs';
import ICON from '../../assets/icons';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
function Oder() {
  const priceShip = 3000000000;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { buyCart } = useAppSelector((state: RootState) => state.cart);
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
  var totals: any = [];
  buyCart?.forEach((e: any) => totals.push(e?.price * e?.amount));
  var total = 0;
  if (totals.length > 0) {
    for (let i = 0; i < totals.length; i++) {
      total += totals[i];
    }
  }
  return (
    <>
      {loading && <Loading2 />}
      <div>
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
      </div>
      <div className="p-[1.25rem]" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="order-border"></div>
        <InforUser />
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
        <CartOder buyCart={buyCart} priceShip={priceShip} />
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
        <PaymentMethods />
        <OderPay handelSubmit={handelSubmit} total={total} totalShip={totalShip}></OderPay>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Oder;
